const FormEdit = ({ onSubmit, title, titleValue, descriptionValue, priorityValue, newTitle, newDescription, newPriority }) => {

    const handleCloseModal = (e) => {
        e.target.parentElement.parentElement.classList.remove('show')
    }
    return (
        <section className="modal" id="modal">
            <div className="modal_container py-1">
                <div className="modal_close" onClick={handleCloseModal}>
                    X
                </div>

                <h1 className="text-center font-bold text-2xl">Editar tarea ({title})</h1>

                <form className="flex flex-col gap-y-7 px-3 py-2" onSubmit={onSubmit}>
                    <input type="text" className="input w-[700px] small-smartphone:w-[330px] small-tablet:w-full" placeholder="nuevo titulo" value={titleValue} onChange={newTitle} required />
                    <input type="text" className="input w-[700px] small-smartphone:w-[330px] small-tablet:w-full" placeholder="nueva descripcion" value={descriptionValue} onChange={newDescription} required />
                    <select name="" id="" className='rounded-md focus:outline-none w-[700px] small-smartphone:w-[330px] px-2 py-1 small-tablet:w-full' value={priorityValue} onChange={newPriority}>
                        <optgroup label="Elija la prioridad">
                            <option value="baja">baja</option>
                            <option value="media">media</option>
                            <option value="alta">alta</option>
                        </optgroup>
                    </select>
                    <button className="bg-transparent border border-gray-500 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-all duration-200">Guardar cambios</button>
                </form>
            </div>
        </section>
    )
}

export default FormEdit