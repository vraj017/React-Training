import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
function Projects(){
    return(<>
    <div id="main">	
	<div id="site_content">
   <Header/>
   <div id="content">
        <h2>Latest Projects</h2>
		<h3>Example 1</h3>
        <br/>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sapien vel orci posuere tristique quis vitae nisi. Sed porta venenatis auctor. Fusce iaculis ligula odio. Etiam malesuada dui sit amet eros pharetra interdum.</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
		  <br  />
          
		  <h3>Example 2</h3>
          <br/>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sapien vel orci posuere tristique quis vitae nisi. Sed porta venenatis auctor. Fusce iaculis ligula odio. Etiam malesuada dui sit amet eros pharetra interdum.</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
          </div>

      <Sidebar/>
	  
    </div>
    <Footer/>
  </div>
    </>

    )
}

export default Projects;