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
import NewsSlider from '../components/updates/updates_slider';

const useStyles = makeStyles({
  image: {
    height: '200px',
    "@media (min-width: 900px)": {
      height: '300px',
    }
  },
})

const HomePage = ({data}) => {
  const { title, verkiezingsTijd, campaignVideoUrl, ctaLink, ctaText, ctaAfbeelding, ctaDescriptions, heroImage} = data.contentfulHomePagina
  const { nodes } = data.allContentfulLijstPersoon
  const classes = useStyles()

  const currentYear = new Date().getFullYear()

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
          <BGImageSlant elections backgroundImage={heroImage.file.url}></BGImageSlant>
          <div className="electionsIntroHeroText">
            <h1>{'Elections ' + (currentYear + 1)}</h1>
            <h3>2nd, 3th and 4th of December</h3>
            <p>DAS focuses on the ambitious students that want to develop themselves 
              alongside their studies.</p>
            <Button size="large" href="/vote" variant="contained">Vote!</Button>
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

          <SectionTitle title="Vision of DAS"/>

          <Spacer spacing={2}/> 

          <Speerpunten />

          <Spacer spacing={6}/> 

          <SectionTitle title="Our list"/>

          <Spacer spacing={2}/> 

          <Grid container className="electionListGrid">
            {nodes.map((persoon) => (
              
                <Grid className="electionsListPerson" item xs={6} sm={3} md={2}>
                  <a className="electionPersonCard" href={"/elections/list/" + persoon.slug}>
                    <Image fluid={persoon.foto.fluid} className={classes.image}></Image>
                  </a>
                </Grid>
              
          ))}
          </Grid>
          </>
        ) : (
          <>
          <BGImageSlant backgroundImage={heroImage.file.url}>
            <div className="heroText">
              <h1 className="heroTitle">{title}</h1>
              <p>DAS focuses on the ambitious students</p>
              <p> that want to develop themselves</p> 
              <p>alongside their studies.</p>
              <Spacer spacing={2}/>
              <TwoButtons text1="Contact" text2="Faction" url1="/contact" url2="/party/faction"></TwoButtons>
            </div>
          </BGImageSlant>

          <SectionTitle title="Vision"/>

          <Spacer spacing={2}/>
  
          <Speerpunten/>

          <Spacer spacing={6}/>

          <div style={{width: "100vw", marginLeft: "calc(-50vw + 50%)", background: "url(" + ctaAfbeelding.file.url + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div style={{maxWidth: "1080px", margin: "0 auto"}}>
              <div style={{background: "#3075bc", padding: "90px"}}>
                <div>
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

          <SectionTitle title="Our Faction"/>

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
    heroImage{
      file {
        url
      }
    }
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