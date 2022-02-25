import React from 'react'
import BaseLayout from '../../layouts/BaseLayout';
import Typography from '@mui/material/Typography';
import SectionTitle from '../../components/titles/SectionTitle';
import Spacer from '../../components/spacer/Spacer';
import Image from "gatsby-image"
import background from "../../images/home-header.jpg"
import { Helmet } from "react-helmet"
import ThemaSlider from '../../components/gemeenteraadsverkiezingen/theme_slider';
import BGImageSlant from '../../components/BGImageSlant';

export default function themas() {
    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gemeenteraadsverkiezingen Eindhoven</title>
            </Helmet>
            <BGImageSlant>
                <div className="heroText">
                <h1 className="heroTitle">Gemeenteraadsverkiezingen Eindhoven 2022</h1>
                </div>
            </BGImageSlant>
            <SectionTitle title="Thema's"/>
            <Spacer spacing={4}/>
            <ThemaSlider/>
            <Spacer spacing={4}/>
            <SectionTitle title="Partijen"/>
            <Spacer spacing={4}/>
        </BaseLayout>
    )
}
