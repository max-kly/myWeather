const getHourForecast = (data) => {
    const todayData = data[0].hour
    const tomorrowData = data[1].hour
    const currentTime = new Date()
    const currentHours = Number(currentTime.getHours())
    const returnData = []
    todayData.forEach((forecast) => {
        const forecastHour = Number(forecast.time.charAt(11) + forecast.time.charAt(12))
        const icon = `https://${forecast.condition.icon.substring(2, forecast.condition.icon.length)}`
        if (forecastHour >= currentHours) {
            if (forecastHour === currentHours) {
                returnData.push({
                    time_epoch: forecast.time_epoch,
                    time: 'Now',
                    icon: icon,
                    temperature: forecast.temp_c.toFixed(0)
                })
            }
            else {
                returnData.push({
                    time_epoch: forecast.time_epoch,
                    time: forecastHour,
                    icon: icon,
                    temperature: forecast.temp_c.toFixed(0)
                })
            }
        }
    })
    tomorrowData.forEach((forecast) => {
        if (returnData.length < 24) {
            const forecastHour = Number(forecast.time.charAt(11) + forecast.time.charAt(12))
            const icon = `https://${forecast.condition.icon.substring(2, forecast.condition.icon.length)}`
            returnData.push({
                time_epoch: forecast.time_epoch,
                time: forecastHour,
                icon: icon,
                temperature: forecast.temp_c.toFixed(0)
            })
        }

    })
    return returnData
}
export default getHourForecast