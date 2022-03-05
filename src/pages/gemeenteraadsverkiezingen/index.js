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
import PartyGrid from '../../components/gemeenteraadsverkiezingen/party_grid'

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
                <p>14, 15 en 16 maart zijn de verkiezingen in Eindhoven. Om studenten te helpen met hun keuze hebben we 5 onderwerpen voorgelegd aan de partijen; studentenhuisvesting, Eindhoven als studentenstad, burgerparticipatie, duurzaamheid en mobiliteit.
                </p>
                </div>
            </BGImageSlant>
            <SectionTitle title="Thema's"/>
            <Spacer spacing={2}/>
            <ThemaSlider/>
            <Spacer spacing={8}/>
            <SectionTitle title="Partijen"/>
            <Spacer spacing={2}/>
            <PartyGrid/>
            <Spacer spacing={4}/>
        </BaseLayout>
    )
}
