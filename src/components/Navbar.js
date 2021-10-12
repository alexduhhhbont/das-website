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
                        <Link className="dropdown-button" to="/about">About DAS</Link>
                        <div className='dropdown-content blue-background'>
                            <Link className="nav-link" to="/party/fraction">Fraction</Link>
                            <Link className="nav-link" to="/party/board">Board</Link>
                            <Link className="nav-link" to="/party/vision">Vision</Link>
                            <Link className="nav-link" to="/party/associations">Associations</Link>
                        </div>
                    </div>
                    <Link className="nav-link" to="/goals">Vision</Link>
                    <Link className="nav-link" to="/student-teams">Student Teams</Link>
                    <Link className="nav-link" to="/housing">Housing</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </div>
                </nav>
            </div>
        </div>
    )
}
