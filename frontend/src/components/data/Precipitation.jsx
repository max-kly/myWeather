import { useWeather } from "../WeatherContext"
const Precipitation = () => {
    const { weatherData } = useWeather()
    const data = weatherData.current
    return (
        <div className="additionalDataItem">
            <div className="label">Precipitation</div>
            <div className="additionalDataValue">{data.precip_mm}</div>
            <div className="additionalDataExplanation">Current precipitation<br></br>in mm</div>
        </div>
    )
}
export default Precipitation