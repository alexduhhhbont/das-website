import React from 'react'
import bgimage from "../images/Atlas_TUe_overzicht_1.jpg"
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
