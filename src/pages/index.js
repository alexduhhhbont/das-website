import * as React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BGImageSlant from '../components/BGImageSlant';
import '../styles/pages/homepage.css'
import TwoButtons from '../components/buttons/TwoButtons';
import Spacer from '../components/spacer/Spacer';
import Speerpunten from '../components/speerpunten/Speerpunten';
import SectionTitle from '../components/titles/SectionTitle';
import FractieRij from '../components/fractie/FractieRij';
import { graphql, Link } from "gatsby";
import Grid from '@mui/material/Grid';
import Image from "gatsby-image"
import Button from '@mui/material/Button';
import styled from "styled-components";
import { makeStyles} from "@material-ui/core"
import {
  Hidden,
} from "@material-ui/core"
import { Helmet } from "react-helmet"
import NewsSlider from '../components/news/news_slider';

const useStyles = makeStyles({
  image: {
    height: '200px',
    "@media (min-width: 900px)": {
      height: '300px',
    }
  },
})

const HomePage = ({data}) => {
  const { title, verkiezingsTijd, campaignVideoUrl, ctaLink, ctaText, ctaAfbeelding, ctaDescriptions} = data.contentfulHomePagina
  const { nodes } = data.allContentfulLijstPersoon
  const classes = useStyles()

  const ReadMore = styled(Link)`
    padding: 8px 15px;
    border-radius: 15px;
    border: 2px solid white;
    color: #3075bc;
    background: white;
    display: inline-block;

    &:hover {
        color: white;
        background: #3075bc;
        border: 2px solid white;
  },
`;

  return (
      <BaseLayout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>De Ambitieuze Student Eindhoven</title>
      </Helmet>
        { verkiezingsTijd ? (
          <>
          <BGImageSlant elections></BGImageSlant>
          <div className="electionsIntroHeroText">
            <h1>Elections 2021</h1>
            <h3>7th and 8th of December</h3>
            <p>DAS focuses on the ambitious students that want to develop themselves 
              alongside their studies.</p>
            <Button href="/vote" variant="contained">Vote now!</Button>
          </div>

          {campaignVideoUrl ? (
          <div className="video">
            <iframe
              src={campaignVideoUrl}
              title={"DAS Video"}
              allow="autoplay; encrypted-media; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              style={{width: "100%", height: "500px"}}
            />
          </div>
          ) : ("")}

          <Spacer spacing={6}/> 

          <SectionTitle title="Vision 2022"/>

          <Spacer spacing={2}/> 

          <Speerpunten />

          <Spacer spacing={6}/> 

          <SectionTitle title="List 2022"/>

          <Spacer spacing={2}/> 

          <Grid container className="electionListGrid">
            {nodes.map((persoon) => (
              
                <Grid className="electionsListPerson" item xs={6} sm={3} md={2}>
                  <a href={"/elections/list/" + persoon.slug}>
                    <Image fluid={persoon.foto.fluid} className={classes.image}></Image>
                  </a>
                </Grid>
              
          ))}
          </Grid>
          </>
        ) : (
          <>
          <BGImageSlant>
            <div className="heroText">
              <h1 className="heroTitle">{title}</h1>
              <p>DAS focuses on the ambitious students like </p>
              <p>yourself that want to develop themselves </p>
              <p>alongside their studies.</p>
              <Spacer spacing={2}/>
              <TwoButtons text1="Contact" text2="Fraction" url1="/contact" url2="/party/fraction"></TwoButtons>
            </div>
          </BGImageSlant>

          <SectionTitle title="Vision"/>

          <Spacer spacing={2}/>
  
          <Speerpunten/>

          <Spacer spacing={6}/>

          <div style={{width: "100vw", marginLeft: "calc(-50vw + 50%)", background: "url(" + ctaAfbeelding.file.url + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div style={{maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr"}}>
              <div style={{background: "#3075bc", padding: "90px", transform: "skewX(-15deg)"}}>
                <div style={{transform: "skewX(15deg"}}>
                <h2 style={{color: "white"}}>{ctaText}</h2>
                <p style={{color: "white"}}>{ctaDescriptions.internal.content}</p>
                <Spacer spacing={2}/>
                <ReadMore to={ctaLink}>Read more</ReadMore>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>

          <Spacer spacing={6}/>

          <SectionTitle title="Updates"/>

          <Spacer spacing={2}/>
  
          <NewsSlider/>

          <Spacer spacing={6}/>

          <SectionTitle title="Our Fraction"/>

          <Spacer spacing={2}/>

          <FractieRij/>

          <Spacer spacing={4}/>
          </>
        )}


      </BaseLayout>
  )
}

export const query = graphql`
query getHomePagina{
  contentfulHomePagina {
    title
    verkiezingsTijd
    campaignVideoUrl
    ctaText
    ctaDescriptions{
      internal {
        content
      }
    }
    ctaAfbeelding{
      fluid(quality: 100) {
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
      fixed(quality: 100){
        src
      }
      file {
        url
      }
    }
    ctaLink
  }

  allContentfulLijstPersoon(sort: { fields: [plek], order: ASC }) {
    nodes {
      naam
      foto {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      plek
      slug
    }
  }
}
`

export default HomePage;