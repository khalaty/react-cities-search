import React, { useState } from 'react';
import CityInput from './index.jsx';

function App() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="app">
      <h1>Type the city name:</h1>
      <CityInput onCitySelect={handleCitySelect} />
      {selectedCity && <p>You write: {selectedCity}</p>}
    </div>
  );
}

export default App;