import React from 'react';
import './App.css';

import { Jumbotron } from './components/Jumbotron';
import { TotalMoney } from './components/TotalMoney';
import { Income } from './components/Income';
import { Savings } from './components/Savings';
import { RecurrentExpenses } from './components/RecurrentExpenses';
import { OtherExpenses } from './components/OtherExpenses';
import { SavingsCalculator } from './components/SavingsCalculator';

class App extends React.Component{
  render(){
    return(
      <div>
        <Jumbotron />
        <TotalMoney />
        <Income />
        <Savings />
        <RecurrentExpenses />
        <OtherExpenses />
        <SavingsCalculator />
      </div>
    )
  };
}

export default App;
