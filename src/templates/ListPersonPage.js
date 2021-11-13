import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SectionTitle from '../components/titles/SectionTitle';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import Spacer from '../components/spacer/Spacer';

const ListPersonPage = ({ data }) => {
  const { naam, foto, omschrijving, plek, instagramButton,instagramLink,linkedinButton,linkedinLink } = data.contentfulLijstPersoon

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
                    <h4>#{plek}</h4>
                    <Spacer spacing={0.5}/>
                    {omschrijving.omschrijving}
                
                    <Spacer spacing={2}/>
                    <h4>Follow me</h4>
                    <Spacer spacing={0.5}/>
                    <Stack direction="row" spacing={2}>
                    {instagramButton ? (
                    <Button variant="outlined" href={instagramLink} startIcon={<InstagramIcon />}>
                        Instagram
                    </Button>
                    ) : (
                    ""
                    )}
                    {linkedinButton ? (
                    <Button variant="outlined" href={linkedinLink} startIcon={<LinkedInIcon />}>
                        Linkedin
                    </Button>
                    ) : (
                        ""
                    )}
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    </BaseLayout>
  )
}

export const query = graphql`
  query getListPersonPage($slug: String!) {
    contentfulLijstPersoon(slug: { eq: $slug }) {
      naam
      slug
      plek
      omschrijving {
        omschrijving
      }
      instagramButton
      instagramLink
      linkedinButton
      linkedinLink
      foto {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default ListPersonPage

