import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import { graphql } from "gatsby"
import Image from "gatsby-image"

const ListPersonPage = ({ data }) => {
  const { naam, foto } = data.contentfulLijstPersoon

  return (
    <BaseLayout>
            <Image fluid={foto.fluid}></Image>
            <h1>{naam}</h1>
    </BaseLayout>
  )
}

export const query = graphql`
  query getListPersonPage($slug: String!) {
    contentfulLijstPersoon(slug: { eq: $slug }) {
      naam
      slug
      foto {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default ListPersonPage

