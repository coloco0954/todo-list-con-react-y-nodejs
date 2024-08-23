import AddButton from '../components/AddButton'
import Filters from './Filters'
import FilterSwitcher from '../components/ImageSwitcher/FilterSwitcher'
import DeploySwitcher from '../components/ImageSwitcher/DeploySwitcher'
import { animateSlide } from '../utils/slideAnimation'
import { animateHide } from '../utils/hideAnimation'

const FormTask = ({ onSubmit, taskInfo, onChange, onChangeFilter }) => {

    const handleShowAllOptions = (e) => {
        const moreOptionsContainer = document.getElementById('more-options')
        const deployIcon = e.target

        if (moreOptionsContainer.classList.contains('hidden')) {
            animateSlide(deployIcon, moreOptionsContainer)
        } else {
            animateHide(deployIcon, moreOptionsContainer, 40)
        }


    }

    const handleShowFilters = (e) => {
        e.target.parentElement.nextElementSibling.nextElementSibling.classList.remove('hidde')
    }

    return (
        <form action="" onSubmit={onSubmit} className="flex items-center justify-center flex-col mt-[90px] mb-[60px] animate-fade-in ">
            <div className="flex flex-row gap-x-2 small-smartphone:w-auto small-smartphone:gap-x-0 medium-smartphone:w-auto big-smartphone:gap-x-[2px]">
                <DeploySwitcher onClick={handleShowAllOptions} />
                <input name="description" id="" placeholder="agrega descripcion de la tarea" value={taskInfo.description} onChange={onChange} required className='input small-smartphone:w-[230px] medium-smartphone:w-[250px] big-smartphone:w-[265px] small-tablet:w-[550px] medium-tablet:w-[650px] big-tablet:w-[830px] small-pc:w-[850px]' autoComplete='off' />
                <FilterSwitcher onClick={handleShowFilters} />
                <AddButton />
            </div>
            <div className="hidden small-smartphone:w-full small-smartphone:ml-[83px] medium-smartphone:w-auto medium-smartphone:ml-0" id="more-options">
                <div className='flex flex-col gap-y-2 my-2'>
                    <input type="text" name="title" autoComplete='off' placeholder="agrega un titulo" value={taskInfo.title} onChange={onChange} className='input -ml-10 small-smartphone:-ml-[10px] small-smartphone:w-[230px] medium-smartphone:w-auto medium-smartphone:-ml-[80px] big-smartphone:w-[265px] small-tablet:w-[550px] medium-tablet:w-[650px] big-tablet:w-[830px] small-pc:w-[850px]' />
                    <select name="priority" id="" onChange={onChange} value={taskInfo.priority} className='-ml-14 rounded-md focus:outline-none py-1 px-2 cursor-pointer small-smartphone:-ml-[10px] small-smartphone:w-[230px] medium-smartphone:w-[250px] medium-smartphone:-ml-[80px] big-smartphone:w-[265px] small-tablet:w-[550px] medium-tablet:w-[650px] big-tablet:w-[830px] small-pc:w-[850px]'>
                        <optgroup label="Elija la prioridad">
                            <option value="baja">baja</option>
                            <option value="media">media</option>
                            <option value="alta">alta</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <Filters handleChangeFilter={onChangeFilter} />
        </form>
    )
}

export default FormTask