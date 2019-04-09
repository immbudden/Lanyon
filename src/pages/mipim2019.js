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
import CaseStudyCarousel from '../components/caseStudyCarousel';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ReactPlayer from 'react-player';

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

    ${media.lessThan("medium")`
        padding: 5rem 0;
    `}
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
    text-shadow: 2px 2px 8px rgba(34,34,34,0.5);

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

    ${media.lessThan("medium")`
        max-width: 100%;
        padding: 2.5rem 2.5rem 0;
    `}
`

const CaseStudyInfoContainer = styled.div `
    flex: 1 1 18%;
    margin-right: 2.5%;

    ${media.lessThan("medium")`
        flex: 1 1 100%;
    `}
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

    ${media.lessThan("medium")`
        align-items: center;
    `}
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
    background: #FFD400;
    color: #FFF;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    text-transform: uppercase;
    margin-top: 2.5rem;
    cursor: pointer;

    ${media.lessThan("medium")`
        margin-top: 5rem;
    `}
`

const SectionColoured = styled.div `
    background: #FFD400;
`

const CenterThreeContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
    margin: 0 auto;
    width: 59%;

    ${media.lessThan("medium")`
        width: 100%;
        justify-content: center;
    `}
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
        flex: 12 1 45%;
        margin-bottom: 5rem;
        margin-right: 5%;

        &:nth-child(2n) {
            margin-right: 0;
        }
        
        &:nth-child(n+4) {
            margin-bottom: 0rem;
        }

        &:nth-child(2n+1) {
            margin-bottom: 0rem;
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

const PeopleContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    position: relative;
    justify-content: flex-end;
    margin-top: 7.5rem;

    ${media.lessThan("medium")`
        margin-top: 5rem;
    `}
`

const PersonContainer = styled.div ` // From as about
    display: flex;
    flex: 1 0 22.5%; // Different
    height: 40rem;
    margin-right: 2.5%; // Different
    position: relative;
    overflow: hidden;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;

    ${media.lessThan("medium")`
        flex: 1 1 100%;
        margin-right: 0;
        margin-bottom: 5rem;

        &:last-child {
            margin-bottom: 2.5rem;
        }
    `}
`


const PersonImg = styled(Img) `
    height: 100%;
    width: 100%;
`

const PersonInfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 2;
    background: #FFF; // Different
`

const PersonName = styled.p `
    font-size: 1.5rem;
    color: #222;
    padding: 1rem;
    padding-bottom: 0; // Different
    margin-bottom: 0rem; // Different
`

const PersonTitle = styled.p `
    font-size: 1.5rem;
    color: #222;
    padding: 1rem;
    padding-top: 0; // Different
    margin-bottom: 0;
    font-weight: 100; // Different
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
        width: 100%;
        justify-content: center;
    `}
`

const SectionImg = styled(Img) `
    width: 100%;
    min-height: 50vh;
    height: 50vh;
`

const Url = styled(Link) `
    text-decoration: none;
`

const CarouselNav = styled.button `
    background: #FFF;
    opacity: 0.25;
    border: none;
    padding: 5.25rem 1.5rem 5rem;
    transition: all 0.5s linear;

    &:hover {
        opacity: 0.8;
    }

`

const Video = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: 5rem;
`

const Player = styled(ReactPlayer)`

`

const StyledCarousel = styled(Carousel) `
    display: block!important;

    ${media.lessThan("medium")`
        display: none!important;
    `}
`

const MobileCarousel = styled(Carousel) `
    display: none!important;

    ${media.lessThan("medium")`
        display: block!important;
    `}
`

const CaseStudyMIPIM = (props) => (

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
                fluid={props.data.MIPIM19Cover.childImageSharp.fluid} />
        </HeaderWrapper>
        <Section>
            <Container>
                <CaseStudyIntroWrapper>
                    <CaseStudyIntroContainer>
                        <SectionTitleLeft>Belfast at MIPIM 2019</SectionTitleLeft> {/* get from index */}
                        <CaseStudyInfoContainer>
                            <InfoTitle>Brief</InfoTitle>
                            <InfoText>
                                Position Belfast as an investment ready city to an international audience at the world’s largest real estate conference.
                                <br /><br />
                                Showcase the city as an outstanding location in which to live, work, learn, visit and invest.
                                <br /><br />
                                Develop a strong public/private partnership across the city.
                            </InfoText>
                            <InfoTitle>Client</InfoTitle>
                            <InfoText>Belfast City Council</InfoText>
                        </CaseStudyInfoContainer>
                        <CaseStudyDescriptionContainer>
                            <CaseStudyDescription>
                                Following successful trips in March 2016, 2017 and 2018, Belfast returned to MIPIM, the world’s largest international property investment conference, in March 2019.
                                <br /><br />
                                Lanyon was, once again, appointed through a competitive tender process to manage the entire project from start to finish.
                                <br /><br />
                                We were responsible for developing and delivering the full Belfast MIPIM 2019 programme, including: Programme Management, Sponsorship, Design &amp; Creative Management, Investor Targeting, Event management, PR &amp; Communications Management.
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
                    <StatHeadline>8.8m</StatHeadline>
                    <StatText>Twitter impressions</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>100</StatHeadline>
                    <StatText>strong delegation</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>30</StatHeadline>
                    <StatText>events pre, during and post-MIPIM</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>40</StatHeadline>
                    <StatText>speakers during MIPIM</StatText>
                </StatContainer>
                </StatWrapper>
            </Container>
        </SectionColoured>
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>End-to-end Event &amp; Programme Management </SectionSubtitleLeft>
                <CaseStudyDescription>
                    Lanyon secured 40 speakers – from local stakeholders to internationally acclaimed placemaking experts – to deliver content at MIPIM and worked with all of them to facilitate their requirements in terms of travel, accommodation, logistics and presentations/content.
                    <br /><br />
                    We delivered 30 events during the campaign, including two pre-MIPIM events and a post-MIPIM wrap-up event in Belfast, as well as over 20 events in Cannes. This included collaborating with Daniel Libeskind, one of the world’s most respected architects. Daniel is renowned for the Jewish Museum in Berlin, the extension of the Denver Art Museum, the Grand Canal Theatre in Dublin and a host of other landmark buildings, as well as being the masterplan architect for the reconstruction of the World Trade Centre site. He shared his views on the future for Belfast as a place to live, work and play, shining a light on the importance of cultural attractions in forming a rounded, vibrant, welcoming city.    
                    <br /><br />
                    We also worked alongside the six partner councils which form part of the Belfast Region City Deal to hear about their collective plans as part of the deal and the impact they expect it to have in their respective areas.
                </CaseStudyDescription>
                <Video> 
                    <Player 
                        url='https://youtu.be/n64r0BGX8O4?vq=hd720'
                        width='100%'
                        height='50vh'
                        controls={true}
                    />
                </Video>
            </CenterThreeContainer>
                <PeopleContainer>
                    <PersonContainer>
                        <PersonImg 
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                zIndex: 0,
                            }}
                                fluid={props.data.DLImg.childImageSharp.fluid}
                        />
                        <PersonInfoWrapper>
                            <PersonName>Daniel Libeskind</PersonName>
                            <PersonTitle>Founder &amp; Principal, Studio Libeskind</PersonTitle>
                        </PersonInfoWrapper>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImg 
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                zIndex: 0,
                            }}
                                fluid={props.data.TBImg.childImageSharp.fluid}
                        />
                        <PersonInfoWrapper>
                            <PersonName>Tom Bloxham MBE</PersonName>
                            <PersonTitle>Founder &amp; Chair, Urban Splash</PersonTitle>
                        </PersonInfoWrapper>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImg 
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                zIndex: 0,
                            }}
                                fluid={props.data.CRImg.childImageSharp.fluid}
                        />
                        <PersonInfoWrapper>
                            <PersonName>Chris Roberts</PersonName>
                            <PersonTitle>Chief Development Officer, Bruntwood</PersonTitle>
                        </PersonInfoWrapper>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImg 
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                zIndex: 0,
                            }}
                                fluid={props.data.BRCDImg.childImageSharp.fluid}
                        />
                        <PersonInfoWrapper>
                            <PersonName>Council Members</PersonName>
                            <PersonTitle>Belfast Region City Deal Partners</PersonTitle>
                        </PersonInfoWrapper>
                    </PersonContainer>
                </PeopleContainer>
            </Container>
        </Section>
        <Section>
            <NoTopContainer>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Stakeholder Management</SectionSubtitleLeft>
                <CaseStudyDescription>
                    Lanyon secured the support of 35 private and public sector partners, as well as helping facilitate their needs whilst at MIPIM. We also collaborated with Belfast City Council to identify investors, developers and occupiers and set up meetings with them.
                </CaseStudyDescription>
            </CenterThreeContainer>
            </NoTopContainer>
        </Section>
        <Section>
            <SectionImg fluid={props.data.StandImg.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Design &amp; Creative Management</SectionSubtitleLeft>
                    <CaseStudyDescription>
                        Lanyon implemented the city’s ‘starburst’ look and feel across the project, as well as managing the design of the 100m<sup>2</sup> Belfast stand and all other associated branded collateral, including a 90-page investment guide. We also worked alongside Tourism NI to develop a bespoke platform which would allow each of the Belfast Region City Deal partners to showcase their investment proposition in an interactive manner. 
                    </CaseStudyDescription>
                </CenterThreeContainer>
            </Container>

            <StyledCarousel slidesToShow={2.5} cellSpacing={50} slidesToScroll={1} easing="easeCubicIn" edgeEasing="easeCubicIn" renderBottomCenterControls={null} wrapAround={true}

                    renderCenterLeftControls={({ previousSlide }) => (
                        <CarouselNav onClick={previousSlide}><ArrowBackIos /></CarouselNav>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <CarouselNav onClick={nextSlide}><ArrowForwardIos /></CarouselNav>
                    )}
                
                >
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.MIPIM19Car1Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.MIPIM19Car2Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            frameOverflow
                            fluid={props.data.MIPIM19Car3Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.MIPIM19Car4Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.MIPIM19Car5Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.MIPIM19Car6Img.childImageSharp.fluid} />
                    </GallerySlide>
                </StyledCarousel>

                <MobileCarousel slidesToShow={1.5} cellSpacing={25} slidesToScroll={1} easing="easeCubicIn" edgeEasing="easeCubicIn" renderBottomCenterControls={null} wrapAround={true}

                    renderCenterLeftControls={({ previousSlide }) => (
                        <CarouselNav onClick={previousSlide}><ArrowBackIos /></CarouselNav>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <CarouselNav onClick={nextSlide}><ArrowForwardIos /></CarouselNav>
                    )}
                
                >
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.MIPIM19Car1Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.MIPIM19Car2Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            frameOverflow
                            fluid={props.data.MIPIM19Car3Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.MIPIM19Car4Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.MIPIM19Car5Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.MIPIM19Car6Img.childImageSharp.fluid} />
                    </GallerySlide>
                </MobileCarousel>

        </Section>

        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>PR &amp; Communications Management</SectionSubtitleLeft>
                <CaseStudyDescription>
                    Lanyon developed a large output of message-rich communication materials for media and non-media purposes. 
                    <br /><br />
                    Media coverage was achieved across local and international print, broadcast and online outlets, including business and specialist trade media. A large volume of social media content was developed by Lanyon, underpinned by high-quality photography and video content.
                </CaseStudyDescription>
            </CenterThreeContainer>
            </Container>
        </Section>

        {/* <Section>
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
        </Section> */}
        <Section>
            <SectionImg fluid={props.data.BCCMainImg.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Interested in how we can support your project?</SectionSubtitleLeft>
                    <CaseStudyDescription>
                        At Lanyon we are always interested in collaborating with likeminded people. If you are interested in hearing more about Lanyon and how we can support your organisation or project, get in touch with our Partners today.
                    </CaseStudyDescription>
                    <Url to="/contact">
                        <ContactButton>Get in touch</ContactButton>
                    </Url>
                </CenterThreeContainer>
            </Container>
        </Section>
        <Section id="caseStudies">
            <CaseStudyCarousel />
        </Section>
        <NavMobile />
    </div>

)

export default CaseStudyMIPIM

export const query = graphql`
    query {

            BCCMainImg: file(relativePath: { eq: "case-studies/MIPIM19/BCCMain.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1000, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            StandImg: file(relativePath: { eq: "case-studies/MIPIM19/Stand.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1000, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MIPIM19Cover: file(relativePath: { eq: "case-studies/MIPIM19/MIPIM19Cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, cropFocus: ENTROPY, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            DLImg: file(relativePath: { eq: "case-studies/MIPIM19/DanielLibeskind.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            TBImg: file(relativePath: { eq: "case-studies/MIPIM19/TomBloxham.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            CRImg: file(relativePath: { eq: "case-studies/MIPIM19/ChrisRoberts.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            BRCDImg: file(relativePath: { eq: "case-studies/MIPIM19/BRCD.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MIPIM19Car1Img: file(relativePath: { eq: "case-studies/MIPIM19/Car1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 950, quality: 85, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MIPIM19Car2Img: file(relativePath: { eq: "case-studies/MIPIM19/Car2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 950, quality: 85, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MIPIM19Car3Img: file(relativePath: { eq: "case-studies/MIPIM19/Car3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 950, quality: 85, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MIPIM19Car4Img: file(relativePath: { eq: "case-studies/MIPIM19/Car4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 950, quality: 85, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MIPIM19Car5Img: file(relativePath: { eq: "case-studies/MIPIM19/Car5.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 950, quality: 85, cropFocus: ENTROPY ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MIPIM19Car6Img: file(relativePath: { eq: "case-studies/MIPIM19/Car6.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 950, quality: 85, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `