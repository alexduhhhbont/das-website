import React from 'react'
import bgimage from "../images/home-header.jpg"
import '../styles/components/BGImageSlant.css'
import { withPrefix } from 'gatsby';


export default function BGImageSlant({children}) {
    return (
        <div className="background" style={{ backgroundImage: `url(${bgimage})` }}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}
