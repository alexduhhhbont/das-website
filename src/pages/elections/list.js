import React from 'react'
import Spacer from '../../components/spacer/Spacer';
import BaseLayout from '../../layouts/BaseLayout';
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@mui/material/Grid';
import Image from "gatsby-image"
import SectionTitle from '../../components/titles/SectionTitle';
import { Helmet } from "react-helmet"
import '../../styles/pages/homepage.css'

export default function ElectionList() {

    const nextYear = new Date().getFullYear() + 1;
    const listText = "List " + nextYear; 

    const data = useStaticQuery(query)
    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Elections List - DAS Eindhoven</title>
            </Helmet>
            <Spacer spacing={2}/>
            <SectionTitle title={listText}/>
            <Spacer spacing={2}/>

            <Grid container className="electionListGrid">
            {data.allContentfulLijstPersoon.nodes.map((persoon) => (
              
                <Grid className="electionsListPerson" item xs={6} sm={3} md={2}>
                  <a href={"/elections/list/" + persoon.slug}>
                    <Image fluid={persoon.foto.fluid} style={{height: "300px"}}></Image>
                  </a>
                </Grid>
              
          ))}
          </Grid>
        </BaseLayout>
    )
}

export const query = graphql`
query getLijst{
    allContentfulLijstPersoon(sort: { fields: [plek], order: ASC }) {
    nodes {
      naam
      foto {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      plek
      slug
    }
  }
}
`
