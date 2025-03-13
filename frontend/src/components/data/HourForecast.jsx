import { useWeather } from "../WeatherContext"
import getHourForecast from "../../utils/getHourForecast"
const HourForecast = () => {
    const { weatherData } = useWeather()
    const hourWeather = getHourForecast(weatherData.forecast.forecastday.slice(0, 2))
    return (
        <div className="hourForecast">
            <div className="data">
                {hourWeather.map((forecast) => {
                    return <div className="dataItem" key={forecast.time_epoch}>
                        <div className="data-time">{forecast.time}</div>
                        <div className="data-icon"><img src={forecast.icon}></img></div>
                        <div className="data-temp">{forecast.temperature}°</div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default HourForecast