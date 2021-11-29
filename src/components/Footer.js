import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/logo_white.png'
import { makeStyles} from "@material-ui/core"
 
const useStyles = makeStyles({
    container: {
      marginLeft: "15px",
      color: "white",
      padding: "90px 0px",
      "@media (min-width: 900px)": {
        margin: "0 auto",
        maxWidth: "1080px"
      }
    },
  })

export default function Footer() {
    const classes = useStyles()

    return (
        <div className="darkblue-background">
            <div className={classes.container}>
                <Link to="/">
                        <img src={logo} alt="logo"/>
                </Link>
                <p style={{marginTop: "30px"}}>Copyright {new Date().getFullYear()} DAS Eindhoven</p>
            </div>
        </div>
    )
}
