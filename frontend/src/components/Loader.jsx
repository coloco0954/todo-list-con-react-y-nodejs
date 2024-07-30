import '../Loader.css'

const Loader = () => {
    return (
        <div>
            <p className='text-center -mt-[45px]'>Cargando...</p>
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