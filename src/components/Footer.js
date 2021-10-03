import React from 'react'
import {Link} from 'gatsby'
 

export default function Footer() {
    return (
        <div className="darkblue-background">
            <div className="container footer">
                <p>Copyright {new Date().getFullYear()} DAS Eindhoven</p>
            </div>
        </div>
    )
}
