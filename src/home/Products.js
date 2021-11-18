import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



import React, {Component} from 'react';
import ProductCard from './ProductCard';

export default class Products extends Component {


  render() {
    // filtering happens here
    let filteredProducts = [];
    if (this.props.textFilter === '' && this.props.categoryFilter === 'all') {
      filteredProducts = [...this.props.allProducts];
    } else {
      if (this.props.categoryFilter === 'all') {
        filteredProducts = this.props.allProducts.filter(element => element.name.match(new RegExp(this.props.textFilter, 'i')) || element.description.match(new RegExp(this.props.textFilter, 'i')));
      } else {
        filteredProducts = this.props.allProducts.filter(element => element.category === this.props.categoryFilter).filter(element => element.name.match(new RegExp(this.props.textFilter, 'i')) || element.description.match(new RegExp(this.props.textFilter, 'i')));
      }
    }
    filteredProducts = filteredProducts.filter(element => element.stock > 0);

    return (
      <div>
        <Grid
          container
          spacing={3}
          alignItems="stretch"
          justifyContent="center"

        >

          {
            filteredProducts.map((element, index) => {
              return (
                <Grid container padding="2%" justifyContent="center" key={index} item spacing={3} xs={2} sm={4} md={3}>
                  <ProductCard
                    product={element}
                    addToCart={this.props.addToCart}
                  />
                </Grid>
              );
            })
          }
        </Grid>
      </div >
    )
  }
}

