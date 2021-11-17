import React, { Component } from 'react'
import Cartitem from './Cartitem'
import PlaceOrder from './PlaceOrder';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table';
import { ConstructionOutlined } from '@mui/icons-material';

export default class Cart extends Component {

    handleClick = (id) => {
        this.props.removeFromCart(id);
    }

    render() {
        let total = this.props.cart.map(element => element.price).reduce((a, b) => Number(a) + Number(b), 0);
        console.log(total);
        return (
            <>
            <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            {
              this.props.cart.map(element => {
                return (
                  <Cartitem product={element} removeFromCart={this.props.removeFromCart} />
                )
              })
            }
            <tr>
                <td colSpan='4'></td>
                <td >{`$${total}`}</td>
            </tr>
            </tbody>
            </Table>
            <PlaceOrder cart={this.props.cart}/>
            </>
        )
    }
}
