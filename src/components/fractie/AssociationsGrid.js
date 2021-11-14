import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import fractie1 from '../../images/1.JoëlleBink.jpg'
import '../../styles/components/AssociationGrid.css'
import Spacer from '../spacer/Spacer';
import Img from "gatsby-image"
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"

export default function AssociationsGrid() {
    const query = useStaticQuery(getAssociations)
    const associations = query.allContentfulAssociation.nodes

    return (
        <Grid container spacing={2}>
          {associations.map((entry) => (
            <Grid item xs={3}>
              <a className="associationLink" href={entry.url} target="_blank">
                    <Img objectFit="contain" fluid={entry.logo.fluid} alt="association" style={{height: "100%", width: "100%", objectFit: "contain"}}></Img>
              </a>
            </Grid>
          ))}
        </Grid>
    )
}

const getAssociations = graphql`
  query getAssociations {
    allContentfulAssociation {
      nodes {
        naam
        url
        logo {
          fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
