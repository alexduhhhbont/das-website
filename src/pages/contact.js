import React from 'react'
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import BaseLayout from '../layouts/BaseLayout';

export default function contact() {
    return (
        <BaseLayout>

            <Spacer spacing={4}/>

            <SectionTitle title="Contact"/>

            <Spacer spacing={4}/>
            
        </BaseLayout>
    )
}
