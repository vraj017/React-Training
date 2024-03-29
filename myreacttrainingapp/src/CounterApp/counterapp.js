import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Counter: 0 };
  }

  componentDidMount() {
    const counterValue = localStorage.getItem("Counter");
    if (counterValue !== null) {
      this.setState({ Counter: parseInt(counterValue) });
    }
  }

  btnReset() {
    localStorage.setItem("Counter", 0);
    this.setState({ Counter: 0 });
    toast.success("Counter reset successfully");
  }

  decrement() {
    if (this.state.Counter > 0) {
      this.setState({ Counter: this.state.Counter - 1 });
      localStorage.setItem("Counter", this.state.Counter - 1);
    } else {
      toast.error("Sorry, you have reached the minimum limit");
    }
  }

  increment() {
    if (this.state.Counter < 20) {
      this.setState({ Counter: this.state.Counter + 1 });
      localStorage.setItem("Counter", this.state.Counter + 1);
    } else {
      toast.error("Sorry, you have reached the maximum limit");
    }
  }

  render() {
    return (
      <div className="container">
        <ToastContainer /> {/* Toastify container */}
        <center>
          <h2>Task 1 - Counter App</h2>
          <p>Counter: {this.state.Counter}</p>
          <button className="btn btn-primary mr-2" onClick={() => this.increment()}>
            +
          </button>
          <button className="btn btn-primary mr-2" onClick={() => this.decrement()}>
            -
          </button>
          <button className="btn btn-danger" onClick={() => this.btnReset()}>
            Reset Counter
          </button>
        </center>
      </div>
    );
  }
}

export default CounterApp;
