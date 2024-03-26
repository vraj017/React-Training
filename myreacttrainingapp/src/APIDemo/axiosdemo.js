import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from 'axios';
import React from 'react';

class AxiosDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myData: [] };
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            console.table(res.data);
            this.setState({ myData: res.data });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    render() {
        return(
            <>
                <center><h1><b>AXIOS API DEMO</b></h1></center>
                <hr></hr>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Rating</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.myData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><img src={item.image} alt={item.title} width="100px"/></td>
                                <td>{item.title}</td>
                                <td>{item.rating.rate}</td>
                                <td>${item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default AxiosDemo;
