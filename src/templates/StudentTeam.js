import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import { makeStyles} from "@material-ui/core"
import { Typography } from '@mui/material';
import { Description } from '@material-ui/icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from "react-helmet"

const StudentTeamPage = ({ data }) => {
  const { name, image, description, vacanciesList, url } = data.contentfulStudentTeam

  return (
    <BaseLayout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{name} - DAS Eindhoven</title>
        </Helmet>
        <Spacer spacing={4}/>
          <SectionTitle title={name}/>
        <Spacer spacing={4}/>
        <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                  <Typography variant="h5">Vacancies</Typography>
                  {documentToReactComponents(JSON.parse(vacanciesList.raw))}
                  <OutboundLink target="_blank" style={{background: "#0E345F", color: "white", padding: "8px 15px", borderRadius: "5px", margin: "15px 0px", display: "inline-block"}} href={url}>Apply now!</OutboundLink>
              </Grid>
              <Grid item xs={12} md={6}>
                  <Image fluid={image.fluid} ></Image>
              </Grid>
          </Grid>
          <Spacer spacing={2}/>
          <Typography variant="h6">About {name}</Typography>
        <Typography paragraph>{description.description}</Typography>
        <Spacer spacing={4}/>
    </BaseLayout>
  )
}

export const query = graphql`
  query getStudentTeam($slug: String!) {
    contentfulStudentTeam(slug: { eq: $slug }) {
      name
      slug
      url
      description{
        description
      }
      
      vacanciesList {
        raw
      }
      image {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default StudentTeamPage

