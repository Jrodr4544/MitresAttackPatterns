import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    return (

<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      Mitre's Att&ck Patterns
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} >
        <NavLink
           style={{ marginRight: '10px' }} 
           to="/attacks"
        > 
          Attacks 
        </NavLink>
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} >
        <NavLink
          style={{ marginRight: '10px' }} 
          to="/about"
        > 
          About 
        </NavLink>
      </NavItem>
      {/*<NavItem eventKey={2} href="#">
        Link Right
    </NavItem>*/}
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )
}

export default NavBar;