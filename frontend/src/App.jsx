// Importacion de hooks y componentes
import { useState, useEffect } from "react"
import Header from './sections/Header'
import FormTask from "./sections/FormTask"
import Tasks from "./sections/Tasks"
import Loader from './components/Loader'
import { Notification, NotificationError } from './components/Notifications'

// Importacion de las funciones que llaman al backend
import { getAll, add as addTask, deleteTask, update as updateTask, updateCheck } from "./services/persons/server"

const App = () => {
  const [tasks, setTasks] = useState([]) // Estado que almacena las tareas
  const [loading, setLoading] = useState(false) // Estado que indica si esta cargando las tareas
  const [message, setMessage] = useState(null) // Estado que muestra mensaje de exito
  const [messageError, setMessageError] = useState(null) // Estado que muestra mensajes de error

  const [taskInfo, setTaskInfo] = useState({ // Estado que almacena la informacion de la tarea por agregar
    title: '',
    description: '',
    priority: 'baja',
    completed: false
  })

  const [newTaskInfo, setNewTaskInfo] = useState({ // Estado que almacena la nueva informacion de una tarea
    newTitle: '',
    newDescription: '',
    newPriority: 'baja'
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

        const tasks = await getAll()
        setTasks(tasks) // Actualizamos el estado con las tareas
      } catch (error) {
        setMessageError('Error al obtener las tareas')

        setTimeout(() => {
          setMessageError(null)
        }, 3000)
      } finally {
        setLoading(false) // Actualizamos el estado en false
      }
    }
    fetchTasks()
  }, [])

  // Funcion que maneja el titulo de la tarea
  const handleChangeTitle = (e) => {
    setTaskInfo({
      ...taskInfo,
      title: e.target.value
    })
  }

  // Funcion que maneja la descripcion de la tarea
  const handleChangeDescription = (e) => {
    setTaskInfo({
      ...taskInfo,
      description: e.target.value
    })
  }

  // Funcion que maneja la prioridad de la tarea
  const handleChangePriority = (e) => {
    setTaskInfo({
      ...taskInfo,
      priority: e.target.value
    })
  }

  // Funcion que maneja la actualizacion del titulo de la tarea
  const handleChangeNewTitle = (e) => {
    setNewTaskInfo({
      ...newTaskInfo,
      newTitle: e.target.value
    })
  }

  // Funcion que maneja la actualizacion de la descripcion de la tarea
  const handleChangeNewDescription = (e) => {
    setNewTaskInfo({
      ...newTaskInfo,
      newDescription: e.target.value
    })
  }

  // Funcion que maneja la actualizacion del titulo de la tarea
  const handleChangeNewPriority = (e) => {
    setNewTaskInfo({
      ...newTaskInfo,
      newPriority: e.target.value
    })
  }

  // Funcion que maneja el valor de la busqueda
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }

  // Funcion para agregar tarea
  const handleAddTask = async (e) => {
    e.preventDefault() // Evitamos el comportamiento por defecto

    // Si no se le pasa un titulo se le suma 1 al estado de notTitle
    if (!taskInfo.title) {
      setNotTitle(notTitle + 1)
    }

    // Creamos la estructura de la nueva tarea
    const newTask = {
      title: taskInfo.title ? taskInfo.title : `sin_titulo_${notTitle}`, // Si no se le pasa un titulo se le agregara uno por default 'sin_titulo'
      description: taskInfo.description,
      priority: taskInfo.priority,
      completed: false
    }

    // Llamamos a la funcion que la agrega
    try {
      const addedTask = await addTask(newTask)
      setTasks(prevTasks => prevTasks.concat(addedTask)) // Actualizamos el estado agregando la nueva tarea

      setMessage(`La tarea '${newTask.title}' se ah agregado`) // Le avisamos al usuario que todo salio bien

      // Borramos el mensaje
      setTimeout(() => {
        setMessage(null)
      }, 2000)

      // Limpiamos los inputs
      setTaskInfo({
        title: '',
        description: '',
        priority: 'baja'
      })

    } catch (error) {
      // Si hay un error le informamos al usuario
      setMessageError(`Error al agregar la tarea '${newTask.title}'`)

      // Borramos el mensaje
      setTimeout(() => {
        setMessageError(null)
      }, 3000)
    }


  }

  // Funcion para eliminar tarea
  const handleDeleteTask = async (e) => {
    const taskId = e.target.parentElement.parentElement.parentElement.id // Obtenemos su id
    const taskTitle = e.target.parentElement.previousElementSibling.firstChild.nextElementSibling.textContent // Obtenemos el titulo

    if (window.confirm(`Desea eliminar la tarea '${taskTitle}'`)) {
      // Llamamos a la funcion  para eliminarla
      try {
        const deletedTask = await deleteTask(taskId)
        // Actualizamos el estado para que no aparezca la tarea eliminada
        setTasks(tasks.filter(task => task.id !== deletedTask.id))

        // Le avisamos al usuario que todo salio bien
        setMessage(`${deletedTask.title} se ha eliminado correctamente`)

        // Borramos el mensaje
        setTimeout(() => {
          setMessage(null)
        }, 2000)
      } catch (error) {
        // Si se intenta eliminar una tarea que existe se le informa al usuario
        setMessageError(`'${taskTitle}' ya ha sido eliminado del servidor`)

        // Borramos la tarea que da error
        setTasks(tasks.filter(task => task.id !== taskId))

        // Borramos el mensaje
        setTimeout(() => {
          setMessageError(null)
        }, 3000)
      }
    } else {
      return
    }
  }

  // Funcion para actualizar tarea
  const handlUpdateTask = async (e) => {
    e.preventDefault() // Evitamos el comportamiento por defecto
    const taskId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id // Obtenemos el id
    const formModal = e.target.parentElement.parentElement // Obtenemos la ventana del formulario

    formModal.classList.remove('show') // Hacemos que se oculte

    // Creamos la estructura de la tarea actualizada
    const newInfo = {
      title: newTaskInfo.newTitle,
      description: newTaskInfo.newDescription,
      priority: newTaskInfo.newPriority
    }

    // Llamamos a la funcion que actualiza la tarea
    try {
      const updatedTask = await updateTask(taskId, newInfo)
      // Mostramos los cambios
      setTasks(tasks.map(task => {
        return task.id === updatedTask.id ? { ...task, title: updatedTask.title, description: updatedTask.description, priority: updatedTask.priority } : task
      }))

      // Le decimos al usuario que se actualizo correctamente
      setMessage(`'${updatedTask.title}' se ha actualizado correctamente`)

      // Borramos el mensaje
      setTimeout(() => {
        setMessage(null)
      }, 2000)

      // Limpiamos los inputs
      setNewTaskInfo({
        newTitle: '',
        newDescription: '',
        newPriority: 'baja'
      })
    } catch (error) {
      // SI se intenta actualizar una tarea eliminada se le informara al usuario
      setMessageError(`'${newInfo.title}' ya ha sido eliminada del servidor`)
      // Quitamos la tarea que se intenta actualizar
      setTasks(tasks.filter(task => task.id !== taskId))

      // Borramos el mensaje
      setTimeout(() => {
        setMessageError(null)
      }, 3000)

      // LImpiamos los inputs
      setNewTaskInfo({
        newTitle: '',
        newDescription: '',
        newPriority: 'baja'
      })
    }
  }

  // Funcion para cambiar el check
  const handleCheckTask = async (e) => {
    // Obtenemos el id
    const taskId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id

    // Si el checkbox esta checkeado llama a la funcion que actualiza el check y lo pondra en true
    if (e.target.checked) {
      try {
        const newCheck = await updateCheck(taskId, { completed: true })
        // Se muestran los cambios
        setTasks(tasks.map(task => {
          return task.id === newCheck.id ? { ...task, completed: newCheck.completed } : task
        }))
      } catch (error) {
        //Si hay un error le avisamos al usuario
        setMessageError(`Error al marcar como completado`)

        // Borramos el mensaje
        setTimeout(() => {
          setMessageError(null)
        }, 3000)
      }
    } else {
      try {
        const newCheck = await updateCheck(taskId, { completed: false })

        // Se muestran los cambios
        setTasks(tasks.map(task => {
          return task.id === newCheck.id ? { ...task, completed: newCheck.completed } : task
        }))
      } catch (error) {
        // Si hay un error al desmarcar le avisamos al usuario
        setMessageError(`Error al desmarcar`)

        // Borramos el mensaje
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      }
    }
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <Header searchValue={searchValue} onChangeSearch={handleChangeSearch} />

        <Notification message={message} />
        <NotificationError message={messageError} />

        < FormTask onSubmit={handleAddTask} taskInfo={taskInfo} onChangeTitle={handleChangeTitle} onChangeDescription={handleChangeDescription} onChangePriority={handleChangePriority} />

        {/* Si loading es true se mostrara el loader y si es false se mostrara la lista de tareas */}
        {loading ? <Loader /> : <Tasks tasks={tasks} searchValue={searchValue} onClickCheck={handleCheckTask} onClickDelete={handleDeleteTask} onClickUpdate={handlUpdateTask} onChangeTitle={handleChangeNewTitle} onChangeDescription={handleChangeNewDescription} onChangePriority={handleChangeNewPriority} title={newTaskInfo.newTitle} description={newTaskInfo.newDescription} priority={newTaskInfo.newPriority} />}
      </div>
    </div>
  )
}

export default App