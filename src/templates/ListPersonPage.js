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
import Hidden from '@mui/material/Hidden';
import { makeStyles} from "@material-ui/core"
import { Helmet } from "react-helmet"

const useStyles = makeStyles({
  gridContainer: {
    "@media (max-width: 900px)": {
      position: "relative",
      width: "100vw !important",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
    }
  },
  image: {
    height: "600px",
    "@media (max-width: 900px)": {
      height: "350px"
    }
  }
})

const ListPersonPage = ({ data }) => {
  const { naam, foto, omschrijving, plek, instagramButton,instagramLink,linkedinButton,linkedinLink } = data.contentfulLijstPersoon

  const classes = useStyles()

  return (
    <BaseLayout>
          <Helmet>
                <meta charSet="utf-8" />
                <title>List: {naam} - DAS Eindhoven</title>
            </Helmet>
        <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={5}>
                <Image fluid={foto.fluid} className={classes.image}></Image>
            </Grid>
            <Grid item xs={12} md={7}>
                <Box p={{xs: 4, md: 6}}>
                    <SectionTitle title={naam}/>
                    <Spacer spacing={2}/>
                    <h4>#{plek}</h4>
                    <Spacer spacing={0.5}/>
                    {omschrijving.omschrijving}
                
                    <Spacer spacing={2}/>
                    {instagramButton || linkedinButton ? (
                      <>
                        <h4>Follow me</h4>
                        <Spacer spacing={0.5}/>
                      </>
                    ) : ("")}
                    <Hidden mdDown>
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
                    </Hidden>
                    <Hidden lgUp>
                    <Stack spacing={2}>
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
                    </Hidden>
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
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default ListPersonPage

