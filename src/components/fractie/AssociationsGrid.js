import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
                    <img src={entry.logo.file.url} style={{height: "150px", width: "150px", objectFit: "contain"}}/>
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
          file {
            url
          }

        }
      }
    }
  }
`
