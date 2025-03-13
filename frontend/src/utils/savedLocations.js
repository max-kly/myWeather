export const hideLocations = (setShowLocations) => {
    document.querySelector('.saved-locations').classList.add('hidden')
    setTimeout(() => {
        setShowLocations(false)
    }, 1000)
}
export const removeLocation = (e) => {
    localStorage.removeItem(e.currentTarget.parentElement.querySelector('.saved-loc').dataset.storage)
    e.currentTarget.parentElement.remove()
    if (!localStorage.length) {
        document.querySelector('.saved-locations').insertAdjacentHTML('beforeend', '<p>No locations found</p>')
    }
}