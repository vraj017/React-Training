import React, { Component } from 'react';
// import SignupForm from './SignupForm.js';
class App extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
    this.getData();
  }
  getData(){
    if(localStorage.getItem(`userdata`)){
      var a = localStorage.getItem(`userdata`);
      var myobj1 = JSON.parse(a)
      this.setState({name:myobj1.name});
    }else{
      this.setState({m:`Data Not Present`});
    }
  }

  btnSignup(e){
    e.preventDefault();
    var myobj = {
      name:this.state.name,
      email:this.state.email,
      mobile:this.state.mobile,
      password:this.state.password
    }
    localStorage.setItem(`userdata`,JSON.stringify(myobj));
    this.setState({m:`Data Saved `})
  }
  render(){
    return(<><center>
      <form onSubmit={this.btnSignup.bind(this)}>
        <label>Name:</label><input type='text' name='name'onChange={(e)=>this.setState({name:e.target.value})}/><br/>
        <label>Email:</label><input type='text' name='email' onChange={(e)=>this.setState({email:e.target.value})}/><br/>
        <label>Mobile No:</label><input type='text' name='mobile' onChange={(e)=>this.setState({mobile:e.target.value})}/><br/>
        <label>Password:</label><input type='password' name='password' onChange={(e)=>this.setState({password:e.target.value})}/><br/>
        <input type='submit' value={`signup`}/>
        <input type='submit' value="get" onClick={this.getData.bind(this)}/>
      </form>
      {this.state.m}
      </center></>);
  }
}

export default App;
