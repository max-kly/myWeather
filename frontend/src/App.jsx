import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Background from './components/Background'
import { WeatherProvider } from './components/WeatherContext'
import Header from './components/Header'
import HourForecast from './components/HourForecast'
import AdditionalData from './components/AdditionalData'
import LocationPreview from './components/LocationPreview'
import PreviewHeader from './components/PreviewHeader'
import Footer from './components/Footer'
import axiosRequest from './assets/axios'


function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [showLocationPreview, setShowLocationPreview] = useState(false)
  const [previewWeatherData, setPreviewWeatherData] = useState(null)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        setCurrentLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })
      }
    )
  }, [])
  useEffect(() => {
    if (currentLocation?.lat && currentLocation?.lng) {
      setIsLoading(true)
      axiosRequest.get(`/api/weather?lat=${currentLocation.lat}&lng=${currentLocation.lng}`)
        .then(({ data }) => {
          setWeatherData(data)
          setIsLoading(false)
        })
    }
  }, [currentLocation])
  if (isLoading) {
    return (<Preloader />)
  }
  else {
    return (
      <WeatherProvider weatherData={weatherData} setWeatherData={setWeatherData}>
        <Background />
        <Header setShowLocationPreview={setShowLocationPreview} setPreviewWeatherData={setPreviewWeatherData} />
        <HourForecast />
        <AdditionalData />
        {showLocationPreview ?
          <WeatherProvider weatherData={previewWeatherData}>
            <LocationPreview>
              <PreviewHeader setShowLocationPreview={setShowLocationPreview}></PreviewHeader>
              <HourForecast></HourForecast>
              <AdditionalData></AdditionalData>
            </LocationPreview>
          </WeatherProvider>
          : null}
        <Footer />
      </WeatherProvider>
    )
  }

}

export default App
