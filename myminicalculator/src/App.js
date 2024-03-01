import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  calculator(){
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
      <><center>
      <h4> TASK - 4 Mini Calculator</h4>
      
      Enter No 1 : <input type="text" placeholder="Enter first number" id="num1" /><br/><br/>
      Select Opeartion: <select name="Operation" id="Operation">
                            <option value="">--Select any Operation--</option>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option></select><br/><br/>
      Enter No 2 : <input type="text" placeholder="Enter second number" id="num2" />
      <br />
      <br />  
      <button onClick={this.calculator.bind(this)}>Calc</button>
      <br />
      <br />
      Result: {this.state.result}
      </center></>
    );
  }
}

export default App;
