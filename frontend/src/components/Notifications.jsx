export const Notification = ({ message }) => {
    if (message === null) {
        return null
    } else {
        return (
            <div className="flex items-center justify-center my-3">
                <div className="notification">
                    <h1>{message}</h1>
                </div>
            </div>
        )
    }
}

export const NotificationError = ({ message }) => {
    if (message === null) {
        return null
    } else {
        return (
            <div className="flex items-center justify-center my-3">
                <div className="notification-error">
                    <h1>{message}</h1>
                </div>
            </div>
        )
    }
}
