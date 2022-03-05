import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';
import styled from "styled-components";
import Grid from '@mui/material/Grid';

const Overlay = styled.div`
    position: relative;
    z-index: 99;
    height: 250px;
    width: 100%;
    background-color: rgba(0,0,0,0.2);
    border-radius: 15px;

    &:hover {
        p {
            transform: scale(1.05);
            transition: all .7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            color: #3075bc;
            background: white;
        }
    },
`;

const Title = styled.h1`
    color: white;
    padding: 30px 30px 0px 30px;
`;

const ReadMore = styled.p`
    padding: 8px 15px;
    border-radius: 15px;
    background: #3075bc;
    width: max-content;
    color: white;
    margin: 30px;
    position: absolute;
    bottom: 0px;
`;


export default function PartyGrid() {
    const data = useStaticQuery(getAllNews)

    return (
        <Grid container spacing={2}>
            {data.allContentfulGemeenteraadsverkiezingPartij.nodes.map((entry) => (
                <Grid item xs={12} md={4}>
                    <Link className="newsLink" to={"/gemeenteraadsverkiezingen/partij/" + entry.slug}>
                        <div className='card'>
                            <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + entry.logo.fixed.src + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                                <Title>{entry.naam}</Title>
                                <ReadMore>Ontdek partij</ReadMore>
                            </Overlay>
                        </div>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}


const getAllNews = graphql`
  query getGemeenteraadsverkiezingPartijAll {
    allContentfulGemeenteraadsverkiezingPartij(sort: {order: ASC, fields: lijst}) {
      nodes {
        slug
        lijst
        naam
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