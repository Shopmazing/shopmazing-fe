import React, {Component} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default class AdminDataGrid extends Component {

  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>In Stock</th>
              <th>Quantity Sold</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.allProducts.map(element => {
                return (
                  <tr key={element._id}>
                    <td><Button onClick={() => this.props.showEditModal(element)}>Edit</Button></td>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td>{element.category}</td>
                    <td>{`$${element.price}`}</td>
                    <td>{element.stock}</td>
                    <td>{element.quantitySold}</td>
                    <td><Button onClick={() => this.props.deleteProducts(element._id)}>X</Button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </>

    );
  }
}
