import { useWeather } from "../WeatherContext"
const FeelsLike = () => {
    const {weatherData} = useWeather()
    const data = weatherData.current
    const explanation = data.temp_c > data.feelslike_c ? 'It feels colder than the actual temperature' : 'It feels warmer than the actual temperature'
    return (
        <div className="additionalDataItem">
            <div className="label">Feels like</div>
            <div className="additionalDataValue">{data.feelslike_c.toFixed()}°</div>
            <div className="additionalDataExplanation">{explanation}</div>
        </div>
    )
}
export default FeelsLike