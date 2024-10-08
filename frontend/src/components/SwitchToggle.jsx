import '../Switch.css'

const SwitchToggle = () => {
    return (
        <div className=''>
            <label className='cursor-pointer'>
                <input className="toggle-checkbox" type="checkbox" onClick={() => document.documentElement.classList.toggle('dark')} />
                <div className="toggle-slot">
                    <div className="sun-icon-wrapper">
                        <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                    </div>
                    <div className="toggle-button"></div>
                    <div className="moon-icon-wrapper">
                        <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                    </div>
                </div>
            </label>

        </div>
    )
}

export default SwitchToggle