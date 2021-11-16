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
      console.log('no text filter', 'category all');
      console.log(this.props.categoryFilter, this.props.textFilter)
    } else {
      if (this.props.categoryFilter === 'all') {
        filteredProducts = this.props.allProducts.filter(element => element.name.match(new RegExp(this.props.textFilter, 'i')) || element.description.match(new RegExp(this.props.textFilter, 'i')));
        console.log('text filter', 'category all');
        console.log(this.props.categoryFilter, this.props.textFilter)
      } else {
        filteredProducts = this.props.allProducts.filter(element => element.category === this.props.categoryFilter).filter(element => element.name.match(new RegExp(this.props.textFilter, 'i')) || element.description.match(new RegExp(this.props.textFilter, 'i')));
        console.log('text filter', 'category yes');
        console.log(this.props.categoryFilter, this.props.textFilter)
      }
    }

    return (
      <div>
        <Box sx={{width: '100%'}}>
          <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            {
              filteredProducts.map((element, index) => {
                return (
                  <Grid key={index} item xs={6}>
                    <ProductCard
                      name={element.name}
                      image={element.image}
                      description={element.description}
                    />
                  </Grid>
                );
              })
            }
          </Grid>
        </Box>
      </div>
    )
  }
}
