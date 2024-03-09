import React from "react";
import { Link } from "react-router-dom";

class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 
  render() {
    return (
      <>
        
          <ol type="1">
         <h2>Task List of React </h2>
         <li><Link to ='/loginSignup/'>Login&Signup Page with Local Storage </Link></li>  
         <li><Link to ='/counterApp'>Counter App with Local Storage </Link></li>
         <li><Link to = '/minicalc'>Mini Calculator</Link></li>
         <li><Link to = '/colorpicker'>Colour Picker with Local Storage</Link></li>
         <li><Link to = '/todoApp'>TODO App</Link></li>
         <li><Link to = '/todoApp/todowithLS'>TODO App with Local Storage</Link></li>
         <li><Link to = '/CrudOperation'>User Management with Local Storage </Link></li>
         </ol>
     
      </>
    );
  }
}
export default Home2;