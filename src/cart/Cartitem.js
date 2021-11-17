import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default class Cartitem extends Component {
    render() {
        return (
            <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.product.image} />
                <Card.Body>
                <Card.Title>{this.props.product.name}</Card.Title>
                <Card.Text>
                    {this.props.product.description}
                </Card.Text>
                </Card.Body>
            </Card >
            <Button variant="secondary" onClick={() => this.props.removeFromCart(this.props.product._id)}>Delete Item</Button>
            </>
        )
    }
}
