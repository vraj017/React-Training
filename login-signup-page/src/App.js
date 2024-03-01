import React, { Component } from 'react';
import SignupForm from './SignupForm.js';
import Homepage from './Homepage.js';
import ResetPassword from './resetpassword.js';
import Login from './login.js';
import ChangePassword from './changepassword.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
class App extends Component{

  render(){
    return(<>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/homepage/changepassword" element={<ChangePassword />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
      {/* <SignupForm />
      <Login /> 
       <Homepage /> 
      <ResetPassword />
      <ChangePassword /> */}
    </>);
  }
}

export default App;
