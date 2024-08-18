import axios from 'axios'

const baseURL = 'https://api-tasks-cud1.onrender.com/api/tasks'

export const addTask = async ({ title, description, priority, completed }) => {
    try {
        const response = await axios.post(baseURL, { title, description, priority, completed })
        const { data } = response

        return data
    } catch (error) {
        console.error(`Error al agregar tarea ${error}`)
        throw error
    }
}