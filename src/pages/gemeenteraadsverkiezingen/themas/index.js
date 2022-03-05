import React from 'react'
import BaseLayout from '../../../layouts/BaseLayout';
import Typography from '@mui/material/Typography';
import SectionTitle from '../../../components/titles/SectionTitle';
import Spacer from '../../../components/spacer/Spacer';
import Image from "gatsby-image"
import { Helmet } from "react-helmet"
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import { Link } from 'gatsby';
import sustainability from '../../../images/Atlas_TUe_overzicht_1.jpg'

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


export default function themas() {
    return (
        <BaseLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Studenten Thema's - Gemeenteraadsverkiezingen Eindhoven</title>
            </Helmet>
            <Spacer spacing={4}/>
            <SectionTitle title="Gemeenteraadsverkiezingen Studenten Thema's"/>
            <Spacer spacing={4}/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Link className="newsLink" to={"/gemeenteraadsverkiezingen/themas/student-housing/"}>
                        <div className='card'>
                            <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + sustainability + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                                <Title>Studenten huisvesting</Title>
                                <ReadMore>Read more</ReadMore>
                            </Overlay>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link className="newsLink" to={"/gemeenteraadsverkiezingen/themas/student-city/"}>
                        <div className='card'>
                            <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + sustainability + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                                <Title>Studentenstad</Title>
                                <ReadMore>Read more</ReadMore>
                            </Overlay>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link className="newsLink" to={"/gemeenteraadsverkiezingen/themas/sustainability/"}>
                        <div className='card'>
                            <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + sustainability + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                                <Title>Duurzaamheid</Title>
                                <ReadMore>Read more</ReadMore>
                            </Overlay>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Link className="newsLink" to={"/gemeenteraadsverkiezingen/themas/participation/"}>
                        <div className='card'>
                            <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + sustainability + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                                <Title>Burgerparticipatie</Title>
                                <ReadMore>Read more</ReadMore>
                            </Overlay>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Link className="newsLink" to={"/gemeenteraadsverkiezingen/themas/mobility/"}>
                        <div className='card'>
                            <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + sustainability + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                                <Title>Mobiliteit</Title>
                                <ReadMore>Read more</ReadMore>
                            </Overlay>
                        </div>
                    </Link>
                </Grid>
        </Grid>
        <Spacer spacing={4}/>
        </BaseLayout>
    )
}
