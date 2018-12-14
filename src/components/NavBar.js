import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink
              to='/'
            >
              Mitre's Att&ck Patterns
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <NavLink
                to="/attacks"
              > 
                Attacks 
              </NavLink>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <NavLink
                to="/about"
              > 
                About 
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;