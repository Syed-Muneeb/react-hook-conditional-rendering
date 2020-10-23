import React from "react";
import "./nav.css";
import PropTypes from "prop-types"

const Navbar = ({ page, setPage }) => {
  console.log(typeof setPage)

  const Pages = ["Home", "About", "Services", "Contact"];

  return (
    <div className="nav-container">
      <ul>
        {Pages.map((Page, index) => (
          <li
            key={index}
            onClick={() => setPage(Page)}
            className={page === Page ? "active" : undefined}
          >
            {Page}
          </li>
        ))}
      </ul>
    </div>
  );
};

Navbar.propTypes = {

    page : PropTypes.string.isRequired,
    setPage : PropTypes.func.isRequired
}

export default Navbar;
