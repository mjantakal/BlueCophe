import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../CSS/NavbarPage.css';


class NavbarPage extends Component {
    
  state = {
    user: 'manasa',
    date: ''
  }

  render() {
    const logofooter = require('../Images/logo.png');

    return (
      <div>
        <Navbar className="navbarStyle" collapseOnSelect expand="lg" >
          <Navbar.Brand href="#HomePage">
            <img src={logofooter} alt='icon' width="200" heigh="50" />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#HomePage">Home</Nav.Link>
              <Nav.Link href="#Blog">Blog</Nav.Link>
              <Nav.Link href="#Email">E-mail us</Nav.Link>
              <Nav.Link href="#News">News</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
export default NavbarPage;


