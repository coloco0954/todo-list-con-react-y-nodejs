import { update } from '../services/tasks/api/updateTask'

export const updateInfo = async (newTaskInfo, id) => {
    // Creamos la estructura de la tarea actualizada
    const newInfo = {
        title: newTaskInfo.title,
        description: newTaskInfo.description,
        priority: newTaskInfo.priority
    }

    try {
        const updatedTask = await update(id, newInfo)
        return updatedTask
    } catch (error) {
        console.error('Error al actualizar tarea: ', error)
        throw error
    }
}