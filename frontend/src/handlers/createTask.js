import { addTask } from '../services/tasks/api/addTask'

export const createTask = async ({ taskInfo, notTitle }) => {
    // Si no se le pasa un titulo se le suma 1 al estado de notTitle
    // if (!taskInfo.title) {
    //     console.log('hola')
    // }

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
        return addedTask
    } catch (error) {
        console.error(`Error al agregar tarea: ${error}`)
        throw error
    }
}