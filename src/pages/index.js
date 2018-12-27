import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { css } from "@emotion/core"
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import HeaderWrapper from '../components/headerWrapper'
import HeaderContainer from '../components/headerContainer'
import Nav from '../components/nav' 
import Carousel from 'nuka-carousel';
// import Layout from "../components/layout"

const HeadingOne = styled.h1 `
    font-size: 7.5rem;
    color: #FFF;
    font-weight: 100;
    display: flex;
    margin-bottom: 5rem;
`

const HeadingTwo = styled.h2 `
    font-size: 2.5rem;
    color: #FFF;
    font-family: GillSansMTPro;
    font-weight: 100;
    display: flex;
`

const HeadingTextContainer = styled.div `
    justify-content: flex-end;
`

const Section = styled.div `
    background: #FFF;
`

const Container = styled.div `
    margin: 0 auto;
    max-width: 90%;
    position: relative;
    z-index: 2;
`

const SectionTitle = styled.h2 `
    font-size: 5.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    margin-bottom: 7.5rem;
    width: 60%;
    text-align: center;
`

const SectionIntro = styled.p `
    font-size: 2.5rem;
    color: ##373737;
    font-family: GillSansMTPro;
    font-weight: 100;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 10rem;
`

const ServiceWrapper = styled.div `
    display: flex;
    flex: 12 1 0%;
    justify-content: space-around;
    margin-right: 5rem;
    flex-wrap: wrap;
`

const ServiceContainer = styled.div `
    width: 30%;
    margin-bottom: 10rem;
`

const ServiceIcon = styled(Img) `
    max-height: 20rem;
    margin: 0 auto;
    text-align: center;
    max-height: 200px;
    margin-bottom: 25px;
    max-width: 118px;
`

const ServiceTitle = styled.h3 `
    font-size: 3.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    text-align: center;
`

const Slide = styled.div `
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
`
const SlideImg = styled(Img) `
    min-height: 100vh;
    
`
const CaseStudyTitle = styled.h2 `
    font-size: 10rem;
    color: #FFF;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    text-align: center;
`


const IndexPage = (props) => (

    <div>
        <FontFace />
        <Nav />
        <HeaderWrapper>
            <Img style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
            }}
                fluid={props.data.homeHeroImg.childImageSharp.fluid} />
            <HeaderContainer>
                <HeadingTextContainer>
                    <HeadingOne>Short snappy headline here.</HeadingOne>
                    <HeadingTwo>Supporting strapline in here to add more weight to headline.</HeadingTwo>
                </HeadingTextContainer>
            </HeaderContainer>
        </HeaderWrapper>
        <Section>
            <Container>
                <SectionTitle>Our Services</SectionTitle>
                <SectionIntro>One paragraph in here to introduce ourselves, give a little bit more information about who we are and tell visitors what we do. This paragraph should briefly describe the key pillars of the business which will be below in icons. This should be no longer than 280 characters.</SectionIntro>
                <ServiceWrapper>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Market Intelligence</ServiceTitle>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Corporate Positioning</ServiceTitle>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Culture and Engagement</ServiceTitle>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Digital and Content</ServiceTitle>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Crisis and Issue Management</ServiceTitle>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Conferences and Events</ServiceTitle>
                    </ServiceContainer>
                </ServiceWrapper>
            </Container>
        </Section>
        <Section>
            <Carousel>
                <Slide>
                        <SlideImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: -1,
                        }}
                        fluid={props.data.inCover.childImageSharp.fluid} />
                        <Container>
                            <HeadingTextContainer>
                                <CaseStudyTitle>Innovation Nation 2018</CaseStudyTitle>
                            </HeadingTextContainer>
                        </Container>
                </Slide>
                <Slide>
                        <SlideImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: -1,
                        }}
                        fluid={props.data.MIPIMCover.childImageSharp.fluid} />
                        <Container>
                            <HeadingTextContainer>
                                <CaseStudyTitle>MIPIM Belfast 2018</CaseStudyTitle>
                            </HeadingTextContainer>
                        </Container>
                </Slide>
                <Slide>
                        <SlideImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: -1,
                        }}
                        fluid={props.data.NIMarketOutlookCover.childImageSharp.fluid} />
                        <Container>
                            <HeadingTextContainer>
                                <CaseStudyTitle>NI Market Outlook 2018</CaseStudyTitle>
                            </HeadingTextContainer>
                        </Container>
                </Slide>
            </Carousel>
        </Section>
    </div>

)

    

export default IndexPage

export const query = graphql`
    query {
            homeHeroImg: file(relativePath: { eq: "LanyonBelfast.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            serviceIcon: file(relativePath: { eq: "icon-placeholder.png" }) {
                childImageSharp {
                    fluid(maxWidth: 118) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            inCover: file(relativePath: { eq: "case-studies/InnovationNation18/IN-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MIPIMCover: file(relativePath: { eq: "case-studies/MIPIM18/MIPIM-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMarketOutlookCover: file(relativePath: { eq: "case-studies/NIMarketOutlook18/NIMO-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }


    }
`