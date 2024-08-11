const FilterSwitcher = ({ onClick }) => {
    return (
        <>
            <img src="./filter.svg" alt="" className='cursor-pointer block dark:hidden' title='filtros' onClick={onClick} />
            <img src="./dark/filter.svg" alt="" className='cursor-pointer hidden dark:block' onClick={onClick} />
        </>
    )
}

export default FilterSwitcher