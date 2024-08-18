// Importaciones
import { useState, useEffect } from "react"
// Custom hooks
import useForm from "./hooks/useHandleForm"
import useNotification from './hooks/useNotification'

// Secciones de la pagina
import Header from './sections/Header'
import FormTask from "./sections/FormTask"
import Tasks from "./sections/Tasks"

// Componentes de la pagina
import Loader from './components/Loader'
import { Notification, NotificationError } from './components/Notifications'

// Llamadas a la API
import { loadTasks } from "./handlers/loadTasks"
import { createTask } from "./handlers/createTask"
import { removeTask } from "./handlers/deleteTask"
import { updateInfo } from "./handlers/updateTask"
import { updateCheck } from "./handlers/updateCheck"


const App = () => {
  const [tasks, setTasks] = useState([]) // Estado que almacena las tareas
  const [loading, setLoading] = useState(false) // Estado que indica si esta cargando las tareas
  // const [message, setMessage] = useState(null) // Estado que muestra mensaje de exito
  const [message, showNotification] = useNotification()
  // const [messageError, setMessageError] = useState(null) // Estado que muestra mensajes de error
  const [messageError, showNotificationError] = useNotification() // Estado que muestra mensajes de error

  const [newTaskInfo, setNewTaskInfo, resetEdit] = useForm({ // Estado que almacena la nueva informacion de una tarea
    title: '',
    description: '',
    priority: 'baja',
  })

  // Llamamos a nuestro custom hook para actualizar los valores
  const [taskInfo, handleInputChange, resetForm] = useForm({
    title: '',
    description: '',
    priority: 'baja',
    completed: false
  })

  const [notTitle, setNotTitle] = useState(0) // Estado que cuenta cuantas tareas no tienen titulo

  const [searchValue, setSearchValue] = useState('') // Estado que almacena el valor de la busqueda


  // Obtenemos todas las tareas
  useEffect(() => {
    setLoading(true) // Actualizamos el estado a true

    const fetchTasks = async () => {
      try {
        // Usamos un timeout que dura 3 segundos
        await new Promise(resolve => setTimeout(resolve, 3000))

        const tasks = await loadTasks()
        setTasks(tasks) // Actualizamos el estado con las tareas
      } catch (error) {
        // En caso de error le informamos al usuario
        showNotificationError('Error al obtener las tareas', 3000)
      } finally {
        setLoading(false) // Actualizamos el estado en false
      }
    }
    fetchTasks()
  }, [])

  // Funcion que maneja el valor de la busqueda
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }

  // Funcion para filtrar tareas
  const handleChangeFilter = async (e) => {
    // Obtenemos el valor del filtro
    const filter = e.target.value

    try {
      // Obtenemos las tareas
      const tasks = await loadTasks()
      // Variable para almacenar las tareas filtradas
      let filteredTasks

      switch (filter) {
        case "todas": {
          // Filtramos todas las tareas
          filteredTasks = tasks
          break
        }

        case "completadas": {
          // Filtramos por tareas completadas
          filteredTasks = tasks.filter(task => task.completed === true)
          break
        }

        case "incompletas": {
          // Filtramos por tareas incompletas
          filteredTasks = tasks.filter(task => task.completed === false)
          break
        }

        // Error para filtros invalidos
        default: {
          filteredTasks = []

          showNotificationError('Filtro no valido', 3000)

          return
        }
      }

      // Mostramos las tareas filtradas
      setTasks(filteredTasks)
    } catch (error) {
      // Si hay un error se le informa al usuario
      showNotificationError(`Error al filtrar por ${filter}`, 3000)
    }
  }

  // Funcion para agregar tarea
  const handleAddTask = async (e) => {
    try {
      e.preventDefault() // Evitamos el comportamiento por defecto
      // // Llamamos a la funcion que la agrega
      const newTask = await createTask({ taskInfo, notTitle })
      setTasks(prevTasks => prevTasks.concat(newTask)) // Actualizamos el estado agregando la nueva tarea
      // Le avisamos al usuario que todo salio bien
      showNotification(`La tarea ${newTask.title} se ha agregado`, 2000)

      // Limpiamos los inputs
      resetForm()
    } catch (error) {
      // Si hay un error le informamos al usuario
      showNotificationError(`Error al agregar la tarea ${taskInfo.title}`, 3000)
    }

  }

  // Funcion para eliminar tarea
  const handleDeleteTask = async (e) => {
    const taskTitle = e.target.parentElement.previousElementSibling.firstChild.nextElementSibling.textContent // Obtenemos el titulo
    const taskId = e.target.parentElement.parentElement.parentElement.id // Obtenemos su id

    // Llamamos a la funcion  para eliminarla
    if (window.confirm(`Desea eliminar la tarea '${taskTitle}'`)) {
      try {
        const deletedTask = await removeTask(taskId)
        // Actualizamos el estado para que no aparezca la tarea eliminada
        setTasks(tasks.filter(task => task.id !== deletedTask.id))

        // Le avisamos al usuario que todo salio bien
        showNotification(`'${deletedTask.title}' se ha eliminado correctamente`, 2000)

      } catch (error) {
        // Si se intenta eliminar una tarea que existe se le informa al usuario
        showNotificationError(`'${taskTitle}' ya ha sido eliminado del servidor`, 3000)

        // Borramos la tarea que da error
        setTasks(tasks.filter(task => task.id !== taskId))
      }
    } else {
      return
    }
  }

  // Funcion para actualizar tarea
  const handleUpdateTask = async (e) => {
    e.preventDefault() // Evitamos el comportamiento por defecto
    const formModal = e.target.parentElement.parentElement // Obtenemos la ventana del formulario
    const taskId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id
    // Llamamos a la funcion que actualiza la tarea
    try {
      const updatedTask = await updateInfo(newTaskInfo, taskId)
      // Mostramos los cambios
      setTasks(tasks.map(task => {
        return task.id === updatedTask.id ? { ...task, title: updatedTask.title, description: updatedTask.description, priority: updatedTask.priority } : task
      }))

      formModal.classList.remove('show') // Hacemos que se oculte

      // Le decimos al usuario que se actualizo correctamente
      showNotification(`'${updatedTask.title}' se ha actualizado correctamente`, 2000)

      // Limpiamos los inputs
      resetEdit()
    } catch (error) {
      // SI se intenta actualizar una tarea eliminada se le informara al usuario
      showNotificationError(`'${newTaskInfo.title}' ya ha sido eliminada del servidor`, 3000)

      // Quitamos la tarea que se intenta actualizar
      setTasks(tasks.filter(task => task.id !== taskId))

      // Limpiamos los inputs
      resetEdit()
    }
  }

  // Funcion para cambiar el check
  const handleCheckTask = async (e) => {
    // Obtenemos el id
    const taskId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id

    try {
      const completed = e.target.checked

      const newCheck = await updateCheck(taskId, { completed: completed })

      setTasks(tasks.map(task => {
        return task.id === newCheck.id ? { ...task, completed: newCheck.completed } : task
      }))
    } catch (error) {
      showNotificationError(`Error al ${e.target.checked ? 'marcar como completado' : 'desmarcar'}`, 3000)
    }
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <Header searchValue={searchValue} onChangeSearch={handleChangeSearch} />

        <Notification message={message} />
        <NotificationError message={messageError} />

        < FormTask onSubmit={handleAddTask} taskInfo={taskInfo} onChange={handleInputChange} onChangeFilter={handleChangeFilter} />

        {/* Si loading es true se mostrara el loader y si es false se mostrara la lista de tareas */}
        {loading ? <Loader /> : <Tasks tasks={tasks} searchValue={searchValue} onClickCheck={handleCheckTask} onClickDelete={handleDeleteTask} onClickUpdate={handleUpdateTask} handleInputChange={setNewTaskInfo} newTaskInfo={newTaskInfo} />}
      </div>
    </div>
  )
}

export default App