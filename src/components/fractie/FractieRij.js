import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../../styles/components/FractieRij.css'
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


export default function FractieRij() {
    const data = useStaticQuery(getFractie)
    const countFractie = data.allContentfulFractielid.nodes.length
    var gridItemWidth = 4

    if(countFractie == 3 || countFractie == 6 || countFractie == 9 || countFractie == 5 || countFractie == 7){
      gridItemWidth = 4;
    }

    if(countFractie == 2 || countFractie == 4 || countFractie == 8){
      gridItemWidth = 6;
    }

    if(countFractie == 1){
      gridItemWidth = 12;
    }

    return (
      <Grid container spacing={2}>
        {data.allContentfulFractielid.nodes.map((entry) => (
          <Grid item xs={12} md={gridItemWidth}>
            <Link className="fractionLink" to={"/party/faction/" + entry.slug}>
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
