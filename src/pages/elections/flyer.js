import React from 'react'
import BaseLayout from '../../layouts/BaseLayout';
import Spacer from '../../components/spacer/Spacer';
import { Helmet } from "react-helmet"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from '../../components/titles/SectionTitle';
import Button from '@mui/material/Button';

export default function Flyer({data}) {

    const {flyerAchterkant, title, flyerVoorkant, flyerPdf} = data.contentfulFlyerPagina

    return (
        <BaseLayout>

            <Helmet>
                <meta charSet="utf-8" />
                <title>{title} - DAS Eindhoven</title>
            </Helmet>

            <Spacer spacing={4}/>

            <SectionTitle title={title}/>

            <Spacer spacing={2}/>

            <div style={{display: "flex"}}>

            <Image style={{width: "50%"}} fluid={flyerAchterkant.fluid}></Image>

            <Image style={{width: "50%"}} fluid={flyerVoorkant.fluid}></Image>

            </div>

            <Spacer spacing={2}/>

            <div style={{width: "100%", textAlign: "center"}}>

            <Button variant="contained" target="_blank" href={flyerPdf.file.url} download>Download Flyer</Button>

            </div>
            <Spacer spacing={4}/>
            
        </BaseLayout>
    )
}

export const query = graphql`
query getFlyer{
    contentfulFlyerPagina {
        title
        flyerAchterkant {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }

        flyerVoorkant {
            fluid(quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }

        flyerPdf{
            file{
                url
            }
        }
      }
}
`
