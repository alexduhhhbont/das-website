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

const ButtonWithBackground = styled(Link)`
    color: white;
    font-size: 14px;
    background: #3075bc;
    padding: 8px 15px;
    border-radius: 5px;
    margin-right: 15px;
    border: 2px solid transparent;

    &:hover {
        transform: scale(1.05);
        transition: all .7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        background: white;
        border: 2px solid #3075bc;
        color: #3075bc;
    },
`;

const ListPersonPage = ({ data }) => {
  const { slug, naam, website, verkiezingsprogramma,standpuntStudentenhuisvesting, standpuntStudentenstad, standpuntBurgerparticipatie, standpuntDuurzaamheid, standpuntMobiliteit, logo } = data.contentfulGemeenteraadsverkiezingPartij

  const classes = useStyles()

  return (
    <BaseLayout>
          <Helmet>
                <meta charSet="utf-8" />
                <title>{naam} - Gemeenteraadsverkiezingen Eindhoven</title>
            </Helmet>
            { naam == null ? 
            (
                <>
                </>
            ) : 
            (
                <></>
               // <Image component="img" fluid={header.fluid} style={{height: "500px", width: "100vw", marginLeft: "calc(-50vw + 50%)"}} alt="fractieFoto"></Image>
            )}
            <Spacer spacing={6}/>
            <BackToOverview to='/gemeenteraadsverkiezingen/partij'>Back</BackToOverview>
            <Spacer spacing={1}/>
            <div style={{display: "grid", gridTemplateColumns: "repeat(1fr, 4)", gridGap: "15px"}}>
                <div style={{gridColumn: "1/2"}}>
                    <Image component="img" fluid={logo.fluid} alt="logoPartij"></Image>
                </div>
                <div style={{gridColumn: "2/5"}}>
                    <h1 style={{marginTop: "0px"}}>{naam}</h1>
                    <div style={{marginTop: "8px"}}>
                        { verkiezingsprogramma ? (
                            <ButtonWithBackground href={verkiezingsprogramma}>Verkiezingsprogramma</ButtonWithBackground>
                        ) : null}
                        <ButtonWithBackground href={website}>Website</ButtonWithBackground>
                    </div>
                </div>
            </div>
             <Spacer spacing={2}/>
             <h2>Studentenhuisvesting</h2>
             <div className='blog_content'>
                {documentToReactComponents(JSON.parse(standpuntStudentenhuisvesting.raw))}
            </div>
            <Spacer spacing={2}/>
            <h2>Eindhoven als studentenstad</h2>
             <div className='blog_content'>
                {documentToReactComponents(JSON.parse(standpuntStudentenstad.raw))}
            </div>
            <Spacer spacing={2}/>
            <h2>Burgerparticipatie</h2>
             <div className='blog_content'>
                {documentToReactComponents(JSON.parse(standpuntBurgerparticipatie.raw))}
            </div>
            <Spacer spacing={2}/>
            <h2>Duurzaamheid</h2>
             <div className='blog_content'>
                {documentToReactComponents(JSON.parse(standpuntDuurzaamheid.raw))}
            </div>
            <Spacer spacing={2}/>
            <h2>Mobiliteit</h2>
             <div className='blog_content'>
                {documentToReactComponents(JSON.parse(standpuntMobiliteit.raw))}
            </div>
            <Spacer spacing={2}/>
             <Spacer spacing={6}/>
    </BaseLayout>
  )
}

export const query = graphql`
  query getMunicipalityParty($slug: String!) {
    contentfulGemeenteraadsverkiezingPartij(slug: { eq: $slug }) {
        verkiezingsprogramma
        website
        slug
        naam
        logo {
            fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
            }
        }
        standpuntBurgerparticipatie {
            raw
        }
        standpuntDuurzaamheid {
            raw
        }
        standpuntMobiliteit {
            raw
        }
        standpuntStudentenhuisvesting {
            raw
        }
        standpuntStudentenstad {
            raw
        }
    }
  }
`

export default ListPersonPage

