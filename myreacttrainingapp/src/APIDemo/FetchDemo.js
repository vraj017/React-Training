import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Footer from "../footer";

class FetchDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myData: [] };
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(res => {
            console.table(res);
            this.setState({ myData: res });
        })
    }

    render() {
        return (
            <div>
                <center><h1><b>Fetch API DEMO</b></h1></center>
                <hr></hr>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                          
                          
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.myData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><img src={item.image} alt={item.title} width="100px"/></td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                
                              
                            </tr>
                        ))}
                    </tbody>
                </table>
              <center><Footer /></center>  
            </div>
        );
    }
}

export default FetchDemo;
