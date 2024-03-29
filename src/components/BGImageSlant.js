import React from 'react'
import bgimage from "../images/home-header.jpg"
import '../styles/components/BGImageSlant.css'
import { Link, withPrefix } from 'gatsby';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function BGImageSlant({children, backgroundImage, elections}, props) {
    return (
        !elections ? (
        <div className={"background"} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className='social_media'>
                    <Link className='social_media__icon' to='https://www.instagram.com/daseindhoven/'><InstagramIcon color="primary"/></Link>
                    <Link className='social_media__icon' to='https://www.facebook.com/DASEindhoven'><FacebookIcon color="primary"/></Link>
                </div>
                {children}
            </div>
        </div>
        ) : (
        <div className={"background-elections"} style={{ backgroundImage: `url(${backgroundImage}), linear-gradient(0deg, rgba(149, 182, 210, 0.9), rgba(48, 117, 188, 1))`, backgroundSize: "cover" }}>
            <div className="container">
                {children}
            </div>
        </div>
        )
    )
}
