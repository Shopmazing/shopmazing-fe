import React, { Component } from 'react'
import Cartitem from './Cartitem'
import PlaceOrder from './PlaceOrder';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

export default class Cart extends Component {

    handleClick = (id) => {
        this.props.removeFromCart(id);
    }

    render() {
        return (
            <>
           { this.props.cart.length > 0 && <Container><Row sm={3}>
                    {this.props.cart.map(product =>{ return (
               <Cartitem key={product._id} removeFromCart={this.props.removeFromCart} putProducts={this.props.putProducts} product={product} />)})}
               </Row></Container>
            }
          <PlaceOrder cart={this.props.cart}/>
           </>
        )
    }
}
