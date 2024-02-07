const CLASS_ACTIVE_NOTIFICATION = 'active'

const elementNotification = document.querySelector('#notification')

export const notifyAboutCopy = () => {
    elementNotification.classList.add(CLASS_ACTIVE_NOTIFICATION)

    setTimeout(() => {
        elementNotification.classList.remove(CLASS_ACTIVE_NOTIFICATION)
    },1000)
}
