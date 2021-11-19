import React, {Component} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductModal from './ProductModal'

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }

  openModal = () => {
    this.setState({modal: true})
    console.log(this.state.modal)
  }

  closeModal = () => {
    this.setState({modal: false})
  }

  handleClick = () => {
    this.props.addToCart(this.props.product._id);
  }

  render() {
    return (
      <>
        <div className="single-card" >
          <img
            className="product-card-img"
            src={this.props.product.image}
            onClick={this.openModal}
            alt={this.props.product.name}
          />
          <p className="product-name">{this.props.product.name}</p>
          <p className="product-price">{'$' + this.props.product.price}</p>
          <button
            size="medium"
            variant="contained"
            onClick={this.handleClick}
          >Add to Cart</button>
          <ProductModal modal={this.state.modal} closeModal={this.closeModal} products={this.props.product} />
        </div>
      </>
    )
  }
}

