import React from "react";
import './index.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            {/* toggleButton is for responsive views, navbar will turn into hamburger at certain screen width */}
            {/* <div className='toggleButton'>
                <button> </button>
            </div> */}
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                <Link to='/viewbuilds'>Builds</Link>
                <Link to='/profile'>Profile</Link>
            </div>
        </div>
    )
};

export default Navbar;