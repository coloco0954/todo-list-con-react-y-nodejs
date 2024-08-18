import { check } from '../services/tasks/api/updateCheck'

export const updateCheck = async (id, completed) => {
    try {
        const newCheck = await check(id, completed)
        return newCheck
    } catch (error) {
        console.error('Error al actualizar el check: ', error)
        throw error
    }
}