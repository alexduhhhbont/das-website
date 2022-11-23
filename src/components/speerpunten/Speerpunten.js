import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import icon1 from '../../images/Education-visual-150x150.jpg'
import Typography from '@mui/material/Typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default function Speerpunten() {
    const data = useStaticQuery(getSpeerpunten)

    return (
        <Grid container spacing={2}>
            {data.allContentfulStandpunten.nodes.map((entry) => (
                <Grid item xs={12}>
                    <Grid container>
                        <Grid style={{justifyContent: "center", display: "flex"}} item xs={12} md={2}>
                            <Image component="img" fluid={entry.icon.fluid} style={{height: "150px", width: "150px"}} alt="icon"></Image>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <CardContent>
                                <Typography variant="h5">{entry.standpunt.standpunt}</Typography>
                                <Typography paragraph variant="body3">
                                  {entry.elaboration.elaboration}
                                </Typography>
                                <div className='blog_content'>
                                  {entry.achieved === null ? (<></>) : (
                                    documentToReactComponents(JSON.parse(entry.achieved.raw))
                                    )
                                  }
                                </div>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

const getSpeerpunten = graphql`
  query getSpeerpunten {
    allContentfulStandpunten(sort: { fields: [order], order: ASC }) {
        nodes {
          standpunt {
            standpunt
          }
          achieved{
            raw
          }
          order
          elaboration {
            elaboration
          }
          icon {
            fluid(maxWidth: 150, maxHeight: 150, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
  }
`
