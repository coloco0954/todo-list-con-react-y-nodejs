import { useState } from "react"

const useNotification = () => {
    const [message, setMessage] = useState(null)

    const showNotification = (message, duration) => {
        setMessage(message)

        setTimeout(() => {
            setMessage(null)
        }, duration)
    }

    return [message, showNotification]
}

export default useNotification