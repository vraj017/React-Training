import React, { Component } from 'react';
import SignupForm from './SignupForm.js';
import Homepage from './Homepage.js';
import ResetPassword from './resetpassword.js';
import Login from './login.js';
import ChangePassword from './changepassword.js';
import NewPassword from './newpassword.js';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Logout from './logout.js';
class App extends Component{

  render(){
    return(<>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/enternewpass" element={<NewPassword/>} />
        <Route path="/homepage/changepassword" element={<ChangePassword />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/logout" element={<Logout />} />
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
