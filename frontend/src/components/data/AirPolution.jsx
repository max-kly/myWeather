import { useWeather } from "../WeatherContext"
const AirPolution = () => {
    const { weatherData } = useWeather()
    const data = weatherData.current
    const key = 'us-epa-index'
    return (
        <div className="additionalDataItem">
            <div className="label">Air quality</div>
            <div className="additionalDataValue">{data.air_quality[key]}</div>
            <div className="additionalDataExplanation">Current index<br></br>for location</div>
        </div>
    )
}
export default AirPolution