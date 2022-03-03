import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    return(
        <nav className='nav1'>
            <Link to="/">Home Page</Link>
      </nav>
    )
}
export default Navbar;