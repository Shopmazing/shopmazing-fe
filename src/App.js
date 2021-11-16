import React, {Component} from 'react';
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
      textFilter: '',
      categoryFilter: 'all',
    }
  }

  componentDidMount() {
    this.getFakeProducts();
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
        <Header
          allProducts={this.state.allProducts}
          updateTextFilter={this.updateTextFilter}
          updateCategoryFilter={this.updateCategoryFilter}
          textFilter={this.state.textFilter}
          categoryFilter={this.state.categoryFilter}
        />
        <Products
          allProducts={this.state.allProducts}
          textFilter={this.state.textFilter}
          categoryFilter={this.state.categoryFilter}
        />

      </>
    );
  }
}

export default App;
