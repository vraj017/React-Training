import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

class ColourPickerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'white' 
        };
    }
 
    componentDidMount() {
        const savedColor = localStorage.getItem('backgroundColor');
        if (savedColor) {
            this.setState({ backgroundColor: savedColor });
        }
    }
 
    saveColor = (color) => {
        localStorage.setItem('backgroundColor', color);
        this.setState({ backgroundColor: color });
    }
 
    render() {
        return (
            <div className="container"> {/* Added container class for Bootstrap */}
                <div className="row justify-content-center"> {/* Added Bootstrap row and justify-content-center class */}
                    <div className="col-md-6"> {/* Added Bootstrap column class */}
                        <center>
                            <h2>Color Picker App</h2>
                            <div>
                                <button className="btn btn-danger mr-2" onClick={() => this.saveColor('red')}>Red</button> {/* Added Bootstrap button class and margin */}
                                <button className="btn btn-success mr-2" onClick={() => this.saveColor('green')}>Green</button> {/* Added Bootstrap button class and margin */}
                                <button className="btn btn-primary mr-2" onClick={() => this.saveColor('blue')}>Blue</button> {/* Added Bootstrap button class and margin */}
                                <button className="btn btn-light" onClick={() => this.saveColor('white')}>Reset</button> {/* Added Bootstrap button class */}
                            </div>
                            <br />
                            <div id="component" style={{ width: '200px', height: '200px', backgroundColor: this.state.backgroundColor, marginBottom: '20px' }}></div>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ColourPickerApp;
