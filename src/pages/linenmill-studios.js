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

const NoTopContainer = styled.div `
    margin: 0 auto;
    padding: 0 0 10rem;
    max-width: 90%;
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

const GallerySlide = styled.div `
    height: 40vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
`
const GallerySlideImg = styled(Img) `
    height: 100%;
    min-width: 850px;
    
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
    padding: 5rem 5rem 0;
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
    margin-bottom: 0;
`

const ContactButton = styled.button `
    background: #004655;
    color: #FFF;
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

const VideoContainer = styled.div `
    display: flex;
    width: 100%;
`

const StatWrapper = styled.div ` // Same as about page services
    display: flex;
    flex: 12 1 0%;
    justify-content: space-between;
    // margin-right: 5rem; Different from index (needs removed)
    flex-wrap: wrap;
`

const StatContainer = styled.div ` // Same as about page services
    flex: 12 1 23.5%; // Different from index
    // width: 23.5%; Different from index (to be removed)
    margin-bottom: 0rem; // Different from about (to be removed)
    margin-right: 2%;

    &:nth-child(4n) {
        margin-right: 0;
    } // Different from index

    &:nth-child(n+4) {
        margin-bottom: 0;
    } // Different from index

    ${media.lessThan("medium")`
        margin-bottom: 5rem;
        
        &:nth-child(n+4) {
            margin-bottom: 5rem;
        }
    `}
`

const StatHeadline = styled.h3 ` // Same as about page services
    font-size: 5rem;
    color: #FFF;
    font-weight: 100;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2.5rem;
`

const StatText = styled.p `
    font-size: 2rem;
    color: #FFF;
    font-weight: 400;
    margin: 0 auto;
    text-align: center;
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
    height: 50vh;
`

const CaseStudyLinenMill = (props) => (

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
                fluid={props.data.LMCover.childImageSharp.fluid} />
        </HeaderWrapper>
        <Section>
            <Container>
                <CaseStudyIntroWrapper>
                    <CaseStudyIntroContainer>
                        <SectionTitleLeft>Linen Mill Studios / Game of Thrones</SectionTitleLeft> {/* get from index */}
                        <CaseStudyInfoContainer>
                            <InfoTitle>Brief</InfoTitle>
                            <InfoText>
                                Highlight HBO’s Game of Thrones tour at Linen Mill Studios
                                <br /><br />
                                Maximise media coverage of the announcement
                                <br /><br />
                                Co-ordinate communication with HBO and other stakeholders
                            </InfoText>
                            <InfoTitle>Client</InfoTitle>
                            <InfoText>Linen Mill Studios</InfoText>
                        </CaseStudyInfoContainer>
                        <CaseStudyDescriptionContainer>
                            <CaseStudyDescription>
                                We were tasked with highlighting HBO’s decision to locate the formal studio tour for Game of Thrones at Linen Mill Studios in Banbridge, County Down, Northern Ireland, to a global audience. 
                                <br /><br />
                                The move comes after Game of Thrones filming ended and our involvement focused on maximising news coverage around the decision that the Banbridge studios will take centre stage as part of a legacy investment which will also see other filming sites opened up to the public.
                                <br /><br />
                                We were tasked with relaying the news in a positive fashion, not just to the media but to all stakeholders involved in the project including councils, local residents, tourism organisations and government.
                                <br /><br />
                                In addition, we had to ensure co-ordination with HBO to make sure our announcements were released in tandem and in line with its strict brand guidelines. 
                                <br /><br />
                                Those guidelines meant that media filming and other content had to be strictly monitored by Lanyon at the site.
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
                <StatWrapper>
                <StatContainer>
                    <StatHeadline>34</StatHeadline>
                    <StatText>pieces of coverage</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>800m</StatHeadline>
                    <StatText>online readership</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>818,000</StatHeadline>
                    <StatText>estimated coverage views</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>16,200 </StatHeadline>
                    <StatText>social shares</StatText>
                </StatContainer>
                </StatWrapper>
            </Container>
        </SectionColoured>
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Strategy &amp; Tactics</SectionSubtitleLeft>
                <CaseStudyDescription>
                    Working in conjunction with the various stakeholders, Lanyon handled all media communications around the company’s plans to base a multi-million-pound studio tour at the site which had been used as a film location by Game of Thrones for the last eight years. 
                    <br /><br />
                    As well as drafting statements and key messaging, we reached out to an extensive media contact list to spread news of the development across the globe.
                </CaseStudyDescription>
            </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <SectionImg fluid={props.data.LMNightKingImg.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Outcomes</SectionSubtitleLeft>
                    <CaseStudyDescription>
                        Lanyon organised and attended interviews on location with major media organisations including BBC, RTE and ITV, securing a wealth of positive broadcast coverage, drafting messaging documents for interviewees and working closely to prepare them for the camera. 
                        <br /><br />
                        Print, online and social media coverage stretched across the globe including HuffPostUS, Time Magaine, The Telegraph, The Sun, Daily Mail, Lonely Planet, Conde Naste Traveller, Philippine Star, Business Insider and a host of others.
                    </CaseStudyDescription>
                </CenterThreeContainer>
            </Container>
                <Carousel slidesToShow={2.5} cellSpacing={50} slidesToScroll={0.5} edgeEasing="easeQuadInOut" edgeEasing="easeQuadInOut" renderBottomCenterControls={false} wrapAround={true}>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.LMCar1Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.LMCar2Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            frameOverflow
                            fluid={props.data.LMCar3Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.LMCar4Img.childImageSharp.fluid} />
                    </GallerySlide>
                </Carousel>
        </Section>

        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>The Future</SectionSubtitleLeft>
                <CaseStudyDescription>
                    Lanyon continue to work with Linen Mill Studios and will be at the heart of the development of HBO’s Game of Thrones studio tour as it is progresses over the next few months.
                </CaseStudyDescription>
            </CenterThreeContainer>
            </Container>
        </Section>

        <Section>
            <SectionImg fluid={props.data.LMStarks.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Interested in working with us?</SectionSubtitleLeft>
                    <CaseStudyDescription>
                    At Lanyon we know how to spread the word about the great work your company is doing to a wider audience. Drop us a line or give us a call to hear how we can help you.
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
                    fluid={props.data.SSCover.childImageSharp.fluid} />
                    <Container>
                            <CaseStudyTitle>STATSports</CaseStudyTitle>
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
                    fluid={props.data.INCover.childImageSharp.fluid} />
                    <Container>
                            <CaseStudyTitle>Innovation Nation 2018</CaseStudyTitle>
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

export default CaseStudyLinenMill

export const query = graphql`
    query {

            LMNightKingImg: file(relativePath: { eq: "case-studies/LinenMill/NightKing.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1000, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            LMStarks: file(relativePath: { eq: "case-studies/LinenMill/LMStarks.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1400, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

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

            LMCar1Img: file(relativePath: { eq: "case-studies/LinenMill/LMCar1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            LMCar2Img: file(relativePath: { eq: "case-studies/LinenMill/LMCar2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            LMCar3Img: file(relativePath: { eq: "case-studies/LinenMill/LMCar3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            LMCar4Img: file(relativePath: { eq: "case-studies/LinenMill/LMCar4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `