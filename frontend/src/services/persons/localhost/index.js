import axios from 'axios'

const baseURL = 'http://localhost:3000/tasks'

export const getAll = () => {
    return axios.get(baseURL)
        .then(response => {
            const { data } = response
            return data
        })
        .catch(error => {
            console.error(`Error al obtener las tareas ${error}`)
            throw error
        })
}

export const add = ({ title, description, priority, completed }) => {
    return axios.post(baseURL, { title, description, priority, completed })
        .then(response => {
            const { data } = response
            return data
        })
        .catch(error => {
            console.error(`Error al agregar tarea ${error}`)
            throw error
        })
}

export const deleteTask = (id) => {
    return axios.delete(`${baseURL}/${id}`)
        .then(response => {
            const { data } = response
            return data
        })
        .catch(error => {
            console.error(`Error al eliminar tarea ${error}`)
            throw error
        })
}

export const update = (id, newInfo) => {
    return axios.put(`${baseURL}/${id}`, newInfo)
        .then(response => {
            const { data } = response
            return data
        })
        .catch(error => {
            console.error(`Error al actualizar tarea ${error}`)
            throw error
        })
}

export const updateCheck = (id, newState) => {
    return axios.patch(`${baseURL}/${id}`, newState)
        .then(response => {
            const { data } = response
            return data
        })
        .catch(error => {
            console.error(`Error al actualizar el check ${error}`)
            throw error
        })
}