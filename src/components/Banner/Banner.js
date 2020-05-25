import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const getImages = graphql`
  query HeroImage {
    fluid: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const HeroContainer = styled.div``

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-rows: 1fr 1fr;
    grid-gap: 40px;
  }
`

const HeroImage = styled.div`
  width: 100%;
  background-color: var(--primary);
  border: none;
  outline: none;

  @media (min-width: 768px) {
    grid-column: 1 / 4;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    margin-bottom: 0;
  }
`

const TitleArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }

  @media (min-width: 1200px) {
    grid-column: 3 / 4;
  }
`
const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  .contact-details {
    display: flex;
    flex-direction: row;

    h3 {
      padding-left: 1rem;
      font-size: 1.5rem;
    }

    img {
      width: 35px;
    }
  }
  ul {
    /* color: yellow; */
  }
  @media (min-width: 768px) {
    grid-column: 2 / 4;
  }

  @media (min-width: 1200px) {
    grid-column: 3 / 4;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const HeroTitle = styled.h1`
  font-size: var(--h1);
  margin-top: 0;
  margin-bottom: 0;
`

const HeroSubTitle = styled.h2`
  font-size: var(--h2);
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const Banner = ({ title, info }) => {
  const data = useStaticQuery(getImages)
  return (
    <section className="section-padding">
      <HeroContainer className="container">
        <GridContainer>
          <HeroImage>
            <Img fluid={data.fluid.childImageSharp.fluid} />
          </HeroImage>
          <TitleArea>
            <HeroTitle>{title}</HeroTitle>
            <HeroSubTitle>{info}</HeroSubTitle>
          </TitleArea>
          <ContentArea>
            <ul>
              <li>Professional real estate brokers </li>
              <li>Award-winning service </li>
              <li>Save on average 6000€</li>
              <li>No sale, no fee</li>
            </ul>
            <div className="contact-details">
              <img
                src="https://blok-website.s3.eu-central-1.amazonaws.com:443/images/icons/hotline.svg"
                alt="Call us"
              />
              <h3>044 241 6380</h3>
            </div>
            <p> Leave a callback request to our real estate specialist</p>
          </ContentArea>
        </GridContainer>
      </HeroContainer>
    </section>
  )
}

export default Banner
