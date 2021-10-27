import React from 'react'
import Spacer from '../../components/spacer/Spacer';
import BaseLayout from '../../layouts/BaseLayout';
import SectionTitle from '../../components/titles/SectionTitle';
import BoardRij from '../../components/fractie/BoardRij';

export default function board() {
    return (
        <BaseLayout>
            <Spacer spacing={4}/>
            <SectionTitle title="Current Board"/>
            <Spacer spacing={2}/>
            <BoardRij/>
            <Spacer spacing={4}/>
        </BaseLayout>
    )
}
