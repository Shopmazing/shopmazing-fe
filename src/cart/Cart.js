import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Cartitem from './Cartitem'
import PlaceOrder from './PlaceOrder';

export default class Cart extends Component {

    handleClick = (id) => {
        this.props.removeFromCart(id);
    }

    render() {
        return (
            <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    {this.props.allProducts.map(product => <Card.Item key={product._id}>
               <Cartitem removeFromCart={this.props.removeFromCart} putProducts={this.props.putProducts} product={product}/></Card.Item>)}
            </Card.Body>
          </Card >
          <PlaceOrder cart={this.props.cart}/>
           </>
        )
    }
}
