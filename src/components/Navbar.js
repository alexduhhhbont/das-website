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
  
const AbsoluteMenuButton = styled(IconButton)`\
  z-index: 10;
  position: absolute;
  right: 15px;
  top: 30px;
  color: white;
`

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
    const data = useStaticQuery(getMenuItems)
    const [menuOpen, setMenuOpen] = React.useState(false)

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
        <div className="blue-background">
            <div className="container">
                <nav>
                    <Link to="/" style={{marginLeft: "15px"}}>
                        <img src={logo} alt="logo"/>
                    </Link>

                    <Hidden mdDown>
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
                            <Link className="dropdown-button" to="/">Elections 2021</Link>
                            <div className='dropdown-content blue-background'>
                                <Link className="nav-link" to="/elections/list">List</Link>
                                <Link className="nav-link" to="/elections/goals">Vision</Link>
                            </div>
                        </div> 
                        <Link className="nav-link" to="/housing">Housing</Link>
                        <Link className="nav-link" to="/student-teams">Student teams</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                    </Hidden>

                          {/* Mobile Navigation */}
                    <Hidden lgUp>
                        <AbsoluteMenuButton
                        edge="start"
                        color="primary"
                        onClick={toggleDrawer(true)}
                        aria-label="menu"
                        >
                        <MenuIcon />
                        </AbsoluteMenuButton>
                        <DrawerNavigation
                        anchor={"right"}
                        open={menuOpen}
                        onClose={toggleDrawer(false)}
                        >
                        <ListFullWidth>
                            <AbsoluteMenuButton onClick={toggleDrawer(false)}>
                            <CloseIcon style={{color: "#0E345F"}}/>
                            </AbsoluteMenuButton>
                            <ListItemContainerMobile>
                                <SectionTitle title="DAS"/>
                                <Spacer spacing={2}/> 
                                <MobileLink className="nav-link" to="/">Home</MobileLink>
                                <MobileLink className="nav-link" to="/contact">Contact</MobileLink>
                                <MobileLink className="nav-link" to="/housing">Housing</MobileLink>
                                <MobileLink className="nav-link" to="/student-teams">Student teams</MobileLink>
                                <MenuGroup>Elections 2021</MenuGroup>
                                <MobileLink className="nav-link" to="/elections/list">List 2022</MobileLink>
                                <MobileLink className="nav-link" to="/elections/goals">Vision 2022</MobileLink>  
                                <MobileLink className="nav-link" to="/elections/flyer">Flyer 2022</MobileLink> 
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