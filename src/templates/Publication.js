import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import { graphql, Link } from "gatsby"
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
import SlantHero from '../components/hero/SlantHero';
import styled from "styled-components";

const ButtonWithBackground = styled(Link)`
    color: white;
    font-size: 14px;
    background: #3075bc;
    padding: 8px 15px;
    border-radius: 5px;
    margin-right: 15px;
    border: 2px solid transparent;
    display: inline-block;

    &:hover {
        transform: scale(1.05);
        transition: all .7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        background: white;
        border: 2px solid #3075bc;
        color: #3075bc;
    },
`;

const PublicationPage = ({ data }) => {
  const { title, afbeelding, uitleg, document } = data.contentfulPublications

  return (
    <BaseLayout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title} - DAS Eindhoven</title>
        </Helmet>
        <SlantHero backgroundImage={afbeelding.file.url}/>
        <Spacer spacing={4}/>
          <SectionTitle title={title}/>
        <Spacer spacing={4}/>
        <p>{uitleg.uitleg}</p>
        <Spacer spacing={2}/>
        <ButtonWithBackground to={document.file.url}>Download document</ButtonWithBackground>
        <Spacer spacing={8}/>
    </BaseLayout>
  )
}

export const query = graphql`
  query getPublication($slug: String!) {
    contentfulPublications(slug: { eq: $slug }) {
      id
      title
      document{
          file{
              url
          }
      }
      uitleg{
          uitleg
      }
      afbeelding{
          file{
              url
          }
      }
      slug
    }
  }
`

export default PublicationPage

