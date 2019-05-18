import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
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
              <Navbar.Brand>
                <NavLink
                  to="/attacks"
                >
                  Attacks 
                </NavLink>
              </Navbar.Brand>
          </Nav>
          <Nav pullRight>
            <Navbar.Brand>
                <NavLink
                  to="/about"
                > 
                  About 
                </NavLink>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;