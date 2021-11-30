import React from 'react'
import Spacer from '../../components/spacer/Spacer';
import BaseLayout from '../../layouts/BaseLayout';
import SectionTitle from '../../components/titles/SectionTitle';
import BoardRij from '../../components/fractie/BoardRij';
import { Helmet } from "react-helmet"

export default function board() {
    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Board - DAS Eindhoven</title>
            </Helmet>
            <Spacer spacing={4}/>
            <SectionTitle title="Current Board"/>
            <Spacer spacing={2}/>
            <BoardRij/>
            <Spacer spacing={4}/>
        </BaseLayout>
    )
}
