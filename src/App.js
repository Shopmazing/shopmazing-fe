import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Products from './home/Products';
import Header from './header/Header';
import Cart from './cart/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      cart: [],
      allProducts: [],
      isAdmin: false,
      textFilter: '',
      categoryFilter: 'all',
    }
  }

  componentDidMount() {
    //this.getFakeProducts();
    this.getProducts();
  }

  updateCategoryFilter = (category) => {
    this.setState({categoryFilter: category});
  }

  updateTextFilter = (text) => {
    this.setState({textFilter: text});
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
    } catch (error) {
      console.error(error);
    }
  }

  getProducts = async () => {
    const config = {
      method: 'get',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: '/',
    }
    try {
      const productResponse = await axios(config);
      this.setState({allProducts: productResponse.data});
    } catch (error) {
      console.error(error);
    }
  }

  putProducts = async (id, updateProducts) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/cart/${id}`;
    try {
      let results = await axios.put(url, updateProducts);
      let filteredProducts = this.state.products.filter(product => product._id !== id);
      this.setState({products: filteredProducts.data});
    } catch (e) {
      console.error(e);
    }
  }

  removeFromCart = (id) => {
    let filteredProducts = this.state.cart.filter(product => product._id !== id);
    this.setState({allProducts: filteredProducts});
  }

  addToCart = (id) => {
    const productToAdd = this.state.allProducts.filter(element => element._id === id)[0];
    this.setState({cart: [...this.state.cart, productToAdd]})
    console.log(productToAdd);
    console.log(this.state.cart);
  }

  render() {
    return (
      <>
        <Router>
          <Header
            allProducts={this.state.allProducts}
            updateTextFilter={this.updateTextFilter}
            updateCategoryFilter={this.updateCategoryFilter}
            textFilter={this.state.textFilter}
            categoryFilter={this.state.categoryFilter}
            cart={this.state.cart}
          />
          <Switch>
            <Route exact path="/">
              <Products
                allProducts={this.state.allProducts}
                textFilter={this.state.textFilter}
                categoryFilter={this.state.categoryFilter}
                addToCart={this.addToCart}
              />
            </Route>
            <Route exact path="/cart">
              <Cart removeFromCart={this.removeFromCart} cart={this.state.cart} allProducts={this.state.allProducts} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
