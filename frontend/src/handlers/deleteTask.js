import { deleteTask } from '../services/tasks/api/deleteTask'

export const removeTask = async (id) => {
    try {
        const deletedTask = await deleteTask(id)
        return deletedTask
    } catch (error) {
        console.error('Error al agregar la tarea: ', error)
        throw error
    }
}