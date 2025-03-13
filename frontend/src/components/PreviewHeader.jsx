import CentralData from "./data/CentralData"
import { useWeather } from "./WeatherContext"
import CloseIcon from "./icons/closeIcon"
import SaveIcon from "./icons/SaveIcon"
import { hidePreview, saveLocation } from "../utils/weatherPreview"
import { useState } from "react"
const PreviewHeader = ({ setShowLocationPreview }) => {
    const { weatherData } = useWeather()
    const [isSaved, setIsSaved] = useState(localStorage.getItem(weatherData.location.name + ',' + weatherData.location.country) ? true : false)
    return (
        <div className="header">
            <button id="closePreview" className="closePreview" onClick={() => hidePreview(setShowLocationPreview)}>
                <CloseIcon />
            </button>
            <CentralData weatherData={weatherData}></CentralData>
            {isSaved ? (
                <button className="disabled" id="saveLoc" onClick={() => alert('This Location has been already saved to your list')}>
                    <SaveIcon />
                    <span className="button-desc">Saved</span>
                </button>
            ) : (
                <button id="saveLoc" onClick={() => saveLocation(weatherData, setIsSaved, setShowLocationPreview)}>
                    <SaveIcon />
                    <span className="button-desc">Save</span>
                </button>
            )}
        </div>
    )
}
export default PreviewHeader