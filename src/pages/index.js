import * as React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BGImageSlant from '../components/BGImageSlant';
import '../styles/pages/homepage.css'
import TwoButtons from '../components/buttons/TwoButtons';
import Spacer from '../components/spacer/Spacer';
import Speerpunten from '../components/speerpunten/Speerpunten';
import SectionTitle from '../components/titles/SectionTitle';
import FractieRij from '../components/fractie/FractieRij';
import { graphql } from "gatsby";
import Grid from '@mui/material/Grid';
import Image from "gatsby-image"
import Button from '@mui/material/Button';
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
  const { title, verkiezingsTijd, campaignVideoUrl} = data.contentfulHomePagina
  const { nodes } = data.allContentfulLijstPersoon
  const classes = useStyles()

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