import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import SectionTitle from '../components/titles/SectionTitle';
import Spacer from '../components/spacer/Spacer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { graphql, Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Image from 'gatsby-image';
import { Helmet } from "react-helmet"

export default function Housing({data}) {
    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Housing - DAS Eindhoven</title>
            </Helmet>
            <Spacer spacing={4}/>
            <SectionTitle title="Housing"/>
            <Spacer spacing={2}/>    

            <Typography paragraph variant="body3">Aside from the University Council, DAS is also actively involved in the municipality and represents the student’s voice in the ongoing discussions on student housing in Eindhoven.</Typography>
            <Typography variant="h5">Legalisation Campaign</Typography>
            <Typography paragraph variant="body3">In November 2019 the municipality voted for new regulations for the rental of (student)rooms and shared living situations. This has effects on new shared living situations, as well as on student houses that already exist.</Typography>
            <Typography paragraph variant="body3">Follow the step-by step guide to check whether your house is legal. </Typography>
            <Button target="_blank" href={data.contentfulHousingPage.housingPdf.file.url} download>Step by step guide legal housing (ENG)</Button>
            <Button target="_blank" href={data.contentfulHousingPage.housingPdfDutch.file.url} download>Stappenplan legalisering studentenhuisvesting (NL)</Button>
            <Spacer spacing={2}/>  
            <Typography variant="h5">Huurteam Eindhoven</Typography>
            <Typography paragraph variant="body3">Are you currently renting a room, studio, appartment or house in Eindhoven and are you experiencing problems with your space, the house owner or the housing costs? Then Huurteam Eindhoven may be able to help you with your problems. Together with you, they can look for a fitting solution. They offer personal advice, communication with the house owner and other varying services to help you with your housing problems. This is offered for free! You can contact the huurteam for more information:</Typography>
            <Typography paragraph variant="body3">Webiste: <OutboundLink href="https://huurteameindhoven.nl/en/">www.huurteameindhoven.nl</OutboundLink></Typography>
            <Typography paragraph variant="body3">Email: <OutboundLink href="mailto:info@huurteameindhoven.nl">info@huurteameindhoven.nl</OutboundLink></Typography>
            <Spacer spacing={2}/>  
            <Typography variant="h5">Housing Committee</Typography>
            <Image fluid={data.contentfulHousingPage.housingCommitteePhoto.fluid} ></Image>
            <Spacer spacing={4}/>
        </BaseLayout>
    )
}

export const query = graphql`
query getHousingPage {
    contentfulHousingPage {
        housingPdf {
          file {
            url
          }
        }
        housingPdfDutch {
            file {
              url
            }
          }
        housingCommitteePhoto {
            fluid(quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
            }
        }
      }
  }
`
