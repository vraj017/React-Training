import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
function OurWork(){
    return(<>
    <div id="main">	
	<div id="site_content">
   <Header/>
   <div id="content">
        <h2>Our Work</h2>
	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper, massa eu iaculis imperdiet, turpis nunc aliquam augue, eget condimentum lectus velit vitae urna. Curabitur eu feugiat erat. Nam et arcu sit amet magna facilisis accumsan vel nec mauris. Vivamus interdum adipiscing molestie. Vestibulum sollicitudin massa eget turpis cursus eget ullamcorper odio pharetra. Sed dictum lacus sed erat molestie id aliquet enim vestibulum. Nullam malesuada, massa feugiat feugiat blandit, quam metus tincidunt risus, in condimentum nisi eros a metus. Cras sapien mi, porttitor eu semper sit amet, cursus eget lacus. Aliquam sed dolor mauris, id blandit ligula. Ut a purus justo. Donec metus dui, sodales eu placerat in, placerat ut massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        <h3>Our services include:</h3>
    	  <ul>
   			<li>Service 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    	  	<li>Service 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
   			<li>Service 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
   			<li>Service 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
		  </ul>
      </div>  

      <Sidebar/>
	  
    </div>
    <Footer/>
  </div>
    </>

    )
}

export default OurWork;