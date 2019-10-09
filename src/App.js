import React from 'react';
import WeatherLocation from './components/WeatherLocation';
import './Style/App.css'
function App() {
  return (
    <div className="App">
      <WeatherLocation city="shangai" />
    </div>
  );
}

export default App;
