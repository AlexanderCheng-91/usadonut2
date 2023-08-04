import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from 'reactstrap';

//import pictures
import donutBrandImage from "../navbar images/glaze donut icon.jpg"
import orderPickupImage from "../navbar images/OrderPickUp.jpg"


function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Navbar {...args}>
        <NavbarBrand href="/">
            <img
                alt="logo"
                src={donutBrandImage}
                style={{
                    height: 120,
                    width: 120
                }}
            ></img>
            </NavbarBrand>
            <Nav className="me-auto" navbar>
                <NavItem className="NavBar-linkItems">
                    {/* do css for the navbar */}
                    <NavLink href="/components/">Menu</NavLink>
                </NavItem>
            </Nav>
            <NavbarBrand href="/">
            <img
                alt="order pick up logo"
                src={orderPickupImage}
                style={{
                    height: 80,
                    width: 250
                }}
            ></img>
            </NavbarBrand>
        
      </Navbar>
    </div>
  );
}

export default NavBar;