import React, {Component} from 'react'
import {Navbar, Container, Nav, NavItem, Form, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Icon from '@mui/material/Icon';

export default class Header extends Component {

  handleCategoryChange = (e) => this.props.updateCategoryFilter(e.target.value);
  handleTextChange = (e) => this.props.updateTextFilter(e.target.value);
  handleSubmit = (e) => e.preventDefault();

  getCategories = () => {
    return ['all', ...new Set(this.props.allProducts.map(element => element.category))];
  }

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" variant="primary">
          <Container>
            <Navbar.Brand><Link to="/" className="nav-link">Shopmazing</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavItem><Link to="/about" className="nav-link">About Us</Link></NavItem>
                <NavItem><Link to="/cart" className="nav-link">Cart</Link></NavItem>
              </Nav>
              <Form onSubmit={this.handleSubmit} className="d-flex">
                <Form.Select onChange={this.handleCategoryChange} aria-label="Floating label select example">
                  {this.getCategories().map((element, index) => {
                    return <option key={index} value={element}>{element}</option>
                  })}
                </Form.Select>
                <FormControl
                  type="text"
                  value={this.props.textFilter}
                  className="me-2"
                  placeholder="Filter by Text"
                  aria-label="text"
                  onChange={this.handleTextChange}
                />
              </Form>
              <Nav>
                <Nav.Link href="/admin"><Icon>star</Icon></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}
