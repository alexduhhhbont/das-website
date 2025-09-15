import React from 'react'
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import BaseLayout from '../layouts/BaseLayout';
import {ContactForm} from '../components/forms/ContactForm';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';    
import InstagramIcon from '@mui/icons-material/Instagram';
import { Helmet } from "react-helmet"

export default function Contact() {
    return (
        <BaseLayout>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Contact - DAS Eindhoven</title>
            </Helmet>

            <Spacer spacing={4}/>

            <SectionTitle title="Contact"/>

            <Spacer spacing={2}/>

            <ContactForm />

            <Spacer spacing={4}/>

            <SectionTitle title="Email"/>
            <Spacer spacing={2}/>
            <Stack spacing={2} style={{textAlign: "center"}}>
                <Link underline="none" href="mailto:DAS@tue.nl" style={{color: "black"}}> style={{fontWeight: "600"}} DAS@tue.nl</Link> 
                {/* <Link underline="none" href="mailto:board@daseindhoven.nl" style={{color: "black"}}><span style={{fontWeight: "600"}}>Board: </span> board@daseindhoven.nl</Link> */}
            </Stack>
            <Spacer spacing={4}/> 

            <SectionTitle title="Phone"/>
            <Spacer spacing={2}/>
            <Stack spacing={2} style={{textAlign: "center"}}>
            <Link underline="none" href="tel:+31 6 36559452" style={{color: "black"}}>+31 6 36559452</Link>
            </Stack>
            <Spacer spacing={4}/>

            <SectionTitle title="Social Media"/>
            <Spacer spacing={2}/>
            <Stack spacing={2} style={{textAlign: "center"}}>
            <Link underline="none" href="https://www.instagram.com/daseindhoven/" style={{color: "black", display: "flex", justifyContent: "center", alignItems: "center"}}><InstagramIcon/>Instagram</Link>
            <Link underline="none" href="https://www.facebook.com/DASEindhoven" style={{color: "black", display: "flex", justifyContent: "center", alignItems: "center"}}><FacebookIcon/>FaceBook</Link>
            </Stack>
            <Spacer spacing={4}/>
            
        </BaseLayout>
    )
}
