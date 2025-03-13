import { useState } from "react"
import CentralData from "./data/CentralData"
import SearchCities from "./windows/SearchCities"
import SavedLocations from "./windows/SavedLocations"
import ListIcon from "./icons/ListIcon"
import SearchIcon from "./icons/SearchIcon"
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
                <ListIcon />
                <span className="button-desc">Saved locations</span>
            </button>
            <CentralData></CentralData>
            <button onClick={() => {
                setShowList(!showList)
            }}>
                <SearchIcon />
                <span className="button-desc">Search location</span>
            </button>
            {showList ? <SearchCities setShowList={setShowList} setShowLocationPreview={setShowLocationPreview} setPreviewWeatherData={setPreviewWeatherData}></SearchCities> : null}
            {showLocations ? <SavedLocations setShowLocations={setShowLocations} savedLocations={savedLocations} /> : null}
        </div >
    )
}
export default Header