import { createContext, useContext } from "react";
const WeatherContext = createContext()
export const WeatherProvider = ({ children, weatherData, setWeatherData }) => {
    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
            {children}
        </WeatherContext.Provider>
    )
}
export const useWeather = () => useContext(WeatherContext)
