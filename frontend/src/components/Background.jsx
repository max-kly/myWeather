import { useWeather } from "./WeatherContext"
const Background = () => {
    const {weatherData} = useWeather()
    let background = 'background'
    weatherData.current.is_day === 0 ? background += ' night' : background += ' day'
    if (weatherData.current.condition.text.includes('cloudy') || weatherData.current.condition.text.includes('rain') || weatherData.current.condition.text.includes('thunderstorm') || weatherData.current.condition.text.includes('overcast')) {
        background += ' cloudy'
    }
    return (
        <div className={background}></div>
    )
}
export default Background