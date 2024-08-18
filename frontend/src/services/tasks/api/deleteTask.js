import axios from 'axios'

const baseURL = 'https://api-tasks-cud1.onrender.com/api/tasks'

export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/${id}`)
        const { data } = response

        return data
    } catch (error) {
        console.error(`Error al eliminar tarea ${error}`)
        throw error
    }
}