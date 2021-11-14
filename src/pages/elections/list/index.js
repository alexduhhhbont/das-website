import React from 'react'
import Spacer from '../../../components/spacer/Spacer';
import BaseLayout from '../../../layouts/BaseLayout';
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@mui/material/Grid';
import Image from "gatsby-image"

export default function ElectionList() {

    const data = useStaticQuery(query)
    return (
        <BaseLayout>
            <Grid container>
            {data.allContentfulLijstPersoon.nodes.map((persoon) => (
              
                <Grid className="electionsListPerson" item xs={2}>
                  <a href={"/elections/list/" + persoon.slug}>
                    <p style={{position: "absolute", marginLeft: "15px", zIndex: "2", fontSize: "48px", color: "white"}}>{persoon.plek}</p>
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
