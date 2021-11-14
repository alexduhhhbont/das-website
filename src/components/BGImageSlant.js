import React from 'react'
import bgimage from "../images/home-header.jpg"
import '../styles/components/BGImageSlant.css'
import { withPrefix } from 'gatsby';


export default function BGImageSlant({children}, props) {
    return (
        props.elections ? (
        <div className={"background"} style={{ background: `url(${bgimage})`, backgroundSize: "cover" }}>
            <div className="container">
                {children}
            </div>
        </div>
        ) : (
        <div className={"background-elections"} style={{ background: `rgba(149, 182, 210, 1)`, backgroundSize: "cover" }}>
            <div className="container">
                {children}
            </div>
        </div>
        )
    )
}
