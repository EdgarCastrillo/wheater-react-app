import React from 'react'
import PropTypes from 'prop-types'
import WeatherLocaiton from './WeatherLocation'

const LocationList = ({ cities }) => {
  console.log(cities)
  return (
    <div>
      <WeatherLocaiton city="Barcelona"/>
      <WeatherLocaiton city="Madrid"/>
      <WeatherLocaiton city="Valencia"/>
      <WeatherLocaiton city="Paris"/>
    </div>
  )
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired
}

export default LocationList;