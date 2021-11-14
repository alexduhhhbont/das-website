import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/logo_white.png'
 

export default function Footer() {
    return (
        <div className="darkblue-background">
            <div className="container footer">
                <Link to="/">
                        <img src={logo} alt="logo"/>
                </Link>
                <p style={{marginTop: "30px"}}>Copyright {new Date().getFullYear()} DAS Eindhoven</p>
            </div>
        </div>
    )
}
