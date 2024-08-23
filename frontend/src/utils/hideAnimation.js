export const animateHide = (icon, element, duration) => {
    icon.classList.remove('animate-rotate-90', 'animate-duration-normal')
    icon.classList.add('animate-roll-in', 'animate-duration-normal')

    element.classList.remove('animate-duration-normal', 'animate-slide-in-top')
    element.classList.add('animate-slide-out-top', 'animate-duration-faster')

    setTimeout(() => {
        element.classList.add('hidden')
    }, duration)
}