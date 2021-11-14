import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';

const FractionMemberPage = ({ data }) => {
  const { naam, foto } = data.contentfulFractielid

  return (
    <BaseLayout>
        <Grid container>
            <Grid item xs={5}>
                <Image fluid={foto.fluid} style={{height: "600px"}}></Image>
            </Grid>
            <Grid item xs={7}>
                <Box p={6}>
                    <SectionTitle title={naam}/>
                    <Spacer spacing={2}/>
                </Box>
            </Grid>
        </Grid>
    </BaseLayout>
  )
}

export const query = graphql`
  query getFractionMemberPage($slug: String!) {
    contentfulFractielid(slug: { eq: $slug }) {
      naam
      slug
      email
      foto {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default FractionMemberPage

