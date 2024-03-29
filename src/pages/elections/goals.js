import React from 'react'
import BaseLayout from '../../layouts/BaseLayout';
import Speerpunten from '../../components/speerpunten/Speerpunten';
import SectionTitle from '../../components/titles/SectionTitle';
import Spacer from '../../components/spacer/Spacer';
import { Helmet } from "react-helmet"

export default function goals() {
    return (
        <BaseLayout>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Vision of DAS - DAS Eindhoven</title>
            </Helmet>

            <Spacer spacing={4}/>

            <SectionTitle title="Vision of DAS"/>

            <Spacer spacing={2}/> 

            <Speerpunten />

            <Spacer spacing={4}/>
            
        </BaseLayout>
    )
}
