import {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewProductForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.formName.value;
    const description = event.target.formDescription.value;
    const image = event.target.formUrl.value;
    const category = event.target.formCategory.value;
    const price = event.target.formPrice.value;
    const stock = event.target.formStock.value;
    const productObj = {name, description, image, price, stock, category};
    event.target.reset();
    this.props.addProducts(productObj);
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Product Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Product Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUrl">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Image Url"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Product Category"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Sell Price"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Available Stock"
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
};

export default NewProductForm;
