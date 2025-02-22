import { useWeather } from "./WeatherContext"
const Visibility = () => {
    const {weatherData} = useWeather()
    const data = weatherData.current
    return (
        <div className="additionalDataItem">
            <div className="label">Visibility</div>
            <div className="additionalDataValue">{data.vis_miles}</div>
            <div className="additionalDataExplanation">Current visibility<br></br>in miles</div>
        </div>
    )
}
export default Visibility