import SwitchToggle from '../components/SwitchToggle'
import Filter from './Filter'

const Header = ({ searchValue, onChangeSearch }) => {
    return (
        <header className="bg-blue-chill-300 justify-between flex flex-row px-5 py-4 animate-slide-in-top animate-duration-normal w-auto">
            <Filter searchValue={searchValue} onChange={onChangeSearch} />
            <div className='flex flex-row gap-x-2 '>
                <SwitchToggle />
            </div>
        </header>
    )
}

export default Header