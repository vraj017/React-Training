import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MiniCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calculator() {
    // Get the input values and selected operation
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('Operation').value;

    // Perform the calculation based on the selected operation
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = 'Invalid operation';
    }

    // Update the state with the result
    this.setState({ result });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <center>
                  <h4>Mini Calculator</h4>
                  <label htmlFor="num1">Enter No 1:</label>
                  <input type="text" className="form-control" placeholder="Enter first number" id="num1" />
                  <br />
                  <label htmlFor="Operation">Select Operation:</label>
                  <select className="form-control" name="Operation" id="Operation">
                    <option value="">--Select any Operation--</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                  </select>
                  <br />
                  <label htmlFor="num2">Enter No 2:</label>
                  <input type="text" className="form-control" placeholder="Enter second number" id="num2" />
                  <br />
                  <button className="btn btn-primary" onClick={this.calculator.bind(this)}>Calc</button>
                  <br />
                  <br />
                  <p>Result: {this.state.result}</p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiniCalc;
