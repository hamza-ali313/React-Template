
import React, { Component, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';


// LOGO
// import sitelogo from '../Assets/Logo.png';
import ScrollToTop from '../Views/ScrollToTop/Index';




function Header() {
  
  const [expanded, setExpanded] = useState(false);
  
  
  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  }
  

    return (
      <div className='main-header'>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact='true' as={Link} to={'/'} onClick={setExpand}>Home</NavLink>
            <NavLink exact='true' as={Link} to={'/Aboutus'} onClick={setExpand}>About Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
           
    );
  }
  
  export default Header;
  