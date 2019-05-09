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
        width: 90%;
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

    ${media.lessThan("medium")`
        height: 25vh;
    `}
`
const GallerySlideImg = styled(Img) `
    height: 100%;
    width: 100%;
    
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
    flex: 1 1 25.5%;
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
    text-align: justify;
`

const ContactButton = styled.button `
    background: #004655;
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
    background: #004655;
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

    ${media.lessThan("medium")`
        font-size: 1.8rem;
    `}
`


const SectionSubtitleLeft = styled.h3 `
    font-size: 4rem; 
    color: #222; 
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
    opacity: 0.35;
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

const CaseStudyStatSports = (props) => (

    <div>
        <FontFace />
        <Nav />
        <NavMobile />
        <HeaderWrapper>
            <HeaderImg style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
            }}
                fluid={props.data.PylonImg.childImageSharp.fluid} />
        </HeaderWrapper>
        <Section>
            <Container>
                <CaseStudyIntroWrapper>
                    <CaseStudyIntroContainer>
                        <SectionTitleLeft>Northern Ireland Electricity Networks</SectionTitleLeft> {/* get from index */}
                        <CaseStudyInfoContainer>
                            <InfoTitle>Client</InfoTitle>
                            <InfoText>Northern Ireland Electricity Networks</InfoText>
                            <InfoTitle>Brief</InfoTitle>
                            <InfoText>
                                Develop and deliver a multi-disciplinary internal communications and employee engagement strategy to support a major Transformation Change Programme within the business. 
                            </InfoText>
                        </CaseStudyInfoContainer>
                        <CaseStudyDescriptionContainer>
                            <CaseStudyDescription>
                                For the first time in its 100-year history, Northern Ireland Electricity Networks Ltd (NIE Networks) entered into a competitive, open market environment in March 2018 – having previously held the monopoly on the local market as the only distribution network organisation that could connect homes, schools, hospitals and businesses to the electricity network in Northern Ireland. 
                                <br /><br />
                                This would bring about a mammoth change to the way in which the Connections division within NIE Networks structured its business and the service it offers to hundreds of thousands of customers across the province every year.  This included a significant investment in modernising and digitising Connections’ systems and processes to make things much more streamlined and efficient for employees, and to improve the overall NIE Networks experience for the customer in today’s modern world.
                                <br /><br />
                                Lanyon was engaged to provide internal communications and employee engagement support across the Programme to prepare NIE Networks for its new operating environment.  A robust communications strategy was developed that ensured regular, consistent and informative communications to all employees throughout the 30-month duration of the Programme. 
                                <br /><br />
                                Interested in working on something similar? <Bold>Let’s chat about it.</Bold>
                            </CaseStudyDescription>
                            <Url to="/contact">
                                <ContactButton>Get in touch</ContactButton>
                            </Url>
                        </CaseStudyDescriptionContainer>
                    </CaseStudyIntroContainer>
                </CaseStudyIntroWrapper>
            </Container>
        </Section>
        <SectionColoured>
            <Container>
                <StatWrapper>
                <StatContainer>
                    <StatHeadline>300</StatHeadline>
                    <StatText>employees attended conferences</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>150</StatHeadline>
                    <StatText>focus group participants</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>30</StatHeadline>
                    <StatText>whole brain thinking profiles created</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>10</StatHeadline>
                    <StatText>videos produced</StatText>
                </StatContainer>
                </StatWrapper>
            </Container>
        </SectionColoured>
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Branding &amp; Collateral</SectionSubtitleLeft>
                <CaseStudyDescription>
                    <Bold>Branding</Bold>
                    <br />
                    We developed a bespoke campaign brand to ensure that all communications in relation to the Programme were clearly identifiable and fell under one consistent look and feel.  With the bright, attractive ‘Connecting People’ brand came two separate brand drivers to mark two distinct phases of the campaign: ‘Our Year of Change’ and ‘The Future is Now’.
                    <br /><br />
                    <Bold>Development of content and collateral</Bold>
                    <br />
                    Working with our appointed designer, Lanyon developed a large portfolio of branded assets to support the various stages of the Programme campaign – including a Behaviours Framework booklet which set out the mission, vision and values of Connections and the behaviours that would help the business achieve the objectives of the Programme. 
                </CaseStudyDescription>
            </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <SectionImg fluid={props.data.ConnectingImg.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Infographics &amp; Video Content</SectionSubtitleLeft>
                <CaseStudyDescription>
                    <Bold>Infographics</Bold>
                    <br />
                    Over the course of the campaign we worked with the senior management team and Programme Board in Connections to modernise and simplify their communications, ensuring that they were digital-friendly, engaging and easily digestible for employees. We steered away from text-heavy documents and presentations, instead introducing infographics as a much more clear, attractive and modern way of presenting information. Hundreds of infographics were developed in-house by Lanyon.  
                    <br /><br />
                    <Bold>Video strategy</Bold>
                    <br />
                    Throughout the Programme, the Connections business was required to communicate a wealth of important technical and legal information to its employees. To make this as easy to digest as possible, Lanyon developed a series of short, informative videos – all delivered by a wide range of employees at all levels within the business. These videos were played at employee briefings, were published on the internal intranet system and were also shown at the Connections employee engagement conferences.
                    </CaseStudyDescription>
            </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <SectionImg fluid={props.data.MapImg.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Employee Engagement</SectionSubtitleLeft>
                    <CaseStudyDescription>
                    Lanyon delivered two major employee engagement conferences for 300 employees in the business, at which the organisation’s directors and senior managers could set out its future and equip employees with crucially important information and training. 
                    <br /><br />
                    Lanyon undertook the end-to-end management of these events – including venue management (The Braid, Ballymena and The MAC, Belfast), catering, sound/AV and development of content/collateral. We also secured a range of high-profile motivational speakers for the events, including Mark Pollock, Chris Henry (Ulster &amp; Ireland Rugby) and Armagh-born NASA space expert Sinead O’Sullivan.
                    <br /><br />
                    <Bold>Employee engagement focus groups</Bold>
                    <br />
                    We worked with NIE Networks’ HR team to develop a programme of employee engagement focus groups, delivered by Lanyon across the organisation’s network of regional depots across Northern Ireland. 
                    </CaseStudyDescription>
                </CenterThreeContainer>
            </Container>
        </Section>
        <Section id="caseStudies">
            <CaseStudyCarousel/>
        </Section>
    </div>

)

export default CaseStudyStatSports

export const query = graphql`
    query {

            ConnectingImg: file(relativePath: { eq: "case-studies/NIE/ConnectingPeople.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1400, cropFocus: CENTER, quality: 95 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MapImg: file(relativePath: { eq: "case-studies/NIE/NIEmap.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1200, cropFocus: CENTER, quality: 95 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            PylonImg: file(relativePath: { eq: "case-studies/NIE/pylon.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1200, cropFocus: CENTER, quality: 65 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `