import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Products from './home/Products';
import Header from './header/Header';

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
      this.setState({ allProducts: data });
    } catch {

    }

  }

  getProducts = () => {
    //todo
  }

  putProducts = async (id, updateProducts) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/cart/${id}`;
    try {
      let results = await axios.put(url, updateProducts);
      let filteredProducts = this.state.products.filter(product => product._id !== id);
      this.setState({ products: filteredProducts.data });
    } catch (e) {
      console.error(e);
    }
  }

  removeFromCart = (id) => {
    let filteredProducts = this.state.cart.filter(product => product._id !== id);
    this.setState({ product: filteredProducts });
  }

render() {
  return (
    <>
      <Header />
      <Products allProducts={this.state.allProducts} />
      <Cart removeFromCart={this.removeFromCart} cart={this.state.cart} />
    </>
  );
}
}

export default App;
