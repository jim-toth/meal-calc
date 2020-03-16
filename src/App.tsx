import React from 'react';

import ApiKeyForm from './components/ApiKeyForm/ApiKeyForm';
import MealCalc from './components/MealCalc/MealCalc';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Meal Calc</h1>
        <ApiKeyForm />
        <MealCalc />
    </div>
  );
}

export default App;
