import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const isLoggedIn = false;
  return (
    <div>
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <a className="neonText" style={{ fontSize: '40px', marging: '20px', padding: '30px' }} href="#!">
            FLY - HIGH
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" style={{ marginLeft: '500px' }} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li class="nav-item">
                <Link class="nav-link" to='/CheckIn'><h3>CheckIn</h3></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Deals">
                  <h3>Deals </h3>
                </Link>
              </li>


              <li className="nav-item">
                {isLoggedIn ?
                  <Link className="nav-link" to="/Login">
                    <h3>Login</h3>
                  </Link> :
                  <Link className="nav-link" to="/Login" onClick={() => localStorage.removeItem("email")}>
                    <h3>login</h3>
                  </Link>}
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  <h3>About</h3>
                </Link>

              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    </div>
  )
};

export default Header;