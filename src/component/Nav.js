import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../static_data/logo.svg";
// import { ButtonContainer } from "./Button";

export const Nav = () => {
  return (
    <NavTag className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="logo" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/cart" className="nav-link">
            View Cart(Y)
            </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
            </Link></li>
      </ul>
      {/* <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link> */}
    </NavTag>
  )
}

const NavTag = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;