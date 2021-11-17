import React, {Component} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class ProductCard extends Component {

  handleClick = () => {
    this.props.addToCart(this.props.product._id);
  }

  render() {
    return (
      <>
        <Card sx={{maxWidth: 345}}>
          <CardMedia
            component="img"
            height="140"
            image={this.props.product.image}
            alt={this.props.product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.props.product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="medium"
              variant="contained"
              onClick={this.handleClick}
            >Add to Cart</Button>
          </CardActions>
        </Card>
      </>
    )
  }
}

