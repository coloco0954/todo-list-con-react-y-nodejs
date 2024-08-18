import axios from 'axios'

const baseURL = 'https://api-tasks-cud1.onrender.com/api/tasks'

export const getTasks = async () => {
    try {
        const response = await axios.get(baseURL)
        const { data } = response

        return data
    } catch (error) {
        console.error(`Error al obtener las tareas ${error}`)
        throw error
    }
}