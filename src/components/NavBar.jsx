import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

//import pictures
import donutBrandImage from "../navbar images/glaze donut icon.jpg";
import orderPickupImage from "../navbar images/OrderPickUp.jpg";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={donutBrandImage}
            style={{
              height: 120,
              width: 120,
            }}
          ></img>
        </NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem className="NavBar-linkItems">
            {/* do css for the navbar */}
            <NavLink href="/components/">Menu</NavLink>
          </NavItem>
        </Nav>
        <NavbarBrand href="/order">
          <img
            alt="order pick up logo"
            src={orderPickupImage}
            style={{
              height: 80,
              width: 250,
            }}
          ></img>
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse> */}
      </Navbar>
    </div>
  );
}

export default NavBar;
