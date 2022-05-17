import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import Typography from '@mui/material/Typography';
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import Image from "gatsby-image"
import { Helmet } from "react-helmet"
import PublicationsGrid from '../components/publications/publicationGrid';

export default function publications() {
    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Publications - DAS Eindhoven</title>
            </Helmet>
            <Spacer spacing={4}/>
            <SectionTitle title="Publications"/>
            <Spacer spacing={2}/>
            <p style={{textAlign: "center"}}>With De Ambitieuze Student we often write down our vision or do research on certain topics. Below you find all those publications.</p>
            <Spacer spacing={2}/>
            <PublicationsGrid/>
            <Spacer spacing={4}/>
        </BaseLayout>
    )
}
