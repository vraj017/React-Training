import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import OurWork from './OurWork';
import Projects from './Project';
import Testimonials from './Testimonials';
import Contact from './Contact';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/ourwork' element={<OurWork/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
     {/* <div id="main">	
	<div id="site_content">
   <Header/>
	  <div id="content">
        <div className="content_item">
		  <h1>Welcome To Your Website</h1>
          <p>This standards compliant, simple, fixed width website template is released as an 'open source' design (under the Creative Commons Attribution 3.0 Licence), which means that you are free to download and use it for anything you want (including modifying and amending it). If you would like to remove the 'website template by ARaynorDesign' link from the footer of a template / website then that is OK, providing you make a small donation via the website. I do not specify an amount, just what you think the design is worth.</p>
        </div>
	    <div className="content_image">
		  <a href="#"><img alt="image" src="images/city.jpg" /></a>
		</div>
		<div className="content_text">
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor, leo quis tempus scelerisque, tellus massa adipiscing ante, vel scelerisque neque massa tempus ante. Vivamus libero lorem, bibendum ac elementum quis, auctor nec justo. Sed pretium velit nec dolor fringilla varius. Maecenas dapibus neque sed nisi ultrices a ullamcorper sapien imperdiet.</p>
		  <a href="#">Read More</a>
		</div>
		<br />
	    <div className="content_image_right">
		  <a href="#"><img  alt="image" src="images/city.jpg" /></a>
		</div>
		<div className="content_text_left">
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor, leo quis tempus scelerisque, tellus massa adipiscing ante, vel scelerisque neque massa tempus ante. Vivamus libero lorem, bibendum ac elementum quis, auctor nec justo. Sed pretium velit nec dolor fringilla varius. Maecenas dapibus neque sed nisi ultrices a ullamcorper sapien imperdiet.</p>
		  <a href="#">Read More</a>
		</div>		
		
	  </div>    

      <Sidebar/>
	  
    </div>
    <Footer/>
  </div> */}
    </>
  );
}

export default App;
