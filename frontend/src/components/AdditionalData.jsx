import DailyForecast from "./DailyForecast"
import FeelsLike from "./FeelsLike"
import Wind from "./Wind"
import Humidity from "./Humidity"
import Sunrise from "./Sunrise"
import Sunset from "./Sunset"
import Visibility from "./Visibility"
import AirPolution from "./AirPolution"
import UV from "./UV"
import Pressure from "./Pressure"
import Precipitation from "./Precipitation"
import Alerts from "./Alerts"
const AdditionalData = ({ weatherData }) => {
    return (
        <div className="additionalData">
            <div className="col-sm">
                <Alerts />
                <DailyForecast />
            </div>
            <div className="col-lg">
                <FeelsLike />
                <Precipitation />
                <Wind />
                <Humidity />
                <Sunrise />
                <Sunset />
                <Visibility />
                <AirPolution />
                <UV />
                <Pressure />
            </div>
        </div>
    )
}
export default AdditionalData