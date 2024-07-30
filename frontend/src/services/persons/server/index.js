import axios from 'axios'

const baseURL = 'http://localhost:3001/api/tasks'

export const getAll = async () => {
    try {
        const response = await axios.get(baseURL)
        const { data } = response

        return data
    } catch (error) {
        console.error(`Error al obtener las tareas ${error}`)
        throw error
    }
}

export const add = async ({ title, description, priority, completed }) => {
    try {
        const response = await axios.post(baseURL, { title, description, priority, completed })
        const { data } = response

        return data
    } catch (error) {
        console.error(`Error al agregar tarea ${error}`)
        throw error
    }
}

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

export const updateCheck = async (id, newState) => {
    try {
        const response = await axios.patch(`${baseURL}/${id}/completed`, newState)
        const { data } = response

        return data
    } catch (error) {
        console.error(`Error al actualizar check ${error}`)
        throw error
    }
}