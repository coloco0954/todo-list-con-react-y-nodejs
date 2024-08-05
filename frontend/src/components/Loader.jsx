import '../Loader.css'

const Loader = () => {
    return (
        <div>
            <p className='text-center -mt-[45px] small-smartphone:mt-20 big-smartphone:mt-24'>Cargando...</p>
            <div className="spinner center">
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
            </div>
        </div>
    )
}

export default Loader