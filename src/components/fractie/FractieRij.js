import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import fractie1 from '../../images/1.JoëlleBink.jpg'
import fractie2 from '../../images/25.SiebrenvanderWerf.jpg'
import fractie3 from '../../images/27.AlexdeBont.jpg'
import '../../styles/components/FractieRij.css'
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default function FractieRij() {
    const data = useStaticQuery(getFractie)

    return (
      <Grid container spacing={2}>
        {data.allContentfulFractielid.nodes.map((entry) => (
          <Grid item xs={12} md={4}>
            <Link className="fractionLink" to={"/party/fraction/" + entry.slug}>
              <Card style={{position: "relative"}} className="fractionCard">
                <div className='nameStroke'><span className='nameSide'>{entry.naam}</span><span className='nameCenter'>{entry.naam}</span><span className='nameSide'>{entry.naam}</span></div>
                  <Image component="img" fluid={entry.foto.fluid} style={{height: "500px", width: "100%"}} alt="fractieFoto"></Image>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    )
}


const getFractie = graphql`
  query getFractieLeden {
    allContentfulFractielid {
      nodes {
        email
        naam
        slug
        foto {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
