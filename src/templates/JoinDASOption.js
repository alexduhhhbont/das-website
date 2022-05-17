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
import JoinDasGrid from '../components/joinDAS/joinDasGrid';

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

const JoinDASOptionPage = ({ data }) => {
  const { title, contactEmail, description, image } = data.contentfulJoinDas

  return (
    <BaseLayout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Join DAS: {title} - DAS Eindhoven</title>
        </Helmet>
        <Spacer spacing={4}/>
          <SectionTitle title={"Join DAS: " + title}/>
        <Spacer spacing={4}/>
        <div className='join-das__description'>
            {documentToReactComponents(JSON.parse(description.raw))}
        </div>
        <Spacer spacing={4}/>
        <Image fluid={image.fluid} className={"image"}></Image>
        <Spacer spacing={4}/>
        <SectionTitle title={"All the ways to join DAS"}/>
        <Spacer spacing={2}/>
        <JoinDasGrid></JoinDasGrid>
        <Spacer spacing={8}/>
    </BaseLayout>
  )
}

export const query = graphql`
  query getJoinDas($slug: String!) {
    contentfulJoinDas(slug: { eq: $slug }) {
        slug
        title
        contactEmail
        image {
          file {
            url
          }
          fluid(quality: 100) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        description {
          raw
      }
    }
  }
`

export default JoinDASOptionPage

