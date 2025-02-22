import { useState } from "react"
import CentralData from "./CentralData"
import SearchCities from "./SearchCities"
import SavedLocations from "./SavedLocations"
const Header = ({ setShowLocationPreview, setPreviewWeatherData }) => {
    const [showList, setShowList] = useState(false)
    const [savedLocations, setSavedLocations] = useState({})
    const [showLocations, setShowLocations] = useState(false)
    return (
        <div className="header">
            <button onClick={() => {
                setShowLocations(true)
                const storage = { ...localStorage }
                setSavedLocations(storage)
            }}>
                <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </span>
                <span className="button-desc">Saved locations</span>
            </button>
            <CentralData></CentralData>
            <button onClick={() => {
                setShowList(!showList)
            }}>
                <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </span>
                <span className="button-desc">Search location</span>
            </button>
            {showList ? <SearchCities setShowList={setShowList} setShowLocationPreview={setShowLocationPreview} setPreviewWeatherData={setPreviewWeatherData}></SearchCities> : null}
            {showLocations ? <SavedLocations setShowLocations={setShowLocations} savedLocations={savedLocations} /> : null}
        </div>
    )
}
export default Header