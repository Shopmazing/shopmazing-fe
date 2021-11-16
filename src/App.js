import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Products from './Products';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      cart: [],
      allProducts: [],
      isAdmin: false,
    }
  }

  componentDidMount() {
    this.getFakeProducts();
    this.getProducts();
  }

  getFakeProducts = async () => {
    const fakeProductsUrl = `https://fakestoreapi.com/products`;
    try {
      const fakeProductsResponse = await axios.get(fakeProductsUrl);
      let data = fakeProductsResponse.data.map((element) => {
        //convert
        return {
          name: element.title,
          category: element.category,
          description: element.description,
          image: element.image,
          price: element.price,
          stock: 1,
        };
      });
      console.log('data', data);
      this.setState({allProducts: data});
    } catch {

    }

  }

  getProducts = () => {
    //todo
  }

  putProducts = () => {
    //todo
  }


  render() {
    return (
      <>
        <Header />
        <Products allProducts={this.state.allProducts} />

      </>
    );
  }
}

export default App;
