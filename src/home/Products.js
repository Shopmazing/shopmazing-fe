//import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
//import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

//const Item = styled(Paper)(({ theme }) => ({
//...theme.typography.body2,
//padding: theme.spacing(1),
//textAlign: 'center',
//color: theme.palette.text.secondary,
//}));


import React, {Component} from 'react';
import ProductCard from './ProductCard';

export default class Products extends Component {
  render() {

    // filtering happens here
    let filteredProducts = [];
    filteredProducts = [...this.props.allProducts]

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
