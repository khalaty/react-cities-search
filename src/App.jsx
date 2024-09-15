import React, { useState } from 'react';
import Input from './index.jsx';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <h1>Type the city name:</h1>
      <Input handleChange={handleInputChange} hint="Enter a city name" />
    </div>
  );
}

export default App;