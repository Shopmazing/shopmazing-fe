import {Component} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class ProductModal extends Component {

  render() {
    return (
      <>
      {this.props.products &&
      <Modal show={this.props.modal} onHide={this.props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.products.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.products.image} alt=""/><p>
        {this.props.products.description}</p></Modal.Body>
    </Modal>

      }
      </>
    )
  };
}

export default ProductModal;



{/* <Modal
        show={this.props.openModal}
        onHide={this.props.closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{this.props.products.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.products.image} alt=""/><p>
        {this.props.products.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal> */}