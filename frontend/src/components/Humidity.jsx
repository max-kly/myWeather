import { useWeather } from "./WeatherContext"
const Humidity = () => {
    const { weatherData } = useWeather()
    const data = weatherData.current
    return (
        <div className="additionalDataItem">
            <div className="label">Humidity</div>
            <div className="additionalDataValue">{data.humidity.toFixed()}%</div>
            <div className="additionalDataExplanation">Due point is {data.dewpoint_c.toFixed()}°<br></br>right now</div>
        </div>
    )
}
export default Humidity