import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/logo_white.png'
import { useStaticQuery, graphql } from "gatsby"
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import styled from "styled-components"
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
  
const ListItemContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`

const MobileLink = styled(Link)`
  margin-bottom: 15px;
  color: #0E345F;
  font-weight: 400;
`

const MenuGroup = styled(Typography)`
  font-weight: 600;
  color: #0E345F;
  margin-bottom: 8px;
  margin-top: 15px;
`

const ListFullWidth = styled(List)`
  width: 100vw;
`

const DrawerNavigation = styled(Drawer)`
  width: 100%;
`

export default function Navbar() {
    const [menuOpen, setMenuOpen] = React.useState(false)

    const data = useStaticQuery(getVerkiezingenBool)
    const verkiezingen = data.allContentfulHomePagina.nodes.verkiezingsTijd

    const toggleDrawer = (open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return
        }
    
        setMenuOpen(open)
      }

    return (
        <>
        <div className='pre-navigation'>
          <div className='container'>
            <div className='links'>
              <Link className='pre-navigation__link' to='/join-das'>Join DAS</Link>
              <Link className='pre-navigation__link' to='/contact'>Contact</Link>
            </div>
          </div>
        </div>
        <div className="blue-background">
            <div className="container">
                <nav>
                    <Link className='logo_container' to="/">
                        <img src={logo} alt="logo" className='logo'/>
                    </Link>

                    <Hidden mdDown>
                    <div className="links">
                        
                        <Link className="nav-link" to="/">Home</Link>
                        {verkiezingen ? (
                          <div className="dropdown">
                              <Link className="dropdown-button" to="/">Elections</Link>
                              <div className='dropdown-content blue-background'>
                                  <Link className="dropdown__nav-link" to="/elections/list">List</Link>
                                  <Link className="dropdown__nav-link" to="/elections/goals">Vision</Link>
                              </div>
                          </div>
                        ): ("")}
                        <Link className="nav-link" to="/updates">Updates</Link>
                        <Link className="nav-link" to="/viewpoints">Viewpoints</Link>
                        <div className="dropdown">
                            <Link className="dropdown-button" to="#">About</Link>
                            <div className='dropdown-content blue-background'>
                                <Link className="dropdown__nav-link" to="/party/fraction">Fraction</Link>
                                <Link className="dropdown__nav-link" to="/party/board">Board</Link>
                                <Link className="dropdown__nav-link" to="/party/associations">Associations</Link>
                            </div>
                        </div>
                        <Link className="nav-link" to="/publications">Publications</Link>
                        <Link className="nav-link" to="https://intranet.tue.nl/en/university/right-of-say/university-council/">University Council</Link>
                    </div>
                    </Hidden>

                          {/* Mobile Navigation */}
                    <Hidden lgUp>
                        <IconButton
                        edge="start"
                        color="primary"
                        onClick={toggleDrawer(true)}
                        aria-label="menu"
                        style={{position: "absolute", zIndex: "999", top: "30px", right: "15px", color: "white"}}
                        >
                        <MenuIcon />
                        </IconButton>
                        <DrawerNavigation
                        anchor={"right"}
                        open={menuOpen}
                        onClose={toggleDrawer(false)}
                        >
                        <ListFullWidth>
                            <IconButton style={{position: "absolute", zIndex: "999", top: "30px", right: "15px"}} onClick={toggleDrawer(false)}>
                            <CloseIcon style={{color: "#0E345F"}}/>
                            </IconButton>
                            <ListItemContainerMobile>
                                <SectionTitle title="DAS"/>
                                <Spacer spacing={2}/> 
                                <MobileLink className="nav-link" to="/">Home</MobileLink>
                                <MobileLink className="nav-link" to="/updates">Updates</MobileLink>
                                <MobileLink className="nav-link" to="/publications">Publications</MobileLink>
                                <MobileLink className="nav-link" to="/gemeenteraadsverkiezingen">Municipal Elections</MobileLink>
                                <MobileLink className="nav-link" to="/contact">Contact</MobileLink>
                                <MobileLink className="nav-link" to="/housing">Housing</MobileLink>
                                <MobileLink className="nav-link" to="/student-teams">Student teams</MobileLink>
                                {verkiezingen ? (
                                  <>
                                    <MenuGroup>Elections</MenuGroup>
                                    <MobileLink className="nav-link" to="/elections/list">List</MobileLink>
                                    <MobileLink className="nav-link" to="/elections/goals">Vision</MobileLink>  
                                    <MobileLink className="nav-link" to="/elections/flyer">Flyer</MobileLink> 
                                  </>
                                ) : (<></>)}
                                <MenuGroup>Party</MenuGroup>
                                <MobileLink className="nav-link" to="/party/fraction">Fraction</MobileLink>
                                <MobileLink className="nav-link" to="/party/board">Board</MobileLink>
                                <MobileLink className="nav-link" to="/party/associations">Associations</MobileLink>                            
                            </ListItemContainerMobile>
                        </ListFullWidth>
                        </DrawerNavigation>
                    </Hidden>
                </nav>
            </div>
        </div>
        </>
    )
}

const getVerkiezingenBool = graphql`
  query getVerkiezingBool {
    allContentfulHomePagina {
      nodes {
        verkiezingsTijd
      }
    }
  }
`