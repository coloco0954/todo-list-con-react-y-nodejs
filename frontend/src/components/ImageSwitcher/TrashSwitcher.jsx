const TrashSwitcher = ({ onClick }) => {
    return (
        <>
            <img src="./trash.svg" alt="" onClick={onClick} className="w-[30px] cursor-pointer block dark:hidden" title="eliminar tarea" />
            <img src="./dark/trash.svg" alt="" onClick={onClick} className="w-[30px] cursor-pointer hidden dark:block" title="eliminar tarea" />
        </>
    )
}

export default TrashSwitcher