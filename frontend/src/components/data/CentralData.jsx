import { useWeather } from "../WeatherContext"
const CentralData = () => {
    const { weatherData } = useWeather()
    const city = weatherData.location.name
    const temperature = weatherData.current.temp_c.toFixed(0)
    const condition = weatherData.current.condition.text
    return (
        <div className="centralData">
            <div className="currentCity">{city}</div>
            <div className="currentTemperature">{temperature}°</div>
            <div className="currentCondition">{condition}</div>
        </div>
    )
}
export default CentralData