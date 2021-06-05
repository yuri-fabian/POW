import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import SignOutButton from "../auth/SignOut";

import * as routes from "../constants/routes";
import AuthUserContext from "../auth/AuthUserContext";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) =>
      authUser ? <NavigationAuth userInfo={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationNonAuth = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>
      <Link to={routes.LANDING}> Landing </Link>
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>
          <a href="#about-us">about-us</a>
          <Link to={routes.SIGN_IN}>Sign In</Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink>
          <Link to={routes.HOME}>Home</Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink>
          <a href="#about-us">about-us</a>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink>
          <a href="#contact-us">contact-us</a>
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;

const NavigationAuth = ({ userInfo }) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>
      <Link to={routes.LANDING}> Landing </Link>
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>
          <Link to={routes.HOME}>Home</Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink>
          <a href="#about-us">about-us</a>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink>
          <a href="#contact-us">contact-us</a>
        </NavLink>
      </NavItem>

      {userInfo.providerData[0].providerId === "facebook.com" ? null : (
        <NavItem>
          <NavLink>
            <Link to={routes.ACCOUNT}>Account</Link>
          </NavLink>
        </NavItem>
      )}
      <NavItem>
        <SignOutButton />
      </NavItem>
    </Nav>
  </Navbar>
);
