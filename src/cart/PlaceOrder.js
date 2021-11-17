import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class PlaceOrder extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.placeOrder(this.props.cart);
    }

    render() {
        return (
            <Button variant="secondary" onClick={this.handleClick}>Place Order</Button>
            )
        }
    }