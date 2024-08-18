import axios from 'axios'

const baseURL = 'https://api-tasks-cud1.onrender.com/api/tasks'

export const update = async (id, newInfo) => {
    try {
        const response = await axios.put(`${baseURL}/${id}`, newInfo)
        const { data } = response

        return data
    } catch (error) {
        console.error(`Error al actualizar tarea ${error}`)
        throw error
    }
}