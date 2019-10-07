import React from 'react'

const WeatherExtraInfo = (props) => {
  const { humidity, wind } = props
  return (
  <div>
    <span>{`${humidity} % - `}</span>
    <span>{`${wind} viento`}</span>
  </div>
  )
}

export default WeatherExtraInfo
