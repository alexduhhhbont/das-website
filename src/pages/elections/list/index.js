import React from 'react'
import Spacer from '../../../components/spacer/Spacer';
import BaseLayout from '../../../layouts/BaseLayout';
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@mui/material/Grid';
import Image from "gatsby-image"
import SectionTitle from '../../../components/titles/SectionTitle';

export default function ElectionList() {

    const data = useStaticQuery(query)
    return (
        <BaseLayout>
            <Spacer spacing={2}/>
            <SectionTitle title="List 2022"/>
            <Spacer spacing={2}/>

            <Grid container>
            {data.allContentfulLijstPersoon.nodes.map((persoon) => (
              
                <Grid className="electionsListPerson" item xs={6} sm={3} md={2}>
                  <a href={"/elections/list/" + persoon.slug}>
                    <Image fluid={persoon.foto.fluid} style={{height: "200px"}}></Image>
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
