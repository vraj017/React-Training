import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function Home() {
  return (
    <>
      <div id="main">
        <div id="site_content">
          <Header />
          <div id="content">
            <div className="content_item">
              <h2>Welcome To Your Website</h2>
              <p>
                This standards compliant, simple, fixed width website template is released as an 'open source' design (under the Creative Commons Attribution 3.0 Licence), which means that you are free to download and use it for anything you want (including modifying and amending it). If you would like to remove the 'website template by ARaynorDesign' link from the footer of a template / website then that is OK, providing you make a small donation via the website. I do not specify an amount, just what you think the design is worth.
              </p>
            </div>
            <div className="content_image">
              
                <img alt="City" src="images/city.jpg" />
              
            </div>
            <div className="content_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor, leo quis tempus scelerisque, tellus massa adipiscing ante, vel scelerisque neque massa tempus ante. Vivamus libero lorem, bibendum ac elementum quis, auctor nec justo. Sed pretium velit nec dolor fringilla varius. Maecenas dapibus neque sed nisi ultrices a ullamcorper sapien imperdiet.
              </p>
              <button>Read More</button>
            </div>
            <br />
            <div className="content_image_right">
              
                <img alt="City" src="images/city.jpg" />
              
            </div>
            <div className="content_text_left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor, leo quis tempus scelerisque, tellus massa adipiscing ante, vel scelerisque neque massa tempus ante. Vivamus libero lorem, bibendum ac elementum quis, auctor nec justo. Sed pretium velit nec dolor fringilla varius. Maecenas dapibus neque sed nisi ultrices a ullamcorper sapien imperdiet.
              </p>
              <button>Read More</button>
            </div>
          </div>
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
