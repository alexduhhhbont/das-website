import React from 'react'
import '../../styles/components/BGImageSlant.css'


export default function SlantHero(props) {
    return (
        <div className={"background"} style={{ background: `url(${props.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="container">
            </div>
        </div>
    )
}
