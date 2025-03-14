import { useEffect, useState } from "react"
import CityList from "./CityList"
import { fetchCities } from "../../assets/axios"
const SearchCities = ({ setShowList, setShowLocationPreview, setPreviewWeatherData }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [cities, setCities] = useState([])
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setCities([])
            return
        }
        fetchCities(searchQuery)
            .then((cities) => {
                setCities(cities)
            })
    }, [searchQuery])
    return (
        <div className="window searchWindow">
            <input type="text" placeholder="Enter city name" autoFocus onInput={(e) => {
                setSearchQuery(e.target.value)
            }} />
            <CityList cities={cities} searchQuery={searchQuery} setShowList={setShowList} setShowLocationPreview={setShowLocationPreview} setPreviewWeatherData={setPreviewWeatherData} />
        </div>
    )
}
export default SearchCities