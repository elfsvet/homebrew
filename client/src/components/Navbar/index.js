import React, { useState, useEffect } from "react";
import "./index.css";
import HamburgerIcon from "@mui/icons-material/ReorderSharp";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);


  return (
    <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
      {/* toggleButton is for responsive views, navbar will turn into hamburger at certain screen width */}
      <div className="toggleButton">
        <button onClick={() => { setExpandNavbar((prev) => !prev)}}>
          <HamburgerIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/newbuild">New Build</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}

export default Navbar;
