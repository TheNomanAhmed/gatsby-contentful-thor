import React from "react"
import styled from "styled-components"
import Grid from "../Grid/Grid"
import services from "../../constants/services"

const TitleArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const ServiceItem = styled.article`
  background-color: #ecfbfc;
  padding: 2.5rem 1.25rem;
  border-radius: 0.375rem;
  border: 2px solid transparent;
  transition: border-color 0.5s ease;

  &:hover {
    border-top: 2px solid var(--primary);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    /* color: #ee00b3; */
    background: -webkit-linear-gradient(45deg, #a7e9af, #ffd271);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: 0;
    line-height: 1.5rem;
  }
`

const Service = props => {
  return (
    <section
      className={
        props.largePadding
          ? "section-padding section-padding--large"
          : "section-padding"
      }
    >
      <Grid>
        <TitleArea>
          <Title>Benefits For Your New Home</Title>
          <p>
            To achieve the best possible home service experience, we joined
            forces with Finland's most advanced new home service providers.
          </p>
        </TitleArea>

        {services.map((item, index) => {
          return (
            <ServiceItem key={index}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </ServiceItem>
          )
        })}
      </Grid>
    </section>
  )
}

export default Service
