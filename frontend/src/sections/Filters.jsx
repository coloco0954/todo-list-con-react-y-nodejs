const Filters = ({ handleChangeFilter }) => {
    const handleCloseFilters = (e) => {
        e.target.parentElement.parentElement.classList.add('hidde')
    }

    return (
        <section className="modal_filters hidde">
            <div className="bg-blue-chill-200 dark:bg-blue-chill-700 rounded-xl w-auto relative my-10 small-smartphone:w-[355px] small-tablet:w-[400px] medium-tablet:w-[500px] big-tablet:w-[600px] small-pc:w-[300px] flex flex-col">
                <div className="absolute right-[-20px] top-[-20px] p-4 py-2 bg-red-600 rounded-full text-white font-bold text-xl cursor-pointer" onClick={handleCloseFilters}>
                    X
                </div>
                <h1 className="text-2xl text-center font-bold text-gray-300">Filtros</h1>

                <div action="" className="flex flex-col gap-y-7 px-3 py-2 text-gray-300">
                    <label htmlFor="">
                        <input type="radio" name="filter" id="" value={'todas'} onChange={handleChangeFilter} /> Todas las tareas
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="filter" id="" value={'completadas'} onChange={handleChangeFilter} /> Tareas completadas
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="filter" id="" value={'incompletas'} onChange={handleChangeFilter} /> Tareas no completadas
                    </label>
                </div>
            </div>
        </section>
    )
}

export default Filters