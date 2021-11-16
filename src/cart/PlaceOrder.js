import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class PlaceOrder extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({cart: [] })
    }

    render() {
        return (
            <Button variant="secondary" onSubmit={() => this.handleSubmit()}>Place Order</Button>
            )
        }
    }