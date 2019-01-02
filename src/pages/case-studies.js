import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import HeaderWrapper from '../components/headerWrapper'
import HeaderContainer from '../components/headerContainer'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import Carousel from 'nuka-carousel';
import media from "styled-media-query";

// To consolodate

const HeaderImg = styled(Img) `
    min-height: 100vh;
`

const Section = styled.div `
    background: #FFF;
`

const Container = styled.div `
    margin: 0 auto;
    padding: 10rem 0;
    max-width: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
`

const SectionTitleLeft = styled.h2 `
    font-size: 5.5rem; 
    color: #222; // Different from index.js - to consolodate 
    display: flex; // Different from index.js 
    flex: 1 1 100%; // Different from index.js
    font-family: Didot;
    font-weight: 100;
    margin-bottom: 5rem; // Different from index.js - to consolodate
    text-align: left;

    ${media.lessThan("medium")`
        font-size: 4rem; 
        text-align: center;
        width: 80%;
    `}
`

const Bold = styled.span `
    font-weight: 500; 
`

const CaseStudyTitle = styled.h2 `
    font-size: 10rem;
    color: #FFF;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    text-align: center;

    ${media.lessThan("large")`
        font-size: 7.5rem;
    `}

    ${media.lessThan("medium")`
        font-size: 5rem;
    `}
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

// To consolodate end

const CaseStudyIntroWrapper = styled.div `
    display: flex; 
    flex: 1 1 72%;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -40rem;

`

const CaseStudyIntroContainer = styled.div `
    display: flex; 
    justify-content: flex-end;
    flex-direction: row;
    align-items: flex-start;
    background #FFF;
    padding: 5rem;
    flex-flow: row wrap;
    max-width: 72%;
`

const CaseStudyInfoContainer = styled.div `
    flex: 1 1 18%;
    margin-right: 2.5%;
`

const InfoTitle = styled.h6 `
    display: flex; 
    flex: 1 1 100%;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    font-size: 2.5rem;
    font-weight: 100;
    margin-bottom: 1.5rem;
    margin-top: -0.5rem; // spacing will need fixed so text aligns
`

const InfoText = styled.div `
    display: flex; 
    flex: 1 1 100%;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.8rem;
    margin-bottom: 3.8rem;
    font-weight: 100;
`

const CaseStudyDescriptionContainer = styled.div `
    display: flex; 
    flex: 1 1 72%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const CaseStudyDescription = styled.p `
    font-size: 1.8rem;
    font-weight: 100;
    color: #222;
    line-height: 1.75;
    flex: 1 1 100%;
    margin-bottom: 3rem;
`

const ContactButton = styled.button `
    background: #E62645;
    color: #FFF;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    text-transform: uppercase;
`

const SectionColoured = styled.div `
    background: #E62645;
`

const CenterThreeContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-flow: row wrap;
    margin: 0 auto;
    width: 59%;
`

const WebsiteDesktopImg = styled(Img) `
    display: flex;
    width: 100%;
`

const INLogoContainer = styled.div `
    flex: 0 1 38.5%;
    margin: 0 auto;
    margin-bottom: 10rem;
`

const AscendLogoContainer = styled.div `
    flex: 0 1 18%;
    margin: 0 auto;
    margin-bottom: 10rem;
`
const INLogoImg = styled(Img) `
   width: 100%;
`

const AscendLogoImg = styled(Img) `
    width: 100%;
`


const SectionSubtitleLeft = styled.h3 `
    font-size: 4rem; 
    color: #222; 
    display: flex;
    flex: 1 1 100%;
    font-family: Didot;
    font-weight: 100;
    margin-bottom: 5rem; 
    text-align: left;

    ${media.lessThan("medium")`
        font-size: 3rem; 
        text-align: center;
        width: 80%;
    `}
`

const SectionImg = styled(Img) `
    width: 100%;
    min-height: 50vh;
    height: 75vh;
`

const CaseStudyIN = (props) => (

    <div>
        <FontFace />
        <Nav />
        <HeaderWrapper>
            <HeaderImg style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
            }}
                fluid={props.data.INHeroImg.childImageSharp.fluid} />
        </HeaderWrapper>
        <Section>
            <Container>
                <CaseStudyIntroWrapper>
                    <CaseStudyIntroContainer>
                        <SectionTitleLeft>Innovation Nation 2018</SectionTitleLeft> {/* get from index */}
                        <CaseStudyInfoContainer>
                            <InfoTitle>Brief</InfoTitle>
                            <InfoText>End-to-end Event Management</InfoText>
                            <InfoTitle>Client</InfoTitle>
                            <InfoText>Newry, Mourne and Down Council</InfoText>
                        </CaseStudyInfoContainer>
                        <CaseStudyDescriptionContainer>
                            <CaseStudyDescription>
                                Following a competitive tender process, Lanyon Communications was successful in its bid to develop and deliver an inaugural technology and investment conference for the Newry, Mourne and Down District Council area across two days. 
                                <br /><br />
                                Supported by Newry, Mourne and Down District Council and some of Northern Ireland’s most successful indigenous companies, including First Derivatives plc, Norbrook Laboratories and STATSports, Innovation Nation 2018 shone a light on the burgeoning tech and innovation scene in Newry and beyond. 
                                <br /><br />
                                Featuring keynote speakers such as Brian Conlon of First Derivatives, Liam Nagle of Norbrook Laboratories and Neva Labs’ Mark Little, it showcased how organisations, both local and international, can use the latest innovations and technology to drive their businesses into the future. 
                                <br /><br />
                                During the event, Lanyon Communications delivered a start-up competition (Ascend Start-up Competition 2018) along with some of Innovation Nation’s supporting partners, which boasted a prize package worth the value of £50,000. 
                                <br /><br />
                                The winner of the competition was announced at the official Innovation Nation 2018 Dinner, which was hosted in the Newry Town Hall.
                                <br /><br />
                                Interested in working on something similar? <Bold>Let’s chat about it.</Bold>
                            </CaseStudyDescription>
                            <ContactButton>Get in touch</ContactButton>
                        </CaseStudyDescriptionContainer>
                    </CaseStudyIntroContainer>
                </CaseStudyIntroWrapper>
            </Container>
        </Section>
        <SectionColoured>
            <Container>
                <CenterThreeContainer>
                    <WebsiteDesktopImg fluid={props.data.WebsiteDesktopImg.childImageSharp.fluid} />
                </CenterThreeContainer>
            </Container>
        </SectionColoured>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <INLogoContainer>
                        <INLogoImg fluid={props.data.INLogoImg.childImageSharp.fluid} />
                    </INLogoContainer>
                    <AscendLogoContainer>
                        <AscendLogoImg fluid={props.data.AscendLogoImg.childImageSharp.fluid} />
                    </AscendLogoContainer>
                    <SectionSubtitleLeft>Branding</SectionSubtitleLeft>
                    <CaseStudyDescription>
                        Two short paragraphs in here which would describe this section and tell visitors what we were responsible for, brief rationale behind the process as well as anything else that they may find interesting. This should be used to emphasise our strengths.
                        <br /><br />
                        Two short paragraphs in here which would describe this section and tell visitors what we were responsible for, brief rationale behind the process as well as anything else that they may find interesting. This should be used to emphasise our strengths.</CaseStudyDescription>
                </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <SectionImg fluid={props.data.INMarkLittleImg.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Event &amp; Programme Management</SectionSubtitleLeft>
                    <CaseStudyDescription>
                        Two short paragraphs in here which would describe this section and tell visitors what we were responsible for, brief rationale behind the process as well as anything else that they may find interesting. This should be used to emphasise our strengths.
                        <br /><br />
                        Two short paragraphs in here which would describe this section and tell visitors what we were responsible for, brief rationale behind the process as well as anything else that they may find interesting. This should be used to emphasise our strengths.</CaseStudyDescription>
                </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <SectionImg fluid={props.data.INFoodImg.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Interested in working with us?</SectionSubtitleLeft>
                    <CaseStudyDescription>
                    One short paragraph in here which would briefly ask if the user is looking for support for a similar project, if so - we’d love to talk about it and see if there was a way to collaborate.  This paragraph should be no longer than three lines in total.
                    </CaseStudyDescription>
                    <ContactButton>Get in touch</ContactButton>
                </CenterThreeContainer>
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
                        fluid={props.data.MIPIMCover.childImageSharp.fluid} />
                        <Container>
                                <CaseStudyTitle>MIPIM Belfast 2018</CaseStudyTitle>
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
                                <CaseStudyTitle>NI Market Outlook 2018</CaseStudyTitle>
                        </Container>
                </Slide>
            </Carousel>
        </Section>
        <NavMobile />
    </div>

)

export default CaseStudyIN

export const query = graphql`
    query {
            INHeroImg: file(relativePath: { eq: "case-studies/InnovationNation18/IN-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1400, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            WebsiteDesktopImg: file(relativePath: { eq: "case-studies/InnovationNation18/IN-desktop-website.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1100 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INLogoImg: file(relativePath: { eq: "case-studies/InnovationNation18/IN-Logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 480 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            AscendLogoImg: file(relativePath: { eq: "case-studies/InnovationNation18/Ascend-Logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 260 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INMarkLittleImg: file(relativePath: { eq: "case-studies/InnovationNation18/IN-Mark-Little.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1400, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INFoodImg: file(relativePath: { eq: "case-studies/InnovationNation18/IN-Food.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1400, cropFocus: CENTER ) {
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