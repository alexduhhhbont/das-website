import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/logo_white.png'
import { useStaticQuery, graphql } from "gatsby"

export default function Navbar() {
    const data = useStaticQuery(getMenuItems)

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
                                <Link className="nav-link" to="/party/associations">Associations</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link className="dropdown-button" to="/elections">Elections 2022</Link>
                            <div className='dropdown-content blue-background'>
                                <Link className="nav-link" to="/elections/list">List</Link>
                                <Link className="nav-link" to="/elections/goals">Goals</Link>
                            </div>
                        </div> 
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

const getMenuItems = graphql`
  query getMenuItems {
    allContentfulMenuItem {
        nodes {
          slug
          title
          contentfulchildren {
            slug
            title
          }
        }
      }
  }
`