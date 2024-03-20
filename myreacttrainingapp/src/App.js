import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './loginSignup/SignupForm.js';
import Homepage from './loginSignup/Homepage.js';
import ResetPassword from './loginSignup/resetpassword.js';
import Login from './loginSignup/login.js';
import ChangePassword from './loginSignup/changepassword.js';
import NewPassword from './loginSignup/newpassword.js';
import Logout from './loginSignup/logout.js';
import Home2 from './Home.js';
import CounterApp from './CounterApp/counterapp.js';
import MiniCalc from './MiniCalc/MiniCalc.js';
import ColourPickerApp from './colorpicker/colorpicker.js';
import TodoApp from './TODOApp/todo.js';
import TodoAppwithLS from './TODOApp/todowithls.js';
import UserManagement from './CrudOperation/usermanagement.js';
import Footer from './footer.js';
import FetchDemo from './APIDemo/FetchDemo.js';
import AxiosDemo from './APIDemo/axiosdemo.js';


class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home2 />} />
          {/* //Axios Demo */}
          <Route path='APIDemo/axiosdemo' element={<AxiosDemo />} />
        {/* //Demo of Fetch API */}
          <Route path='APIDemo/fetchDemo' element={<FetchDemo />} />
          {/* //UserManagementCrud */}
          <Route path='/CrudOperation' element={<UserManagement />} />
        {/* //TodoApp */}
        <Route path='/todoApp' element={<TodoApp />} />
        <Route path='/todoApp/todowithLS' element={<TodoAppwithLS />} />

          {/* //CounterApp */}
        <Route path='/counterApp' element={<CounterApp />} />
        {/* //MiniCalc */}
          <Route path='/minicalc' element={<MiniCalc />} />
          {/* //colorpicker */}
          <Route path='/colorpicker' element={<ColourPickerApp />} />
          {/* Login and Signup */}
          <Route path='/loginSignup' element={<Login />} />
          <Route path='/loginSignup/signup' element={<SignupForm />} />
          <Route path='/loginSignup/login' element={<Login />} />
          <Route path='/loginSignup/resetpassword' element={<ResetPassword />} />
          <Route path='/loginSignup/enternewpass' element={<NewPassword />} />
          <Route path='/loginSignup/homepage' element={<Homepage />}>
            <Route path='changepassword' element={<ChangePassword />} />
          </Route>
          <Route path='/loginSignup/logout' element={<Logout />} />
        </Routes>
       <center><Footer /></center>
      </Router>
    );
  }
}

export default App;
