import { useWeather } from "./WeatherContext"
const Pressure = () => {
    const { weatherData } = useWeather()
    const data = weatherData.current
    return (
        <div className="additionalDataItem">
            <div className="label">Pressure</div>
            <div className="additionalDataValue">{data.pressure_mb}</div>
            <div className="additionalDataExplanation">Current pressure<br></br>in mbar</div>
        </div>
    )
}
export default Pressure