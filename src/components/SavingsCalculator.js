import React from 'react';
import RecurrentExpenses from './RecurrentExpenses';

export class SavingsCalculator extends React.Component{
  render(){
    return(
        <form className="mt-5 row">
        <h3 className="text-center pt-5 col-12">Savings Calculator</h3>
        <div className="mx-5 text-center mt-5 formOverlay">
            <div className="col-12">
                <label for="StartingBalance">Starting Balance</label>
                <input type='text' id="StartingBalance"/>
            </div>
            <div className="col-12">
                <label for="MonthlyContributions">Monthly Contributions</label>
                <input type='text' id="MonthlyContributions"/>
            </div>
            
        </div>
        </form>
    )
  };
}

export default SavingsCalculator;
