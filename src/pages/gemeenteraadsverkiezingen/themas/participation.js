import React from 'react'
import BaseLayout from '../../../layouts/BaseLayout';
import SectionTitle from '../../../components/titles/SectionTitle';
import Spacer from '../../../components/spacer/Spacer';
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from "styled-components";

const BackToOverview = styled(Link)`
    color: black;
    font-size: 14px;
`;

export default function ThemaParticipation() {
    const data = useStaticQuery(getAllData)
    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Participation - Gemeenteraadsverkiezingen Eindhoven</title>
            </Helmet>
            <Spacer spacing={4}/>
            <BackToOverview to='/gemeenteraadsverkiezingen/themas'>Alle thema's</BackToOverview>
            <SectionTitle title="Burgerparticipatie"/>
            <Spacer spacing={4}/>
            {data.allContentfulGemeenteraadsverkiezingPartij.nodes.map((entry) => (
                <>
                <div style={{display: "flex", alignItems: "start"}}>
                    <img style={{width: "80px", objectFit: "contain", marginRight: "30px", marginTop: "20px"}} src={entry.logo.fixed.src} alt="logoPartij"></img>
                    <div className='blog_content'>
                    {documentToReactComponents(JSON.parse(entry.standpuntBurgerparticipatie.raw))}
                    </div>
                </div>
                <Spacer spacing={4}/>
                </>
            ))}
        </BaseLayout>
    )
}

const getAllData = graphql`
  query getGemeenteraadsverkiezingPartijParticitpatieAll {
    allContentfulGemeenteraadsverkiezingPartij(sort: {order: ASC, fields: lijst}) {
      nodes {
        slug
        lijst
        naam
        standpuntBurgerparticipatie {
            raw
        }
        logo {
            fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
            }
            fixed(quality: 100){
                src
            }
        }
      }
    }
  }
`
