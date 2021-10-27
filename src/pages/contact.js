import React from 'react'
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import BaseLayout from '../layouts/BaseLayout';

export default function contact() {
    return (
        <BaseLayout>

            <Spacer spacing={4}/>

            <SectionTitle title="Contact"/>

            <Spacer spacing={2}/>

            <h3>Email</h3>
            <a href="mailto:fraction@daseindhoven.nl"><span>Fraction: </span> fraction@daseindhoven.nl</a>
            <a href="mailto:board@daseindhoven.nl"><span>Board: </span> board@daseindhoven.nl</a>
            <Spacer spacing={2}/>

            <h3>Phone</h3>
            <a href="tel:0641774267">06-41774267</a>

            <Spacer spacing={2}/>

            <h3>Social Media</h3>
            <a href="tel:0641774267">Instagram</a>
            <a href="tel:0641774267">FaceBook</a>

            <Spacer spacing={4}/>
            
        </BaseLayout>
    )
}
