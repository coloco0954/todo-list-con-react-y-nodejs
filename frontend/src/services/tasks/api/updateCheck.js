import axios from 'axios'

const baseURL = 'https://api-tasks-cud1.onrender.com/api/tasks'

export const check = async (id, newState) => {
    try {
        const response = await axios.patch(`${baseURL}/${id}/completed`, newState)
        const { data } = response

        return data
    } catch (error) {
        console.error(`Error al actualizar check ${error}`)
        throw error
    }
}