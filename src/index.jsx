import React, { useState, useEffect } from 'react';
import citiesData from './cities.json';

const Input = ({ handleChange, hint }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const filteredCities = citiesData.filter(city => city.toLowerCase().startsWith(inputValue.toLowerCase()));
    setSuggestions(filteredCities);
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={handleInputChange}
        list="city-suggestions"
      />
      <datalist id="city-suggestions">
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion} />
        ))}
      </datalist>
    </div>
  );
};

export default Input;