const getDaysForecast = (data) => {
    const currentDate = new Date()
    return data.map((forecast, index) => {
        if (index === 0) {
            return {
                day: 'Today',
                condition: forecast.day.condition.icon,
                low: forecast.day.mintemp_c.toFixed(),
                high: forecast.day.maxtemp_c.toFixed()
            }
        }
        else {
            const day = new Date(currentDate)
            day.setDate(currentDate.getDate() + index)
            const dayName = day.toLocaleDateString('en-UK', {weekday: 'short'})
            return {
                day: dayName,
                condition: forecast.day.condition.icon,
                low: forecast.day.mintemp_c.toFixed(),
                high: forecast.day.maxtemp_c.toFixed()
            }
        }
    })
}
export default getDaysForecast