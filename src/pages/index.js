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

const useStyles = makeStyles({
  image: {
    height: '200px',
    "@media (min-width: 900px)": {
      height: '300px',
    }
  },
})

const HomePage = ({data}) => {
  const { title, verkiezingsTijd } = data.contentfulHomePagina
  const { nodes } = data.allContentfulLijstPersoon
  const classes = useStyles()

  return (
      <BaseLayout>
        

            { verkiezingsTijd ? (
              ""
            ) : (
              <BGImageSlant>
              <div className="heroText">
                <h1 className="heroTitle">{title}</h1>
                <p>DAS focuses on the ambitious students like </p>
                <p>yourself that want to develop themselves </p>
                <p>alongside their studies.</p>
                <Spacer spacing={2}/>
                <TwoButtons text1="Standpunten" text2="Fractie" url1="/contact" url2="/party/fraction"></TwoButtons>
              </div>
              </BGImageSlant>
            )}
 
        

        { verkiezingsTijd ? (
          <>
          <BGImageSlant elections></BGImageSlant>
          <div className="electionsIntroHeroText">
            <h1>Elections 2021</h1>
            <h3>7th and 8th of December</h3>
            <p>DAS focuses on the ambitious students like 
              yourself that want to develop themselves 
              alongside their studies.</p>
            <Button variant="contained">Vote now!</Button>
          </div>

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
          <SectionTitle title="Vision"/>

          <Spacer spacing={2}/>
  
          <Speerpunten/>

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
  }

  allContentfulLijstPersoon(sort: { fields: [plek], order: ASC }) {
    nodes {
      naam
      foto {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
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