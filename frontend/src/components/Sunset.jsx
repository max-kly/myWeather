import { useWeather } from "./WeatherContext"
const Sunset = () => {
    const { weatherData } = useWeather()
    const data = weatherData.forecast.forecastday[0].astro
    return (
        <div className="additionalDataItem">
            <div className="label">Sunset</div>
            <div className="additionalDataValue">{data.sunset}</div>
            <div className="additionalDataExplanation">Current sunset<br></br>for location</div>
        </div>
    )
}
export default Sunset