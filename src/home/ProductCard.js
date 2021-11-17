import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class ProductCard extends Component {
  render() {
    return (
      <>
        <Card sx={{ maxWidth: 345 }} className='gridClass'>
          <CardMedia
            component="img"
            height="140"
            image={this.props.image}
            alt={this.props.name}
          />
          <CardContent>
            <Typography className='prodName'>
              <Typography gutterBottom variant="h6" component="div" >
                {this.props.name.substring(0, 60)}
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                {this.props.description.substring(0, 150)}
              </Typography>
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Add to Cart</Button>
          </CardActions>
        </Card>
      </>
    )
  }
}

