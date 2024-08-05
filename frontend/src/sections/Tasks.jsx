import CheckTask from "../components/CheckTask"
import FormEdit from "./FormEdit"
const Tasks = ({ tasks, searchValue, onClickCheck, onClickDelete, onClickUpdate, onChangeTitle, onChangeDescription, onChangePriority, title, description, priority }) => {

    const handleShowDescription = (e) => {
        const descriptionModal = e.target.parentElement.parentElement.nextElementSibling

        if (descriptionModal.classList.contains("hidden")) {
            e.target.classList.remove('animate-roll-in', 'animate-duration-normal')
            e.target.classList.add('animate-rotate-90', 'animate-duration-normal')

            descriptionModal.classList.remove('hidden', 'animate-slide-out-top', 'animate-duration-fast')
            descriptionModal.classList.add('animate-duration-normal', 'animate-slide-in-top')
        } else {
            e.target.classList.remove('animate-rotate-90', 'animate-duration-normal')
            e.target.classList.add('animate-roll-in', 'animate-duration-normal')

            descriptionModal.classList.remove('animate-duration-normal', 'animate-slide-in-top')
            descriptionModal.classList.add('animate-slide-out-top', 'animate-duration-faster')

            setTimeout(() => {
                descriptionModal.classList.add('hidden')
            }, 25)
        }
    }

    const handleShowForm = (e) => {
        const formEdit = e.target.nextElementSibling

        formEdit.classList.add('show')
    }

    return (
        <div className="flex  small-smartphone:items-start small-smartphone:justify-normal w-full small small-pc:items-center small-pc:justify-center">
            {tasks.length === 0 ? 'No hay tareas agegadas' : <div className="w-full small-pc:w-[80%] small-pc:ml-[90px]">
                {tasks
                    .filter(task => {
                        // Si la descripcion en minuscula coincide con el valor buscado entonces devuelve la tarea
                        if (task.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                            return task
                        }

                    })
                    .map(task => {
                        return (
                            // Si la tarea esta completada se pondra una linea en todo el texto
                            <div key={task.id} id={task.id} className={task.completed ? 'mb-4 line-through small-smartphone:w-auto small-smartphone:mx-3' : 'mb-4 small-smartphone:w-auto small-smartphone:mx-3'}>
                                <div className="flex flex-row bg-blue-chill-400 px-2 py-2  justify-between small-smartphone:w-full">
                                    <div className="flex flex-row gap-x-2 big-smartphone:gap-x-3">
                                        <CheckTask onClick={onClickCheck} isCompleted={task.completed} />
                                        <h1 className="text-2xl small-smartphone:text-[18px] font-medium">{task.title}</h1>
                                        <p className="mt-1 ml-3 small-smartphone:text-[15px] small-smartphone:ml-1 big-smartphone:ml-3">prioridad (<strong className={task.priority}>{task.priority}</strong>)</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <img src="./deploy-icon.svg" alt="" onClick={handleShowDescription} className="cursor-pointer w-[30px]" title="Mostrar descripcion" />
                                        <img src="./trash.svg" alt="" onClick={onClickDelete} className="w-[30px] cursor-pointer" title="eliminar tarea" />
                                        <img src="./edit.svg" onClick={handleShowForm} className={task.completed ? 'hidden' : 'w-[30px] cursor-pointer'} title="editar tarea" />
                                        <FormEdit title={task.title} titleValue={title} descriptionValue={description} priorityValue={priority} onSubmit={onClickUpdate} newTitle={onChangeTitle} newDescription={onChangeDescription} newPriority={onChangePriority} />
                                    </div>
                                </div>
                                <div className="bg-blue-chill-300 h-auto px-2 py-3 hidden small-smartphone:w-full" id="description-container">
                                    <p>{task.description}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>}
        </div>
    )
}

export default Tasks