export const hidePreview = (setShowLocationPreview) => {
    document.querySelector('.location-window').classList.add('hidden')
    setTimeout(() => {
        setShowLocationPreview(false)
    }, 1000);
}
export const saveLocation = (weatherData, setIsSaved, setShowLocationPreview) => {
    const locationName = weatherData.location.name + ',' + weatherData.location.country
    const locationData = weatherData.location.lat + ',' + weatherData.location.lon
    localStorage.setItem(locationName, locationData)
    setIsSaved(true)
    hidePreview(setShowLocationPreview)
}