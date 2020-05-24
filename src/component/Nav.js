import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../static_data/logo.svg";
import { connect } from 'react-redux';
import {logoutUser} from '../actions/authAction'


const Nav = ({ isLoggedin,logoutUser,totaProductCount }) => {

function logout(){
  logoutUser()
}

  return (
    <NavTag className="navbar navbar-expand-sm  navbar-dark px-sm-5" style={{ backgroundColor: 'green' }}>

    Ecommerce : Mobile Shop

      <Link to="/">
        <img src={logo} alt="store" className="logo" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/cart" className="nav-link">
    View Cart ({totaProductCount})
            </Link>
        </li>
        <li>
          {!isLoggedin ? <Link to="/login" className="nav-link">
            Login
            </Link> :
            <Link to="/" className="nav-link" onClick={e=>logout()}>
              Logout
            </Link>
          }
        </li>
      </ul>
    </NavTag>
  )
}

const mapStateToProps = state => ({
  isLoggedin: state.auth.isLoggedin,
  totaProductCount: state.product.totaProductCount
});


export default connect(mapStateToProps, {logoutUser})(Nav);


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