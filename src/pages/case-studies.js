import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import media from "styled-media-query";

// To consolodate

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

const NoTopContainer = styled.div `
    margin: 0 auto;
    padding: 0 0 10rem;
    max-width: 90%;
    display: flex;
    flex-direction: column;
`

const SectionTitleTop = styled.h2 `
    font-size: 5.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 7.5rem auto;
    width: 60%;
    text-align: center;

    ${media.lessThan("medium")`
        font-size: 4rem; 
        text-align: center;
        width: 80%;
    `}
`

// To consolodate end

const Paragraph = styled.p `
    font-size: 1.8rem;
    font-weight: 100;
    color: #222;
    line-height: 1.75;
    flex: 1 1 100%;
    margin-bottom: 0;
`

const ParagraphLight = styled.p `
    font-size: 1.8rem;
    font-weight: 100;
    color: #FFF;
    line-height: 1.75;
    flex: 1 1 100%;
    margin-bottom: 0;
`

const ContactButtonLight = styled.button `
    background: #FFF;
    color: #004655;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    text-transform: uppercase;
    margin-top: 2.5rem;
`

const SectionColoured = styled.div `
    background: #004655;
`

const CenterThreeContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-flow: row wrap;
    margin: 0 auto;
    width: 59%;
`

const SectionColouredSubtitleLeft = styled.h3 `
    font-size: 4rem; 
    color: #FFF; 
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

const ColumnWrapper = styled.div `
    display: flex;
    flex: 1 1 100%;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
`

const ThreeColumnContainer = styled.div `
    display: flex;
    flex: 1 1 31.66%;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
    margin-right: 2.5%;
    margin-bottom: 5rem;

    &:nth-child(3n) {
        margin-right: 0;
    }
`

const ThreeColumnImgContainer = styled.div `
    flex: 1 1 100%;
    height: 40vh;
    position: relative;
    overflow: hidden;
`

const CaseStudyImg = styled(Img) `
    min-height: 100%;
`

const ThreeColumnTextContainer = styled.div ` 
    display: flex;
    flex: 1 1 100%;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
    background: #FFF;
    margin-top: 5rem;
`

const CaseStudyTitle = styled.h3 `
    flex: 1 1 100%;
    font-size: 2.5rem;
    color: #222;
    font-weight: 400;
    margin-bottom: 2.5rem;
`

const CaseStudyMainBrief = styled.h4 `
    flex: 1 1 100%;
    font-family: 'GillSansMTPro';
    font-weight: 100;
    font-size: 2rem;
    color: #222;
    font-weight: 100;
    
`

const Url = styled(Link) `
    text-decoration: none;
    width: 100%;
`

const CaseStudies = (props) => (

    <div>
        <FontFace />
        <Nav />
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionTitleTop>Case Studies</SectionTitleTop>
                <Paragraph>
                    At Lanyon, we are proud to work with a large and varied portfolio of leading organisations across a wide spectrum of sectors and industries. This section provides and overview of just some of the many successful client projects we have delivered in recent months. 
                </Paragraph>
            </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <NoTopContainer>
               <ColumnWrapper>

                    <ThreeColumnContainer>
                        <Url to="/mipim2018/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.MIPIMCover.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>MIPIM Belfast</CaseStudyTitle>
                                <CaseStudyMainBrief>Position Belfast for investment on a global stage</CaseStudyMainBrief>
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        <Url to="/innovation-nation2018/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.INCover.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>Innovation Nation</CaseStudyTitle>
                                <CaseStudyMainBrief>End-to-end Event Management</CaseStudyMainBrief>
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        <Url to="/outlook2018/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.NIMarketOutlookCover.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>NI Market Outlook</CaseStudyTitle>
                                <CaseStudyMainBrief>Event Design, Management &amp; Delivery</CaseStudyMainBrief>
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        <Url to="/linenmill-studios/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.LMCover.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>Linen Mill Studios</CaseStudyTitle>
                                <CaseStudyMainBrief>Brief point</CaseStudyMainBrief>
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        <Url to="/statsports/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.SSCover.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>STATSports</CaseStudyTitle>
                                <CaseStudyMainBrief>Brief point</CaseStudyMainBrief>
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        
                    </ThreeColumnContainer>
               </ColumnWrapper>
            </NoTopContainer>
        </Section>
        <SectionColoured>
            <Container>
                <CenterThreeContainer>
                    <SectionColouredSubtitleLeft>Interested in working with us?</SectionColouredSubtitleLeft>
                    <ParagraphLight>
                        One short paragraph in here which would briefly ask if the user is looking for support for a similar project, if so - we’d love to talk about it and see if there was a way to collaborate.  This paragraph should be no longer than three lines in total.
                    </ParagraphLight>
                    <ContactButtonLight>Get in touch</ContactButtonLight>
                </CenterThreeContainer>
            </Container>
        </SectionColoured>
        <NavMobile />
    </div>

)

export default CaseStudies

export const query = graphql`
    query {

            INCover: file(relativePath: { eq: "case-studies/InnovationNation18/IN-cover.jpg" }) {
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

            LMCover: file(relativePath: { eq: "case-studies/LinenMill/LM-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            SSCover: file(relativePath: { eq: "case-studies/StatSports/SS-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `