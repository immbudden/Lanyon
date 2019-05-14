import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import media from "styled-media-query";
import { Helmet } from 'react-helmet'

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
    
    ${media.lessThan("medium")`
        padding: 7.5rem 0;
    `}
`

const NoTopContainer = styled.div `
    margin: 0 auto;
    padding: 0 0 10rem;
    max-width: 90%;
    display: flex;
    flex-direction: column;

    ${media.lessThan("medium")`
        padding: 0 0 7.5rem;
    `}
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
        width: 90%;
        margin: 5rem auto;
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

    ${media.lessThan("medium")`
        text-align: center;
    `}
`

const ParagraphLight = styled.p `
    font-size: 1.8rem;
    font-weight: 100;
    color: #FFF;
    line-height: 1.75;
    flex: 1 1 100%;
    margin-bottom: 0;

    ${media.lessThan("medium")`
        text-align: center;
    `}
`

const ContactButtonLight = styled.button `
    background: #FFF;
    color: #004655;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    text-transform: uppercase;
    margin-top: 2.5rem;
    cursor: pointer;

    ${media.lessThan("medium")`
        margin: 3.5rem auto;
    `}
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

    ${media.lessThan("medium")`
        width: 90%;
    `}
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
        width: 90%;
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

    ${media.lessThan("medium")`
        flex: 1 1 100%;
        margin-right: 0;

        &:nth-child(8n) {
            margin-bottom: 0;
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    `}
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
    padding-top: 5rem;

    ${media.lessThan("medium")`
        border: 1px solid #EEEEEE;
        border-top: none;
        padding: 2.5rem;
    `}
`

const CaseStudyTitle = styled.h3 `
    flex: 1 1 100%;
    font-size: 2.5rem;
    color: #222;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 1.35;
`

const CaseStudyMainBrief = styled.h4 `
    flex: 1 1 100%;
    font-family: 'GillSansMTPro';
    font-weight: 100;
    font-size: 2rem;
    color: #222;
    font-weight: 100;
    line-height: 1.5;
    margin-bottom: 0;

    ${media.lessThan("medium")`
        font-size: 1.8rem;
    `}
    
    
`

const Url = styled(Link) `
    text-decoration: none;
    flex: 1 1 100%;

    ${media.lessThan("medium")`
        text-align: center;
    `}
`

const CaseStudies = (props) => (

    <div>
        <FontFace />
        <Nav />
        <NavMobile />
        <Helmet
            title="Case Studies - Lanyon"
            meta={[
                { name: 'description', content: 'Case studies from Lanyon - Belfast based PR and communications firm, specialising in strategic communications, reputation management and stakeholder engagement' },
                { name: 'keywords', content: 'communications, reputation, press, stakeholder, belfast, marketing, pr, media, design, video' },
            ]}
        >
        <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Symbol"></script>
          <html lang="en" />
        </Helmet>
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
                        <Url to="/statsports/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.SSCover.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>STATSports</CaseStudyTitle>
                                
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
                                
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        <Url to="/mipim2019/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.MIPIM19Cover.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>Belfast at MIPIM 2019</CaseStudyTitle>
                                
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        <Url to="/outlook/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.NIMOPanel.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>CBRE NI Real Estate Market Outlook</CaseStudyTitle>
                                
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        <Url to="/rorybest/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.RBCover.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>Rory Best - Freedom of the Borough</CaseStudyTitle>
                                
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        <Url to="/innovation-nation2018/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.INCrowd.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>Innovation Nation</CaseStudyTitle>
                                
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        <Url to="/mipim2018/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.MIPIMCover.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>Belfast at MIPIM 2018</CaseStudyTitle>
                                
                            </ThreeColumnTextContainer>
                        </Url>
                    </ThreeColumnContainer>

                    <ThreeColumnContainer>
                        <Url to="/nie/">
                            <ThreeColumnImgContainer>
                                <CaseStudyImg fluid={props.data.NIEImg.childImageSharp.fluid} />
                            </ThreeColumnImgContainer>
                            <ThreeColumnTextContainer>
                                <CaseStudyTitle>NIE Networks</CaseStudyTitle>
                                
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
                    <SectionColouredSubtitleLeft>Interested in how we can support your project?</SectionColouredSubtitleLeft>
                    <ParagraphLight>
                    At Lanyon we are always interested in collaborating with likeminded people. If you are interested in hearing more about Lanyon and how we can support your organisation or project, get in touch with our Partners today.
                    </ParagraphLight>
                    <Url to="/contact">
                        <ContactButtonLight>Get in touch</ContactButtonLight>
                    </Url>
                </CenterThreeContainer>
            </Container>
        </SectionColoured>
    </div>

)

export default CaseStudies

export const query = graphql`
    query {

            INCrowd: file(relativePath: { eq: "case-studies/InnovationNation18/INCrowd.jpg" }) {
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

            NIMOPanel: file(relativePath: { eq: "case-studies/NIMarketOutlook/NIMOPanel.jpg" }) {
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

            RBCover: file(relativePath: { eq: "case-studies/RoryBest/RB-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MIPIM19Cover: file(relativePath: { eq: "case-studies/MIPIM19/MIPIM19Cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIEImg: file(relativePath: { eq: "case-studies/NIE/pylon.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1400, cropFocus: CENTER, quality: 65 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `