import CheckTask from "../components/CheckTask"
import FormEdit from "./FormEdit"
import TrashSwitcher from "../components/ImageSwitcher/TrashSwitcher"
import EditSwitcher from "../components/ImageSwitcher/EditSwitcher"
import { animateSlide } from "../utils/slideAnimation"
import { animateHide } from "../utils/hideAnimation"

const Tasks = ({ tasks, searchValue, onClickCheck, onClickDelete, onClickUpdate, handleInputChange, newTaskInfo }) => {

    const handleShowDescription = (e) => {
        const descriptionModal = e.target.parentElement.parentElement.nextElementSibling
        const deployIcon = e.target

        if (descriptionModal.classList.contains("hidden")) {
            animateSlide(deployIcon, descriptionModal)
        } else {
            animateHide(deployIcon, descriptionModal, 25)
        }
    }

    const handleShowForm = (e) => {
        const formEdit = document.documentElement.classList.contains('dark') ? e.target.nextElementSibling : e.target.nextElementSibling.nextElementSibling

        formEdit.classList.add('show')

    }

    return (
        <div className="flex  small-smartphone:items-start small-smartphone:justify-normal w-full small small-pc:items-center small-pc:justify-center">
            {tasks.length === 0 ? 'No hay tareas agegadas' : <div className="w-full small-pc:w-[80%] small-pc:ml-[30px]">
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
                                <div className="flex flex-row bg-blue-chill-400 dark:bg-blue-chill-700 px-2 py-2  justify-between small-smartphone:w-full">
                                    <div className="flex flex-row gap-x-2 big-smartphone:gap-x-3">
                                        <CheckTask onClick={onClickCheck} isCompleted={task.completed} />
                                        <h1 className="text-2xl small-smartphone:text-[18px] font-medium dark:text-gray-300">{task.title}</h1>
                                        <p className="mt-1 ml-3 small-smartphone:text-[15px] small-smartphone:ml-1 big-smartphone:ml-3 dark:text-gray-300 dark:font-semibold">prioridad (<strong className={task.priority}>{task.priority}</strong>)</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <img src="./deploy-icon.svg" alt="" onClick={handleShowDescription} className="cursor-pointer w-[30px] block dark:hidden" title="Mostrar descripcion" />
                                        <img src="./dark/deploy-icon.svg" alt="" onClick={handleShowDescription} className="cursor-pointer w-[30px] hidden dark:block" title="Mostrar descripcion" />
                                        <TrashSwitcher onClick={onClickDelete} />
                                        <EditSwitcher onClick={handleShowForm} task={task} />
                                        <FormEdit title={task.title} onSubmit={onClickUpdate} handleInputChange={handleInputChange} newTaskInfo={newTaskInfo} />
                                    </div>
                                </div>
                                <div className="bg-blue-chill-300 dark:bg-blue-chill-600 h-auto px-2 py-3 hidden small-smartphone:w-full" id="description-container">
                                    <p className="dark:text-gray-300 dark:font-semibold">{task.description}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>}
        </div>
    )
}

export default Tasks