import React, { useState, useEffect } from 'react';
import citiesData from './cities.json';

const CityInput = ({ onCitySelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    if (inputValue) {
      const matchingCity = citiesData.find(city => 
        city.toLowerCase().startsWith(inputValue.toLowerCase()) && city.toLowerCase() !== inputValue.toLowerCase()
      );
      setSuggestion(matchingCity || '');
    } else {
      setSuggestion('');
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onCitySelect(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Tab' && suggestion) {
      event.preventDefault();
      setInputValue(suggestion);
      onCitySelect(suggestion);
      setSuggestion('');
    }
  };

  return (
    <div className="city-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter a city name"
        className="city-input__field"
      />
      {suggestion && (
        <div className="city-input__suggestion">
          {inputValue}
          <span className="city-input__suggestion-completion">{suggestion.slice(inputValue.length)}</span>
        </div>
      )}
    </div>
  );
};

export default CityInput;