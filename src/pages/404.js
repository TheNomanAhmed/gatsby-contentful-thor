import React from "react"
import Layout from "../components/Layout"
import Grid from "../components/Grid/Grid"
import styled from "styled-components"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error404 = styled.section`
  background-color: var(--background);
  color: #fff;
`

const Title = styled.h1`
  margin-top: 0;

  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const SubContent = styled.div`
  p {
    margin-bottom: 2.125rem;
  }
  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`

const SubTitle = styled.h2`
  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <Error404 className="section-padding">
        <Grid>
          <Title>Sorry.</Title>
          <SubContent>
            <SubTitle>This page has moved or no longer exists.</SubTitle>
            <p>
              Please choose another option from the menu above, or to return
              home, press the button below.
            </p>
            <Link className="btn" to="/">
              Return Home
            </Link>
          </SubContent>
        </Grid>
      </Error404>
    </Layout>
  )
}

export default error
