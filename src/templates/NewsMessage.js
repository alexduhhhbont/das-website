import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { makeStyles} from "@material-ui/core"
import { Helmet } from "react-helmet"
import Spacer from '../components/spacer/Spacer';
import styled from "styled-components";
import { Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import '../styles/templates/newsMessage.css';

const useStyles = makeStyles({
  gridContainer: {
    "@media (max-width: 900px)": {
      position: "relative",
      width: "100vw !important",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
    }
  },
  image: {
    height: "600px",
    "@media (max-width: 900px)": {
      height: "350px"
    }
  }
})

const BackToOverview = styled(Link)`
    color: black;
    font-size: 14px;
`;

const ListPersonPage = ({ data }) => {
  const { slug, header, title, tekst } = data.contentfulNews

  const classes = useStyles()

  return (
    <BaseLayout>
          <Helmet>
                <meta charSet="utf-8" />
                <title>{slug} - DAS Eindhoven</title>
            </Helmet>
            { header == null ? 
            (
                <>
                </>
            ) : 
            (
                <Image component="img" fluid={header.fluid} style={{height: "500px", width: "100vw", marginLeft: "calc(-50vw + 50%)"}} alt="fractieFoto"></Image>
            )}
            <Spacer spacing={6}/>
            <BackToOverview to='/news'>Back</BackToOverview>
            <Spacer spacing={1}/>
             <h1 style={{marginTop: "0px"}}>{title}</h1>
             <Spacer spacing={2}/>
             <div className='blog_content'>
                {documentToReactComponents(JSON.parse(tekst.raw))}
            </div>
            <Spacer spacing={2}/>
             <Spacer spacing={6}/>
    </BaseLayout>
  )
}

export const query = graphql`
  query getNewsMessage($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      slug
      title
      header {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      tekst{
          raw
      }
    }
  }
`

export default ListPersonPage

