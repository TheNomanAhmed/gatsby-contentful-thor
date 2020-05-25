import React from "react"
import styled from "styled-components"
import Grid from "../Grid/Grid"
import Button from "../../components/Button/Button"

const TitleArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const ContentArea = styled.div`
  grid-column: 1/4;
  @media (min-width: 768px) {
    grid-column: 2 / 4;

    p {
      font-size: 1.15rem;
      margin-top: 0;
      line-height: 1.75;
    }
  }
`

const About = props => {
  return (
    <section
      className={
        props.largePadding ? "section-padding--large" : "section-padding"
      }
    >
      <Grid>
        <TitleArea>
          <Title>Our service includes</Title>
          <ul>
            <li>A licensed real estate broker (LKV)</li>
            <li>Price estimate for apartment</li>
            <li>Virtual tour</li>
            <li>Photography</li>
            <li>Apartment advertising</li>
            <li>Brochures and documentation</li>
            <li>Official sales contract</li>
          </ul>
        </TitleArea>
        <ContentArea>
          <p>
            In extraordinary times extraordinary measures are needed. As the
            leading digital Nordic Real Estate Agency we have a unique ability
            and experience to help people make deals happen remotely and
            digitally. Read more about what we are doing to support everyone
            during this difficult time:
            <ul>
              <li>
                Support number for anyone who needs help with buying or selling
                an apartment.
              </li>
              <li>
                Additional safety for buyers who are unable to visit on-site
              </li>
            </ul>
          </p>
          <Button text="Read More" link="/products" />
        </ContentArea>
      </Grid>
    </section>
  )
}

export default About
