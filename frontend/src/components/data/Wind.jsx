import { useWeather } from "../WeatherContext"
const Wind = () => {
    const { weatherData } = useWeather()
    const data = weatherData.current
    return (
        <div className="additionalDataItem">
            <div className="label">Wind</div>
            <div className="additionalDataValue">{data.wind_mph.toFixed()} mph</div>
            <div className="additionalDataExplanation">Gusts: {data.gust_mph} mph<br></br>Direction: {data.wind_dir} {data.wind_degree}</div>
        </div>
    )
}
export default Wind