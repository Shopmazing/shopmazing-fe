import React, {Component} from 'react'
import AdminDataGrid from './AdminDataGrid';
import Button from 'react-bootstrap/Button';
import AddProductModal from './AddProductModal';

export default class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddProductModal: false,
      showEditProductModal: false,
      productToEdit: {},
    }
  }

  hideModal = () => {
    this.setState({showAddProductModal: false, showEditProductModal: false})
  }

  showAddModal = () => {
    this.setState({showAddProductModal: true})
  }

  showEditModal = (productObj) => {
    this.setState({showEditProductModal: true, productToEdit: productObj})
  }

  render() {
    return (
      <>
        <AddProductModal
          showAddProductModal={this.state.showAddProductModal}
          hideModal={this.hideModal}
          addProducts={this.props.addProducts}
        />
        <AdminDataGrid allProducts={this.props.allProducts} />
        <Button onClick={this.showAddModal} >New Product</Button>
      </>
    )
  }
}
