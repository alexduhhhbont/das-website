import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import { makeStyles} from "@material-ui/core"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Typography, Button } from '@mui/material';
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

const FractionMemberPage = ({ data }) => {
  const { naam, foto, portfolio, email } = data.contentfulFractielid

  const classes = useStyles()

  return (
    <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fractielid: {naam}  - DAS Eindhoven</title>
            </Helmet>
        <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={5}>
                <Image fluid={foto.fluid} className={classes.image}></Image>
            </Grid>
            <Grid item xs={12} md={7}>
                <Box p={6}>
                    <SectionTitle title={naam}/>
                    <Spacer spacing={2}/>
                    {documentToReactComponents(JSON.parse(portfolio.raw))}
                    <Spacer spacing={2}/>
                    <Typography>Contact me:</Typography>
                    <Button variant="contained" href={"mailto:" + email}>{email}</Button>
                </Box>
            </Grid>
        </Grid>
    </BaseLayout>
  )
}

export const query = graphql`
  query getFractionMemberPage($slug: String!) {
    contentfulFractielid(slug: { eq: $slug }) {
      email
      naam
      slug
      foto {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      portfolio {
        raw
      }
    }
  }
`

export default FractionMemberPage

