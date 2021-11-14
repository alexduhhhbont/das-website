import React from 'react'
import Spacer from '../../../components/spacer/Spacer';
import BaseLayout from '../../../layouts/BaseLayout';
import SectionTitle from '../../../components/titles/SectionTitle';
import FractieRij from '../../../components/fractie/FractieRij';
import Typography from '@mui/material/Typography';
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const FractionPage = ({data}) => {

    const query = useStaticQuery(getOudeFracties )
    const fracties = query.allContentfulOudeFractie.nodes
    console.log(fracties)

    return (
        <BaseLayout>
            <Spacer spacing={4}/>
            <SectionTitle title="Current Fraction"/>
            <Spacer spacing={2}/>
            <FractieRij/>
            <Spacer spacing={4}/>

            {fracties.map((entry) => (
                <>
                    <SectionTitle title={entry.jaar}/>
                    <Spacer spacing={2}/>
                    <div style={{width: "100%"}}>
                        <Image component="img" fluid={entry.foto.fluid} style={{height: "100%", width: "100%", objectFit: "cover"}} alt="fraction"></Image>
                    </div>
                    <Typography variant='body1' align="center">{entry.leden}</Typography>

                    <Spacer spacing={4}/>
                </>
            ))}

        </BaseLayout>
    )
}

const getOudeFracties = graphql`
  query getOudFractie {
    allContentfulOudeFractie {
      nodes {
        jaar
        leden
        foto {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default FractionPage;
