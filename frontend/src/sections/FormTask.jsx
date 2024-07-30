import AddButton from '../components/AddButton'


const FormTask = ({ onSubmit, taskInfo, onChangeTitle, onChangeDescription, onChangePriority, }) => {

    const handleShowAllOptions = (e) => {
        const moreOptionsContainer = document.getElementById('more-options')


        if (moreOptionsContainer.classList.contains('hidden')) {
            e.target.classList.remove('animate-roll-in', 'animate-duration-normal');
            e.target.classList.add('animate-rotate-90', 'animate-duration-normal');

            moreOptionsContainer.classList.remove('hidden', 'animate-slide-out-top', 'animate-duration-fast');
            moreOptionsContainer.classList.add('animate-duration-normal', 'animate-slide-in-top');
        } else {
            e.target.classList.remove('animate-rotate-90', 'animate-duration-normal');
            e.target.classList.add('animate-roll-in', 'animate-duration-normal');

            moreOptionsContainer.classList.remove('animate-duration-normal', 'animate-slide-in-top');
            moreOptionsContainer.classList.add('animate-slide-out-top', 'animate-duration-faster');

            setTimeout(() => {
                moreOptionsContainer.classList.add('hidden');
            }, 40); // Ajusta el tiempo para que coincida con la duración de la animación
        }

    }

    return (
        <form action="" onSubmit={onSubmit} className="flex items-center justify-center flex-col mt-[90px] mb-[60px] animate-fade-in">
            <div className="flex flex-row gap-x-3">
                <img src="./deploy-icon.svg" alt="" className='-ml-10 cursor-pointer' title='Mostrar mas opciones' onClick={handleShowAllOptions} />
                <input name="" id="" placeholder="agrega descripcion de la tarea" value={taskInfo.description} onChange={onChangeDescription} required className='input' />
                <AddButton />
            </div>
            <div className="hidden" id="more-options">
                <div className='flex flex-col gap-y-2 my-2'>
                    <input type="text" placeholder="agrega un titulo" value={taskInfo.title} onChange={onChangeTitle} className='input -ml-10' />
                    <select name="" id="" onChange={onChangePriority} value={taskInfo.priority} className='-ml-10 rounded-md focus:outline-none py-1 px-1 cursor-pointer'>
                        <optgroup label="Elija la prioridad">
                            <option value="baja">baja</option>
                            <option value="media">media</option>
                            <option value="alta">alta</option>
                        </optgroup>
                    </select>
                </div>
            </div>
        </form>
    )
}

export default FormTask