export const animateSlide = (icon, element) => {
    icon.classList.remove('animate-roll-in', 'animate-duration-normal')
    icon.classList.add('animate-rotate-90', 'animate-duration-normal')

    element.classList.remove('hidden', 'animate-slide-out-top', 'animate-duration-fast')
    element.classList.add('animate-duration-normal', 'animate-slide-in-top')
}