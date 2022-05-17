import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import Typography from '@mui/material/Typography';
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import Image from "gatsby-image"
import { Helmet } from "react-helmet"

export default function viewpoints() {
    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Viewpoints - DAS Eindhoven</title>
            </Helmet>
            <Spacer spacing={4}/>
            <SectionTitle title="Comming Soon!"/>
            <Spacer spacing={16}/>
        </BaseLayout>
    )
}
