import { useWeather } from "./WeatherContext"
const Alerts = () => {
    const { weatherData } = useWeather()
    const data = weatherData.alerts.alert
    if (data.length) {
        return (
            <div className="alerts">
                {data.map((alert, index) => {
                    return <div className="alert" key={index}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
                                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                        </div>
                        <div className="alert-details">
                            <div className="alert-name">{alert.event}</div>
                            <div className="alert-desc"
                                onClick={(e) => {
                                    console.log(e.target.innerHTML.length)
                                    e.target.innerHTML.length === 48 ? e.target.innerHTML = alert.desc : e.target.innerHTML = alert.desc.slice(0, 45)
                                }}>{alert.desc.slice(0, 45)}...</div>
                        </div>
                    </div>
                })}
            </div>
        )
    }
    else {
        return null
    }
}
export default Alerts