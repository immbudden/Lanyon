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
                fluid={props.data.SSCover.childImageSharp.fluid} />
        </HeaderWrapper>
        <Section>
            <Container>
                <CaseStudyIntroWrapper>
                    <CaseStudyIntroContainer>
                        <SectionTitleLeft>STATSports</SectionTitleLeft> {/* get from index */}
                        <CaseStudyInfoContainer>
                            <InfoTitle>Client</InfoTitle>
                            <InfoText>STATSports</InfoText>
                            <InfoTitle>Brief</InfoTitle>
                            <InfoText>
                                Implement communications strategy to increase awareness of STATSports' performance monitoring technology
                                <br /><br />
                                To drive awareness of both its elite and consumer products
                                <br /><br />
                                Highlight STATSports’ compelling investment proposition
                            </InfoText>
                        </CaseStudyInfoContainer>
                        <CaseStudyDescriptionContainer>
                            <CaseStudyDescription>
                                Working closely with the senior leadership team, we focused on growing sales of STATSports unique sports performance monitoring technology by driving awareness of both its elite and consumer product.
                                <br /><br />
                                Given the nature of the product’s customer base, we were tasked with improving communication about the product with the major elite field sports teams from football, rugby, AFL, GAA, hockey around the world, with particular emphasis on the US market. That included contract announcements of STATSports deals with US Soccer, the Brazil Soccer Federation, the China Football Association and the Irish Rugby Football Union amongst others. 
                                <br /><br />
                                We were also tasked with handling communications around the launch of STATSports’ APEX Athlete Series, one aimed at consumers keen to track their performance in a similar manner to the professionals.
                                <br /><br />
                                In addition, we were asked to raise awareness of the company with potential investors and other stakeholders by highlighting the underlying strength and potential of this fast-growing, exciting company. 
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
                    <StatHeadline>66</StatHeadline>
                    <StatText>pieces of coverage (US Soccer announcement)</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>967m</StatHeadline>
                    <StatText>online readers (US Soccer announcement)</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>907,000</StatHeadline>
                    <StatText>coverage views (Chinese Football Association announcement)</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>41</StatHeadline>
                    <StatText>pieces of coverage (job expansion announcement)</StatText>
                </StatContainer>
                </StatWrapper>
            </Container>
        </SectionColoured>
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Strategy &amp; Tactics</SectionSubtitleLeft>
                <CaseStudyDescription>
                    We developed a key messaging document and schedule of news releases built around the company’s strategy, one which would coincide with major milestones. 
                    Lanyon compiled content – including copy, photography and videography – and produced messaging documents for interviewees at the company, organised and hosted interviews.
                    <br /><br />
                    We also worked in conjunction with Invest NI to highlight the company’s expansion and plans to create 237 new jobs over the next three years, hosting the Secretary of State Karen Bradley for an official press announcement.
                </CaseStudyDescription>
                <Video> 
                    <Player 
                        url='https://youtu.be/nO78HOjDHKE?vq=hd720'
                        width='100%'
                        height='50vh'
                        controls={true}
                    />
                </Video>
            </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <SectionImg fluid={props.data.SSLAGalaxyImg.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Outcomes</SectionSubtitleLeft>
                    <CaseStudyDescription>
                        The result was a deep penetration of coverage for the company across all media – broadcast, online, radio, print and social – for contract wins, product reviews and a major job expansion. As well as achieving significant coverage with major global media organisations, we also ensured widespread coverage of the company’s success with local media to assist with hiring during its rapid expansion.
                        <br /><br />
                        Coverage included Forbes magazine, BBC, The Times, Irish Times, RTE, SportsPro Media, Wareable, and a host of others.
                        <br /><br />
                        A host of new contracts have been won with elite teams and sales of the consumer product have rocketed.
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
                </MobileCarousel>
        </Section>

        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>The Future</SectionSubtitleLeft>
                <CaseStudyDescription>
                    Lanyon continues to work with STATSports to raise awareness of the features and benefits of the product across the world as the company’s stellar growth moves on apace. On the horizon are further contract announcements with elite teams and news of the growth of the consumer product across the world.
                </CaseStudyDescription>
                <Video> 
                    <Player 
                        url='https://youtu.be/-OePPYQ5OXc?vq=hd720'
                        width='100%'
                        height='50vh'
                        controls={true}
                    />
                </Video>
            </CenterThreeContainer>
            </Container>
        </Section>

        <Section>
            <SectionImg fluid={props.data.SSConRugbyImg.childImageSharp.fluid} />
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
    </div>

)

export default CaseStudyStatSports

export const query = graphql`
    query {

            SSLAGalaxyImg: file(relativePath: { eq: "case-studies/StatSports/LAGalaxy.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1200, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            SSConRugbyImg: file(relativePath: { eq: "case-studies/StatSports/ConRugby.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1200, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            SSCover: file(relativePath: { eq: "case-studies/StatSports/SS-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            SSCar1Img: file(relativePath: { eq: "case-studies/StatSports/SSCar1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, maxHeight: 525, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            SSCar2Img: file(relativePath: { eq: "case-studies/StatSports/SSCar2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: ENTROPY ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            SSCar3Img: file(relativePath: { eq: "case-studies/StatSports/SSCar3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            SSCar4Img: file(relativePath: { eq: "case-studies/StatSports/SSCar4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            SSCar5Img: file(relativePath: { eq: "case-studies/StatSports/SSCar5.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            SSCar6Img: file(relativePath: { eq: "case-studies/StatSports/SSCar6.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `