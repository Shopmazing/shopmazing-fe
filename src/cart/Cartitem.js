import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export default class Cartitem extends Component {
    render() {
        return (
            <>
            <tr key={this.props.product._id}>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.description}</td>
                <td>{`$${this.props.product.price}`}</td>
                <td>{this.props.product.quantity}</td>
                <td>{this.props.product.total}</td>
                <td><Button variant="secondary" onClick={() => this.props.removeFromCart(this.props.product._id)}>Delete Item</Button></td>
            </tr>
            </>
        )
    }
}
