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
                <title>About - DAS Eindhoven</title>
            </Helmet>
            <Spacer spacing={4}/>
            <SectionTitle title="Publications"/>
            <Spacer spacing={4}/>
            <PublicationsGrid/>
            <Spacer spacing={4}/>
        </BaseLayout>
    )
}
