import React, { useState, useEffect, useRef } from 'react'
import logo from '../images/logo_white.png'
import LoadingIcons from 'react-loading-icons'

export default function Vote() {
    const [shouldRedirect, setShouldRedirect] = React.useState(false);

    React.useEffect(() => {
        const id = setTimeout(() => {
          setShouldRedirect(true);
        }, 4000);
    
        return () => clearTimeout(id);
      }, []);
    
    if (shouldRedirect){
        window.location.href = 'https://elections.tue.nl/';
        return (
            <></>
        )
    } 
    return (
        <div style={{width: "100vw", height: "100vh", backgroundColor: "#3075bc", margin: "0 !important", padding: "0 !important", overflow: "hidden", position: "absolute", top: "0", left: "0"}}>
            <div style={{justifyContent: "center", display: "grid", padding: "90px"}}>
                <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center"}}>
                    <img src={logo} alt="logo" style={{height: "100px"}}/>
                </div>
                <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", marginTop: "120px"}}>
                    <LoadingIcons.Puff />
                </div>
                <h3 style={{color: "white", marginTop: "30px", textAlign: "center", fontSize: "24px", fontFamily: "Montserrat"}}>Redirecting you to vote...</h3>
            </div>
        </div>
    )
}
