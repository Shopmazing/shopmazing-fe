import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Products from './home/Products';
import Header from './header/Header';
import Cart from './cart/Cart';
import Admin from './admin/Admin';
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

  addProducts = async (productObj) => {
    const config = {
      method: 'post',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: '/products',
      data: productObj,
    }
    try {
      let response = await axios(config);
      this.setState({allProducts: [...this.state.allProducts, response.data]});
    } catch (error) {
      console.error(error);
    }
  }

  editProducts = async (productObj) => {
    const config = {
      method: 'put',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: `/products/${productObj._id}`,
      data: productObj,
    }
    try {
      await axios(config);
      this.getProducts();
    } catch (error) {
      console.error(error);
    }
  }

  deleteProducts = async (id) => {
    const config = {
      method: 'delete',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: `/products/${id}`,
    }
    try {
      await axios(config);
      let filteredProducts = this.state.allProducts.filter(element => element._id !== id);
      this.setState({allProducts: filteredProducts});
    } catch (error) {
      console.error(error);
    }
  }

  removeFromCart = (id) => {
    let filteredProducts = this.state.cart.filter(product => product._id !== id);
    this.setState({cart: filteredProducts});
  }

  addToCart = (id) => {
    const productToAdd = this.state.allProducts.filter(element => element._id === id)[0];
    if (this.state.cart.length === 0) {
      productToAdd.quantity = 1;
      productToAdd.total = Math.round(productToAdd.quantity * Number(productToAdd.price));
    }
    for (let i = 0; i > this.state.cart.length; i++) {
      if (this.state.cart[i]._id === id) {
        productToAdd.quantity++;
        console.log('anything');
      }
    }
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
              <Cart
                removeFromCart={this.removeFromCart}
                cart={this.state.cart}
                allProducts={this.state.allProducts} />
            </Route>
            <Route exact path="/admin">
              <Admin
                allProducts={this.state.allProducts}
                editProducts={this.editProducts}
                deleteProducts={this.deleteProducts}
                addProducts={this.addProducts}
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
