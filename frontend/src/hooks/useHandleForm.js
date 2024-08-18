import { useState } from "react"

const useForm = (initialValues) => {
    const [taskInfo, setTaskInfo] = useState(initialValues)

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setTaskInfo({
            ...taskInfo,
            [name]: value,
        })
    }


    const resetForm = () => {
        setTaskInfo({
            title: '',
            description: '',
            priority: 'baja'
        })
    }

    return [taskInfo, handleInputChange, resetForm]
}

export default useForm