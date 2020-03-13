import React from 'react';

import ApiKeyInput from './components/ApiKey/ApiKeyInput';
import MealCalc from './components/MealCalc/MealCalc';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Meal Calc</h1>
        <ApiKeyInput />
        <MealCalc />
    </div>
  );
}

export default App;
