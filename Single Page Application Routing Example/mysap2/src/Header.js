import { Link } from "react-router-dom";
function Header(){
    return ( <>
    
    <div id="site_heading">
	    <h1>Sarjen Systems </h1>	
	    
	  </div>
	  <div id="header">
	    <div id="menubar">
          <ul id="menu">
          <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/ourwork'>OurWork</Link></li>
            <li><Link to ='/projects'>Projects</Link></li>
            <li><Link to ='/testimonials'>Testimonials</Link></li>
            <li><Link to ='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>  
	  <div id="banner_image">
	    
            <img src="images/slide1.jpg" alt="" />
            
		 
		
	  </div>	  
    </>

    )
}

export default Header;