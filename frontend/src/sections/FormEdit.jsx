const FormEdit = ({ onSubmit, title, handleInputChange, newTaskInfo }) => {
    const handleCloseModal = (e) => {
        e.target.parentElement.parentElement.classList.remove('show')
    }
    return (
        <section className="modal" id="modal">
            <div className="modal_container py-1">
                <div className="modal_close" onClick={handleCloseModal}>
                    X
                </div>

                <h1 className="text-center font-bold text-2xl dark:text-gray-300">Editar tarea ({title})</h1>

                <form className="flex flex-col gap-y-7 px-3 py-2" onSubmit={onSubmit}>
                    <input type="text" className="input w-[700px] small-smartphone:w-[330px] small-tablet:w-full" placeholder="nuevo titulo" value={newTaskInfo.title} onChange={handleInputChange} name="title" required autoComplete="off" />
                    <input type="text" className="input w-[700px] small-smartphone:w-[330px] small-tablet:w-full" placeholder="nueva descripcion" value={newTaskInfo.description} onChange={handleInputChange} name="description" required autoComplete="off" />
                    <select name="priority" id="" className='rounded-md focus:outline-none w-[700px] small-smartphone:w-[330px] px-2 py-1 small-tablet:w-full' value={newTaskInfo.priority} onChange={handleInputChange}>
                        <optgroup label="Elija la prioridad">
                            <option value="baja">baja</option>
                            <option value="media">media</option>
                            <option value="alta">alta</option>
                        </optgroup>
                    </select>
                    <button className="bg-transparent border border-gray-500 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-all duration-200 dark:border-gray-400 dark:hover:bg-gray-400">Guardar cambios</button>
                </form>
            </div>
        </section>
    )
}

export default FormEdit