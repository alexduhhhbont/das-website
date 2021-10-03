import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/logo_white.png'
 

export default function Navbar() {
    return (
        <div className="blue-background">
            <div className="container">
                <nav>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <div className="links">
                    <div className="dropdown">
                        <Link className="dropdown-button" to="/">Party</Link>
                        <div className='dropdown-content blue-background'>
                            <Link className="nav-link" to="/">Party</Link>
                            <Link className="nav-link" to="/">Priorities</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </div>
                    </div>
                    <Link className="nav-link" to="/">Party</Link>
                    <Link className="nav-link" to="/">Priorities</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </div>
                </nav>
            </div>
        </div>
    )
}
