import React from 'react'
import {Link} from 'gatsby'
 

export default function Navbar() {
    return (
        <div className="blue-background">
            <div className="container">
                <nav>
                
                <h1>DAS Eindhoven</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/">Party</Link>
                    <Link to="/">University Council</Link>
                    <Link to="/">Elections 2021</Link>
                    <Link to="/">Housing</Link>
                    <Link to="/">Student Teams</Link>
                    <Link to="/">Contact</Link>
                </div>
                </nav>
            </div>
        </div>
    )
}
