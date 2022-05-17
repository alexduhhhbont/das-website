import React from 'react'
import BaseLayout from '../../layouts/BaseLayout';
import { Helmet } from "react-helmet"
import JoinDasGrid from '../../components/joinDAS/joinDasGrid';
import Spacer from '../../components/spacer/Spacer';
import SectionTitle from '../../components/titles/SectionTitle';

export default function joinDAS() {
    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Join DAS - DAS Eindhoven</title>
            </Helmet>

            <Spacer spacing={6}/> 

            <SectionTitle title="Join DAS"/>

            <Spacer spacing={2}/> 

            <p style={{textAlign: "center"}}>Are you interessted in De Ambitieuze Student and want to do more? Click on one of the cards below and find out what DAS can offer you! If you have any questions you can always contact <a style={{fontWeight: "500"}} href='mailto:fraction@daseindhoven.nl'>fraction@daseindhoven.nl</a></p>

            <Spacer spacing={2}/> 

            <JoinDasGrid>

            </JoinDasGrid>

            <Spacer spacing={6}/> 
            
        </BaseLayout>
    )
}
