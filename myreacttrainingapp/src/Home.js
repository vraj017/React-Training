// import React from "react";
// import { Link } from "react-router-dom";

// class Home2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

 
//   render() {
//     return (
//       <>
//         <center>
//           <ul >
//          <h2>Task List of React </h2>
//          <li><Link to ='/loginSignup/'>Login&Signup Page with Local Storage </Link></li>  
//          <li><Link to ='/counterApp'>Counter App with Local Storage </Link></li>
//          <li><Link to = '/minicalc'>Mini Calculator</Link></li>
//          <li><Link to = '/colorpicker'>Colour Picker with Local Storage</Link></li>
//          <li><Link to = '/todoApp'>TODO App</Link></li>
//          <li><Link to = '/todoApp/todowithLS'>TODO App with Local Storage</Link></li>
//          <li><Link to = '/CrudOperation'>User Management with Local Storage </Link></li>
//          <li><Link to = '/APIDemo/fetchDemo'>Fetch API Demo </Link></li>
//          </ul>
//          </center>
     
//       </>
//     );
//   }
// }
// export default Home2;
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
        <center>
          <ul style={{ textAlign: "center", paddingInlineStart: "0", fontSize:"22px"}}>
            <h1><b>Task List of React </b></h1>
            <hr></hr>
            <li style={{ listStyleType: "none", marginBottom: "10px" }}>
              <Link to="/loginSignup/">Login&Signup Page with Local Storage</Link>
            </li>
            <li style={{ listStyleType: "none", marginBottom: "10px" }}>
              <Link to="/counterApp">Counter App with Local Storage</Link>
            </li>
            <li style={{ listStyleType: "none", marginBottom: "10px" }}>
              <Link to="/minicalc">Mini Calculator</Link>
            </li>
            <li style={{ listStyleType: "none", marginBottom: "10px" }}>
              <Link to="/colorpicker">Colour Picker with Local Storage</Link>
            </li>
            <li style={{ listStyleType: "none", marginBottom: "10px" }}>
              <Link to="/todoApp">TODO App</Link>
            </li>
            <li style={{ listStyleType: "none", marginBottom: "10px" }}>
              <Link to="/todoApp/todowithLS">TODO App with Local Storage</Link>
            </li>
            <li style={{ listStyleType: "none", marginBottom: "10px" }}>
              <Link to="/CrudOperation">User Management with Local Storage</Link>
            </li>
            <li style={{ listStyleType: "none", marginBottom: "10px" }}>
              <Link to="/APIDemo/fetchDemo">Fetch API Demo</Link>
            </li>
            <li style={{ listStyleType: "none", marginBottom: "10px" }}>
              <Link to="/APIDemo/axiosdemo">Axios API Demo</Link>
            </li>
          </ul>
        </center>
      </>
    );
  }
}

export default Home2;
