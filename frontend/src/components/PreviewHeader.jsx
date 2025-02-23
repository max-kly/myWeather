import CentralData from "./CentralData"
import { useWeather } from "./WeatherContext"
const PreviewHeader = ({ setShowLocationPreview }) => {
    const { weatherData } = useWeather()
    return (
        <div className="header">
            <button id="closePreview" className="closePreview" onClick={(e) => {
                e.currentTarget.parentElement.parentElement.classList.add('hidden')
                setTimeout(() => {
                    setShowLocationPreview(false)
                }, 1000);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
            </button>
            <CentralData weatherData={weatherData}></CentralData>
            <button id="saveLoc" className="" onClick={(e) => {
                e.currentTarget.querySelector('span').innerHTML = 'Saved'
                e.currentTarget.parentElement.parentElement.classList.add('hidden')
                setTimeout(() => {
                    setShowLocationPreview(false)
                }, 1000);
                const locationName = weatherData.location.name + ',' + weatherData.location.country
                const locationData = weatherData.location.lat + ',' + weatherData.location.lon
                localStorage.setItem(locationName, locationData)
            }}>
                <svg className='saveIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
                <span className="button-desc">Save</span>
            </button>
        </div>
    )
}
export default PreviewHeader