import React from 'react'
import { useStaticQuery, StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';
import styled from "styled-components";
import Grid from '@mui/material/Grid';

const Overlay = styled.div`
    position: relative;
    z-index: 99;
    height: 500px;
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

const Date = styled.h4`
    color: white;
    padding: 0px 30px;
    font-weight: 400;
`;



const PublicationsGrid = () => {
    return (
        <StaticQuery 
        query={graphql`
        query getAllPublicationsOrderDate {
            allContentfulPublications(sort: {fields: date, order: DESC}) {
              nodes {
                date(formatString: "LL")
                title
                slug
                afbeelding{
                          file{
                              url
                  }
                }
              }
            }
          }
      `}
      render={data => (
        <Grid container spacing={2}>
            {data.allContentfulPublications.nodes.map(entry => {
                return(
                <Grid item xs={12} md={4}>
                    <Link className="newsLink" to={"/publications/" + entry.slug}>
                        <div className='card'>
                            <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + entry.afbeelding.file.url + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                                <Title>{entry.title}</Title>
                                <Date>{entry.date}</Date>
                                <ReadMore>Read more</ReadMore>
                            </Overlay>
                        </div>
                    </Link>
                </Grid>
                )
            })}
        </Grid>
      )}
        
        />
    )
}

export default PublicationsGrid