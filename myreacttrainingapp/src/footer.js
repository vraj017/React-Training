import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <>
        <div id="footer" style={{ position: 'fixed', bottom: '0', hieght:'20px',width: '100%', backgroundColor: 'lightgrey', textAlign: 'center' }}>
          <b><p>&copy;2024 React Training |Created by VRAJ PATEL</p></b>
        </div>
      </>
    );
  }
}

export default Footer;
