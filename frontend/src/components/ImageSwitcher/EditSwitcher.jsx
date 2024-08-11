const EditSwitcher = ({ task, onClick }) => {
    return (
        <>
            <img src="./edit.svg" onClick={onClick} className={task.completed ? 'hidden' : 'w-[30px] cursor-pointer block dark:hidden'} title="editar tarea" />
            <img src="./dark/edit.svg" onClick={onClick} className={task.completed ? 'hidden' : 'w-[30px] cursor-pointer hidden dark:block'} title="editar tarea" />
        </>
    )
}

export default EditSwitcher