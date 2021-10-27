import React from 'react'
import Spacer from '../../components/spacer/Spacer';
import BaseLayout from '../../layouts/BaseLayout';
import SectionTitle from '../../components/titles/SectionTitle';
import AssociationsGrid from '../../components/fractie/AssociationsGrid'

export default function associations() {
    return (
        <BaseLayout>
            <Spacer spacing={4}/>
            <SectionTitle title="Associations"/>
            <Spacer spacing={2}/>
            <p style={{textAlign: "center"}}>Never gonna give you up, never gonna let you down, never gonna turn around and desert you. Never gonna give you up, never gonna let you down, never gonna turn around and desert you. Never gonna give you up, never gonna let you down, never gonna turn around and desert you. Never gonna give you up, never gonna let you down, never gonna turn around and desert you.</p>
            <Spacer spacing={2}/>
            <AssociationsGrid/>
            <Spacer spacing={4}/>
        </BaseLayout>
    )
}
