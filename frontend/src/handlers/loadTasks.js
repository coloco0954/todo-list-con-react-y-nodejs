import { getTasks } from '../services/tasks/api/getTasks'

export const loadTasks = async () => {
    try {
        const tasks = await getTasks()
        return tasks
    } catch (error) {
        console.error(`Error al obtener las tareas: ${error}`)
        throw error
    }
}