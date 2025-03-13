import { useWeather } from "../WeatherContext"
const Sunrise = () => {
    const { weatherData } = useWeather()
    const data = weatherData.forecast.forecastday[0].astro
    return (
        <div className="additionalDataItem">
            <div className="label">Sunrise</div>
            <div className="additionalDataValue">{data.sunrise}</div>
            <div className="additionalDataExplanation">Current sunrise<br></br>for location</div>
        </div>
    )
}
export default Sunrise