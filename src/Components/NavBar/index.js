import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    navText: PropTypes.string,
    navComponent: PropTypes.string
  })),
  isHidden: PropTypes.bool,
  mobileMenuHandler: PropTypes.func,
};

const defaultProps = {
  navItems: [{
    navText: '',
    navLink: ''
  }],
  isHidden: true,
  mobileMenuHandler: () => {}
};

const NavBar = props => {
  const { navItems, isHidden, mobileMenuHandler } = props;
  const listItems = navItems.map((nav, index) => {
    return (
    <li className="" key={index}>
      <NavLink to={`/${nav.navLink}`} className="nav-item nav-link"onClick={mobileMenuHandler}>{nav.navText}</NavLink>
    </li>
    )
  })
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">
        <img
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Brand"
        />
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        onClick={mobileMenuHandler}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isHidden ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav">
          {listItems}
        </ul>
      </div>
    </nav>
  );
};

NavBar.propTypes = propTypes
NavBar.defaultProps = defaultProps

export default NavBar
