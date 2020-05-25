import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Service from "../components/Service/Service"
// import Button from "../components/Button/Button"
// import StyledAbout from "../components/StyledAbout/StyledAbout"
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/SEO"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
      aboutSectionImg: file(relativePath: { eq: "mac-white-bg.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      featuredProductsImg: file(relativePath: { eq: "apa1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Banner
          title={data.site.siteMetadata.title}
          info={data.site.siteMetadata.description}
        />
      </Hero>
      {/* <StyledAbout
        gradient="true"
        img={data.aboutSectionImg.childImageSharp.fluid}
      > */}
      <About largePadding={true} />
      {/* </StyledAbout> */}
      <Service largePadding={true} />

      <FeaturedProducts largePadding={true} />
      {/* </StyledAbout> */}
    </Layout>
  )
}

export default Index
