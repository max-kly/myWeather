import { useWeather } from "../WeatherContext"
const UV = () => {
    const { weatherData } = useWeather()
    const data = weatherData.current
    return (
        <div className="additionalDataItem">
            <div className="label">UV index</div>
            <div className="additionalDataValue">{data.uv}</div>
            <div className="additionalDataExplanation">Current UV index<br></br>for location</div>
        </div>
    )
}
export default UV