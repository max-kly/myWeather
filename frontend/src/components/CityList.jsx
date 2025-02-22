import axiosRequest from "../assets/axios"
const CityList = ({ cities, searchQuery, setShowList, setShowLocationPreview, setPreviewWeatherData }) => {
    if (!cities.length && searchQuery !== '') {
        return (
            <div className="no-results">
                <p>Nothing found</p>
            </div>
        )
    }
    return (
        <>
            <div className="results">
                {cities.map((city) => {
                    return <div onClick={(e) => {
                        const lat = e.currentTarget.dataset.lat
                        const lng = e.currentTarget.dataset.lng
                        axiosRequest.get(`/api/weather?lat=${lat}&lng=${lng}`)
                            .then(({ data }) => {
                                setShowList((list) => {
                                    !list
                                })
                                setShowLocationPreview(true)
                                setPreviewWeatherData(data)
                            })
                    }} className="city" key={city.id} data-lat={city.lat} data-lng={city.lng}>{city.city}, {city.country}</div>
                })}
            </div>
        </>
    )
}
export default CityList