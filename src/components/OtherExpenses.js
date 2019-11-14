import React from 'react';

export class OtherExpenses extends React.Component{
  render(){
    return(
    <div className="card mx-5 mt-5">
        <div className="card-header d-flex justify-content-between">
            <h3>Income</h3>
            <button className="addBtn">+</button>
        </div>
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <div class="d-flex">
                    <button type="button" className="deleteBtn mr-2">x</button>
                    <h5 className="card-text mt-1">Salary 1</h5>
                </div>
                <h5>$moneyavaliable</h5>
            </div>
        </div>
    </div>
    )
  };
}

export default OtherExpenses;
