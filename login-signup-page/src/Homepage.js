import React,{Component} from "react";
import { Link } from "react-router-dom";
class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render()
    {
        return(<><center>
        <h2>Homepage</h2>
        <p> Hello </p>
        <Link to="/homepage/changepassword">Change Password</Link>
        </center></>);
    }
}
export default Homepage;