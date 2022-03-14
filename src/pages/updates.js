import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import NewsGrid from '../components/updates/updates_grid';

export default function Updates() {
    return (
        <BaseLayout>
            <Spacer spacing={6}/>
            <SectionTitle title="Updates"/>
            <Spacer spacing={2}/>
            <NewsGrid/>
            <Spacer spacing={6}/>
        </BaseLayout>
    )
}
