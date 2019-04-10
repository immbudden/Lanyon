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
        <HeaderWrapper>
            <HeaderImg style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
            }}
                fluid={props.data.RBCover.childImageSharp.fluid} />
        </HeaderWrapper>
        <Section>
            <Container>
                <CaseStudyIntroWrapper>
                    <CaseStudyIntroContainer>
                        <SectionTitleLeft>Rory Best - Freedom of the Borough</SectionTitleLeft> {/* get from index */}
                        <CaseStudyInfoContainer>
                            <InfoTitle>Brief</InfoTitle>
                            <InfoText>
                                Maximise media coverage of Rory Best’s Freedom of the Borough
                                <br /><br />
                                Secure BBC documentary
                                <br /><br />
                                Co-ordinate and compile content from council, IRFU, Rory Best and former and current players
                            </InfoText>
                            <InfoTitle>Client</InfoTitle>
                            <InfoText>Armagh City, Banbridge and Craigavon Borough Council</InfoText>
                        </CaseStudyInfoContainer>
                        <CaseStudyDescriptionContainer>
                            <CaseStudyDescription>
                                Armagh City, Banbridge and Craigavon Borough Council tasked us with maximising and managing coverage of the council’s conferment of the Freedom of the Borough on Ireland and Ulster Rugby Captain Rory Best.
                                <br /><br />
                                We were asked to raise awareness in the runup to, during and after an event to confer the honour in Armagh Palace. That included securing a half hour documentary with a major television network.
                                <br /><br />
                                Lanyon were also tasked with publicising a mini rugby event being held in Rory Best’s honour at City of Armagh Rugby Club in an effort to help drive footfall to it and to an exhibition of memorabilia.
                                <br /><br />
                                In addition, we were charged with providing video testimonials from former players for a video presentation to be shown at the event and interviews to be taken during it.
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
                    <StatHeadline>42</StatHeadline>
                    <StatText>pieces of coverage</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>678</StatHeadline>
                    <StatText>online readership</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>1.1m</StatHeadline>
                    <StatText>estimated coverage views</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>970</StatHeadline>
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
                    To raise awareness of the event we arranged an eye-catching photograph of Rory Best with the Lord Mayor and a herd of sheep on Armagh mall to highlight the tradition that those conferred with the Freedom of the Borough honour can graze their sheep on the borough’s land.
                    <br /><br />
                    We arranged a further shoot with Rory Best along with a member of each of the mini rugby teams who would be taking part in the competition and communicated with rugby journalists throughout the island of Ireland and beyond.
                    <br /><br />
                    In addition, Lanyon filmed, produced and compiled a video testimonial which included past and former players including Syd Millar, Willie-John McBride and Tommy Bowe, as well as a booklet with written testimonial from senior council members and Ireland rugby coach Joe Schmidt.
                </CaseStudyDescription>
                    <Video> 
                        <Player 
                            url='https://youtu.be/Gc9eDR3ZsOY?vq=hd720'
                            width='100%'
                            height='50vh'
                            controls={true}
                        />
                    </Video>
            </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <SectionImg fluid={props.data.MemorabiliaImg.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Outcomes</SectionSubtitleLeft>
                    <CaseStudyDescription>
                        We achieved coverage across all media in Northern Ireland and the Republic including The Times, BBC, UTV Irish Times, Belfast Telegraph, Irish News and a host of local papers, facilitating interviews in the run up to, during and after the event.
                        <br /><br />
                        Lanyon secured a documentary with the BBC which included footage of the Freedom of the Borough event as well as of the memorabilia exhibition in Armagh Palace.
                        <br /><br />
                        And there was capacity attendance by the public at the mini rugby event which proved a huge success for the council.
                    </CaseStudyDescription>
                </CenterThreeContainer>
            </Container>
{/*             
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
                            fluid={props.data.SSCar1Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.SSCar2Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.SSCar3Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.SSCar4Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.SSCar5Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.SSCar6Img.childImageSharp.fluid} />
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
                            fluid={props.data.SSCar1Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.SSCar2Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.SSCar3Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.SSCar4Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.SSCar5Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.SSCar6Img.childImageSharp.fluid} />
                    </GallerySlide>
                </MobileCarousel> */}

        </Section>

        <Section>
            <SectionImg fluid={props.data.RorySheepImg.childImageSharp.fluid} />
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
            <CaseStudyCarousel/>
        </Section>
        <NavMobile />
    </div>

)

export default CaseStudyStatSports

export const query = graphql`
    query {

            MemorabiliaImg: file(relativePath: { eq: "case-studies/RoryBest/Memorabilia.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1400, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            RorySheepImg: file(relativePath: { eq: "case-studies/RoryBest/RorySheep.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1200, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            RBCover: file(relativePath: { eq: "case-studies/RoryBest/RB-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, cropFocus: SOUTH, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            
        }
    `