import React from 'react'
import WeatherIcons from 'react-weathericons'

const icons = {
  cloud: "cloud",
  cloudy: "cloudy",
  sunny: "day-sunny",
  rain: "rain",
  snow: "snow",
  windy: "windy",
}

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState]
  if(icon)
    return <WeatherIcons name={icon} size="2x" />
  else
    return <WeatherIcons name="day-sunny" size="2x" />
}

const WeatherTemperature = (props) => {
  const { temperature, weatherState } = props

  return (
  <div>
    {
      getWeatherIcon(weatherState)
    }
    <span>{`${temperature} Cº`}</span>
  </div>
  )
}

export default WeatherTemperature
