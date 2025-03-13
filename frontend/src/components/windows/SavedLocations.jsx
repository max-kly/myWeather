import { useWeather } from "../WeatherContext"
import { hideLocations, removeLocation } from "../../utils/savedLocations"
import CloseIcon from "../icons/closeIcon"
import { fetchWeather } from "../../assets/axios"
const SavedLocations = ({ savedLocations, setShowLocations }) => {
    const { setWeatherData } = useWeather()
    if (!Object.keys(savedLocations).length) {
        return (
            <div className="saved-locations">
                <button className="closePreview" onClick={() => hideLocations(setShowLocations)}>
                    <CloseIcon />
                </button>
                <p>No saved locations</p>
            </div>
        )
    }
    return (
        <div className="saved-locations">
            <button className="closePreview" onClick={() => hideLocations(setShowLocations)}>
                <CloseIcon />
            </button>
            {Object.keys(savedLocations).map((location) => {
                const split = location.split(',')
                const coords = savedLocations[location].split(',')
                return <div className='loc-container' key={savedLocations[location]}>
                    <div className="saved-loc" data-storage={location} data-lat={coords[0]} data-lng={coords[1]} onClick={(e) => {
                        const lat = e.currentTarget.dataset.lat
                        const lng = e.currentTarget.dataset.lng
                        fetchWeather(lat, lng)
                            .then((data) => {
                                setWeatherData(data)
                                hideLocations(setShowLocations)
                            })
                    }}>{split[0]}, <span className="country">{split[1]}</span>
                    </div>
                    <button className="remove" onClick={(e) => removeLocation(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                        </svg>
                    </button>
                </div>
            })}
        </div>
    )
}
export default SavedLocations