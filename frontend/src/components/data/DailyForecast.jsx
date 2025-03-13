import getDaysForecast from "../../utils/getDaysForecast"
import { useWeather } from "../WeatherContext"
const DayForecast = () => {
    const { weatherData } = useWeather()
    const threeDayForecast = getDaysForecast(weatherData.forecast.forecastday)
    return (
        <div className="dayForecast">
            <div className="label">3-day forecast</div>
            {threeDayForecast.map((forecast) => {
                return <div className="dailyForecast" key={forecast.day}>
                    <div className="day">{forecast.day}</div>
                    <img src={forecast.condition} />
                    <span>Low:</span>
                    <div className="day-temp">{forecast.low}°</div>
                    <span>High:</span>
                    <div className="day-temp">{forecast.high}°</div>
                </div>
            })}
        </div>
    )
}
export default DayForecast