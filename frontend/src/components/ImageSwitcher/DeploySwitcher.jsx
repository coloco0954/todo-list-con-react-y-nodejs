const DeploySwitcher = ({ onClick }) => {
    return (
        <>
            <img src="./deploy-icon.svg" alt="" className='-ml-10 cursor-pointer block dark:hidden' title='Mostrar mas opciones' onClick={onClick} />
            <img src="./dark/deploy-icon.svg" alt="" className='-ml-10 cursor-pointer hidden dark:block' title='Mostrar mas opciones' onClick={onClick} />

        </>
    )
}

export default DeploySwitcher