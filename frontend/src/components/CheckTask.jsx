import '../Check.css'

const CheckTask = ({ onClick, isCompleted }) => {
    return (
        <div className='mt-2'>
            <label>
                {/* Si la tarea esta completada el checkbox permanecera marcado y si no, estara desmarcado */}
                <input type="checkbox" className="input" onChange={onClick} checked={isCompleted} />
                <span className="custom-checkbox dark:border-gray-300 dark:bg-gray-300"></span>
            </label>
        </div>
    )
}

export default CheckTask