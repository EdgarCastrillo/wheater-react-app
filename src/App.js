import React from 'react';
import LocationList from './components/LocationList';
import './Style/App.css'


const cities = [
  'Barcelona',
  'Paris',
  'Lisboa',
  'Rio de Janeiro',
  'Bogota',
  'Tokio',
  'Londres',
]

function App() {
  return (
    <div className="App">
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
