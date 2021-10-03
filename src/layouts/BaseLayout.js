import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/global.css'
import '../styles/parameters.css'

export default function BaseLayout({children}) {
    return (
        <div className="baselayout">
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}
