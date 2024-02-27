import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
function Contact(){
    const inputStyle = {
        width: '430px',
        float: 'right',
      };
    
      const labelStyle = {
        width: '170px',
        float: 'left',
      };
    
      const submitButtonStyle = {
        width: '430px',
        float: 'right',
        paddingTop: '15px',
      };
    return(<>
    <div id="main">	
	<div id="site_content">
   <Header/>
   <div id="content">
            <h2>Contact Us</h2>
            <p>This is what a contact form could look like on this website template:</p>

            <div style={labelStyle}>
              <p>Name</p>
            </div>
            <div style={inputStyle}>
              <p>
                <input className="contact" type="text" name="your_name" value="" />
              </p>
            </div>

            <div style={labelStyle}>
              <p>Email Address</p>
            </div>
            <div style={inputStyle}>
              <p>
                <input className="contact" type="text" name="your_email" value="" />
              </p>
            </div>

            <div style={labelStyle}>
              <p>Message</p>
            </div>
            <div style={inputStyle}>
              <p>
                <textarea className="contact textarea" rows="8" cols="50" name="your_message"></textarea>
              </p>
            </div>

            <br />

            <p style={{ padding: '10px 0 10px 0' }}>Please enter the answer to this simple maths question (to prevent spam)</p>

            <div style={labelStyle}>
              <p>Maths Question: 9 + 3 = ?</p>
            </div>
            <div style={inputStyle}>
              <p>
                <input type="text" name="user_answer" className="contact" />
                <input type="hidden" name="answer" value="4d76fe9775" />
              </p>
            </div>

            <div style={submitButtonStyle}>
              <p style={{ paddingTop: '15px' }}>
                <input className="submit" type="submit" name="contact_submitted" value="Send" />
              </p>
            </div>
          </div>
   

      <Sidebar/>
	  
    </div>
    <Footer/>
  </div>
    </>

    )
}

export default Contact;