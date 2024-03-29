import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import Typography from '@mui/material/Typography';
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import Image from "gatsby-image"
import { Helmet } from "react-helmet"

export default function fraction() {
    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About - DAS Eindhoven</title>
            </Helmet>
            <Spacer spacing={4}/>
            <SectionTitle title="About DAS"/>
            <Spacer spacing={4}/>
            <Typography>DAS consists of:</Typography>
            <Typography>Our board, who take care of managing DAS and are our general point of contact;</Typography>
            <Typography>Our faction, who take seat in the University Council of the TU/e and deal with policy related matters;</Typography>
            <Typography>Our adherants, who provide us with valuable input about TU/e related problems and policy.</Typography>
            
            <Spacer spacing={16}/>
        </BaseLayout>
    )
}
