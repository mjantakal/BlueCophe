import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../CSS/NavbarPage.css';


class NavbarPage extends Component {

  state = {
    user: 'manasa',
    date: ''
  }

  render() {
    let divStyle = {}
    let imgUrl;
    console.log("page=", this.props.page)

    if (this.props.page === "contactPage") {
      imgUrl = "https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"

    } else if (this.props.page === "aboutPage") {
      imgUrl = "https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"

    } else {
      imgUrl = "https://images.unsplash.com/photo-1464151759330-a3441f3da55e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3910&q=80"

    }
    divStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    }
    if(this.props.page==="blogPage"){
        return(
            <div className="navbar-blgpage">
                <div className="nav-container">
                <div className="auth-name-blogpage">
                    <span>ABHIJIT ALUR</span>
                </div>
                <div className="navbar-content-blogpage">
                <Navbar className="navbar-default" bg="ligth" variant="dark">
                        <Nav className="mr-auto">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/about">About</Nav.Link>
                          <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                      </Navbar>
                </div>
                </div>
            </div>
        )
    }else {

        return (

            <div className="div-for-navbar">
              <div className="waveWrapper waveAnimation" style={divStyle}>
                <div className="waveWrapperInner bgMiddle">
                  <div className="wave waveMiddle" ></div>
                </div>
                <div className="waveWrapperInner bgBottom">
                  <div className="wave waveBottom">
                  </div>
                </div>
                <div className="waveWrapperInner bgTop" >
                  <div className="wave waveTop">
                    <div className="navbar-content">
                      <Navbar className="navbar-default" bg="ligth" variant="dark">
                        <Nav className="mr-auto">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/about">About</Nav.Link>
                          <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                      </Navbar>
                    </div>
                    <div className="div-for-site-name">
                      <h3>
                        Endurance
                         </h3>
                      <h2>STARTS WITH YOU</h2>
                    </div>
      
                  </div>
                </div>
              </div>
            </div>
          )
        }
    }
  
}
export default NavbarPage;


