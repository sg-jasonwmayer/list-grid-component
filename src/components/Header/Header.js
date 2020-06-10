import React from "react";
import logo from './assets/logo.png';

import "./App.css";

const Header = () => {
    return (
        <div  >
          <img onScroll="https://www.truist.com/content/dam/truist/us/en/logos/truist-logo.png" />
          {/* <img src={logo} alt="Truist Bank Logo" width="200"/> */}
        </div>
    );
};

export default Header;
