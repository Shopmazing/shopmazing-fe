import React, {Component} from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap'
import Icon from '@mui/material/Icon';

export default class Header extends Component {

  //handleCategoryChange = (e) => this.props.updateCategoryFilter(e.target.value);
  //handleTextChange = (e) => this.props.updateTextFilter(e.target.value); 

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home">Shopmazing</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#lorem">Home</Nav.Link>
                <Nav.Link href="#ipsum">About Us</Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}
