import React from 'react';
import { Link } from 'react-router-dom';
class SignupForm extends React.Component{
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
      var Data = JSON.parse(a)
      this.setState({Name:Data.name});
      this.setState({Email:Data.email});
      this.setState({Mobile:Data.mobile});
      this.setState({Password:Data.password});


    }else{
      this.setState({m:`Data Not Present`});
    }
  }

  btnSignup(e){
    if(this.state.name === '' || this.state.email === '' || this.state.mobile === '' || this.state.password === '') 
    { alert('Please enter all the fields'); } else{
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
  }
  render(){
    return(<><center>
      <form onSubmit={this.btnSignup.bind(this)}>
        <label>Name:</label><input type='text' name='name'onChange={(e)=>this.setState({name:e.target.value})}/><br/>
        <label>Email:</label><input type='text' name='email' onChange={(e)=>this.setState({email:e.target.value})}/><br/>
        <label>Mobile No:</label><input type='text' name='mobile' onChange={(e)=>this.setState({mobile:e.target.value})}/><br/>
        <label>Password:</label><input type='password' name='password' onChange={(e)=>this.setState({password:e.target.value})}/><br/>
        <input type='submit' value="SignUp"/>
        <input type='submit' value="get" onClick={this.getData.bind(this)}/>
        <Link to="/login">Login</Link>
      </form>
      <h2>Last Sign Up Details</h2>
      {this.state.m}<br/>
      Name:{this.state.Name}<br/>
      Email id: {this.state.Email}<br/>
      Mobile No : {this.state.Mobile}<br/>
      Password: {this.state.Password}

      </center></>);
  }
}

export default SignupForm;
