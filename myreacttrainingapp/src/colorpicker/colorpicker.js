import React, { Component } from 'react';
 
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
            <div> <center>
                <h2> Color Picker App </h2>
                <button onClick={() => this.saveColor('red')}>Red</button>
                <button onClick={() => this.saveColor('green')}>Green</button>
                <button onClick={() => this.saveColor('blue')}>Blue</button>
                <button onClick={() => this.saveColor('White')}>Reset</button><br/>&nbsp;
                <div id="component" style={{ width: '200px', height: '200px', backgroundColor: this.state.backgroundColor, marginBottom: '20px' }}></div>
                
                </center></div>
        );
    }
}
 
export default ColourPickerApp;