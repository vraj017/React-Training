import React from "react";
class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {Counter : 0 };
  } 

  componentDidMount(){
    const counterValue = localStorage.getItem('Counter');
    if(counterValue !== null){
        this.setState({Counter:parseInt(counterValue)});
    }
  }
  btnReset(){
      this.setState({Counter:0});
      this.setState({e:`Your Counter has been Reset!`});
  }
  decrement(){
    if(this.state.Counter > 0){
      this.setState({Counter: this.state.Counter-1});
    }else{
      this.setState({e:`Sorry you have reached Minimum limit`});
    }
  }

  incerement(){
    if (this.state.Counter < 11) {
      this.setState({ Counter: this.state.Counter + 1 });
    }else{
      this.setState({e: "Sorry you have reached Maximum limit"});
    }
  }
  btnSave(){
    localStorage.setItem('Counter',this.state.Counter);
    this.setState({e:`Your Data has been Saved`});
  }
  
      render() {
        return (<>
        <center>
          Counter : {this.state.Counter} <br/>
          <button onClick={this.incerement.bind(this)}name="inc">++</button>
          <button onClick={this.decrement.bind(this)} name ="dec">--</button>
          <button onClick={this.btnReset.bind(this)}>Reset Counter </button>
          <button onClick={this.btnSave.bind(this)}>Save Data </button><br/>
          {this.state.e}
        
          </center>
        </>);
  }
}


export default App;