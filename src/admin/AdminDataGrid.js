import React, {Component} from 'react'
import Table from 'react-bootstrap/Table';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';


export default class AdminDataGrid extends Component {

  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity Sold</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.allProducts.map(element => {
                return (
                  <tr key={element._id}>
                    <td>{element.name}</td>
                    <td>{element.name}</td>
                    <td>{element.name}</td>
                    <td>{element.name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <AddButton />
      </>

    );
  }
}
