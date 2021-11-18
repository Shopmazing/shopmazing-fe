import React, {Component} from 'react'
import Cartitem from './Cartitem'
import PlaceOrder from './PlaceOrder';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default class Cart extends Component {

  handleClick = (id) => {
    this.props.removeFromCart(id);
  }

  render() {
    let total = this.props.cart.map(element => element.total).reduce((a, b) => Number(a) + Number(b), 0);
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
                  <Cartitem key={element._id} product={element} removeFromCart={this.props.removeFromCart} />
                )
              })
            }
            <tr>
              <td colSpan='4'></td>
              <td >{`$${total}`}</td>
            </tr>
          </tbody>
        </Table>
        {this.props.cart.length > 0 ?
          <PlaceOrder
            placeOrder={this.props.placeOrder}
            cart={this.props.cart}
            setupUser={this.props.setupUser} />
          : <Button disabled>Place Order</Button>}
      </>
    )
  }
}
