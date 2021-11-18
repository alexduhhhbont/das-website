import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/global.css'
import '../styles/parameters.css'
import Container from '@mui/material/Container';

export default function BaseLayout({children}) {
    return (
        <div className="baselayout">
            <Navbar/>
            <Container>
                <div className="content">
                    {children}
                </div>
            </Container>
            <Footer/>
        </div>
    )
}
