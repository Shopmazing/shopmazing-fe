import {Component} from "react";
import Modal from 'react-bootstrap/Modal';


class ProductModal extends Component {

  render() {
    return (
      <>
        {this.props.products &&
          <Modal show={this.props.modal} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.products.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={this.props.products.image} alt="" /><p>
              {this.props.products.description}</p></Modal.Body>
          </Modal>

        }
      </>
    )
  };
}

export default ProductModal;


