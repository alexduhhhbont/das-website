import React from 'react'
import Spacer from '../../../components/spacer/Spacer';
import BaseLayout from '../../../layouts/BaseLayout';
import SectionTitle from '../../../components/titles/SectionTitle';
import FractieRij from '../../../components/fractie/FractieRij';
import Typography from '@mui/material/Typography';
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const FractionPage = ({data}) => {

    const query = useStaticQuery(getOudeFracties )
    const fracties = query.allContentfulOudeFractie.nodes
    console.log(fracties)

    /* code for previous fractions
            {fracties.map((entry) => (
                <>
                    <SectionTitle title={entry.jaar}/>
                    <Spacer spacing={2}/>
                    <div style={{width: "100%"}}>
                        <Image component="img" fluid={entry.foto.fluid} style={{height: "700px", width: "100%", objectFit: "contain"}} alt="fraction"></Image>
                    </div>
                    <Typography variant='body1' align="center">{entry.leden}</Typography>

                    <Spacer spacing={4}/>
                </>
            ))}

    */

    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Faction - DAS Eindhoven</title>
            </Helmet>
            <Spacer spacing={4}/>
            <SectionTitle title="Current Faction"/>
            <Spacer spacing={2}/>
            <p style={{textAlign: "center"}}>The voice of the ambitious student is currently represented by the following students in the university council. If you want to contact one of them, you can click on their picture to find their email.</p>
            <Spacer spacing={2}/>
            <FractieRij/>
            <Spacer spacing={4}/>

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
