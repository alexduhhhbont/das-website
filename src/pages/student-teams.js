import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { graphql, Link } from "gatsby";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Image from "gatsby-image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box } from '@mui/system';

export default function StudentTeams({data}) {
    var teams = data.allContentfulStudentTeam.nodes

    return (
        <BaseLayout>
            <Spacer spacing={4}/>
            <SectionTitle title="Student team vacancies"/>
            <Spacer spacing={2}/>    
            <Typography paragraph variant="body3">DAS promotes students to develop themselves alongside their studies. One way to do this, while at the same time contributing to the development of innovations, is to join a student team! Underneath, you can find an overview of vacancies at various student teams. Feel free to reach out to them for more information.</Typography>

            <Grid container spacing={2}>
            {teams.map((entry) => (
                <Grid item xs={12}>
                    <Link to={"/student-teams/" + entry.slug}>
                        <Card>
                            <Grid container spacing={2}>
                                <Grid item xs={6} style={{padding: "30px"}}>
                                    <Typography variant="h5">{entry.name}   </Typography>
                                    <Typography variant="h6">Vacancies   </Typography>
                                    <Box style={{marginLeft: "30px"}}>
                                    {documentToReactComponents(JSON.parse(entry.vacanciesList.raw))}
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Image fluid={entry.image.fluid} ></Image>
                                </Grid>
                            </Grid>
                        </Card>
                    </Link>
                </Grid>
            ))}
            </Grid>
        </BaseLayout>
    )
}

export const query = graphql`
  query getStudentTeams {
    allContentfulStudentTeam {
      nodes {
        slug
        name
        vacanciesList {
            raw
          }
        image {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
      }
    }
  }
`