import React from 'react'
import Spacer from '../../components/spacer/Spacer';
import BaseLayout from '../../layouts/BaseLayout';
import SectionTitle from '../../components/titles/SectionTitle';
import FractieRij from '../../components/fractie/FractieRij';
import Fraction1 from '../../images/DSC05713.jpg'
import Fraction2 from '../../images/DSC05804.jpg'
import Typography from '@mui/material/Typography';

export default function fraction() {
    return (
        <BaseLayout>
            <Spacer spacing={4}/>
            <SectionTitle title="Current Fraction"/>
            <Spacer spacing={2}/>
            <FractieRij/>
            <Spacer spacing={4}/>
            <SectionTitle title="Fraction 2021-1"/>
            <Spacer spacing={2}/>
            <div style={{width: "100%"}}>
            <img style={{width: "100%", height: "75vh", objectFit: "cover"}} src={Fraction1} alt='fraction'/>
            </div>
            <Typography variant='body1' align="center">Imke Bloemen, Joëlle Bink, Bram Smolenaars</Typography>

            <Spacer spacing={4}/>

            <SectionTitle title="Fraction 2020-2"/>
            <Spacer spacing={2}/>
            <div style={{width: "100%"}}>
            <img style={{width: "100%", height: "75vh", objectFit: "cover"}} src={Fraction2} alt='fraction'/>
            </div>
            <Typography variant='body1' align="center">Aya Bergkamp, Kelly Franssen, Bram Smolenaars</Typography>

            <Spacer spacing={4}/>

            <SectionTitle title="Fraction 2020-1"/>
            <Spacer spacing={2}/>
            <div style={{width: "100%"}}>
            <img style={{width: "100%", height: "75vh", objectFit: "cover"}} src={Fraction2} alt='fraction'/>
            </div>
            <Typography variant='body1' align="center">Aya Bergkamp, Kelly Franssen, Rick Stolk</Typography>

            <Spacer spacing={4}/>

            <SectionTitle title="Fraction 2019"/>
            <Spacer spacing={2}/>
            <div style={{width: "100%"}}>
            <img style={{width: "100%", height: "75vh", objectFit: "cover"}} src={Fraction2} alt='fraction'/>
            </div>
            <Typography variant='body1' align="center">Charlot, Mathijs</Typography>

        </BaseLayout>
    )
}
