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
import { Helmet } from 'react-helmet'

// To consolodate

const HeaderImg = styled(Img) `
    min-height: 100vh;

    ${media.lessThan("medium")`
        min-height: 75vh;
    `}
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
        font-size: 3.75rem; 
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

    ${media.lessThan("medium")`
        margin-top: -25rem;
    `}
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

const CaseStudyOutlook = (props) => (

    <div>
        <FontFace />
        <Nav />
        <NavMobile />
        <Helmet
            title='CBRE - NI Outlook | Lanyon'
            meta={[
                { name: 'description', content: 'Lanyon worked with CBRE on their annual NI Real Estate Market Outlook (NI Outlook) event' },
                { name: 'keywords', content: 'communications, reputation, investment, stakeholder, belfast, marketing, MIPIM, media, design, video' },
            ]}
        >
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          <html lang="en" />
        </Helmet>
        <HeaderWrapper>
            <HeaderImg style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
            }}
                fluid={props.data.NIMOPanelImg.childImageSharp.fluid} />
        </HeaderWrapper>
        <Section>
            <Container>
                <CaseStudyIntroWrapper>
                    <CaseStudyIntroContainer>
                        <SectionTitleLeft>CBRE NI Real Estate Market Outlook</SectionTitleLeft> {/* get from index */}
                        <CaseStudyInfoContainer>
                            <InfoTitle>Client</InfoTitle>
                            <InfoText>CBRE</InfoText>
                            <InfoTitle>Brief</InfoTitle>
                            <InfoText>
                                To showcase the real estate market in Northern Ireland and benchmark it against the rest of the UK to an audience of local influential business leaders
                                <br /><br />
                                To reinforce CBRE’s reputation in Northern Ireland as the market leader and ‘go to’ commercial property consultancy for both local and global research expertise
                            </InfoText>
                        </CaseStudyInfoContainer>
                        <CaseStudyDescriptionContainer>
                            <CaseStudyDescription>
                                Lanyon provides on-going full-service marketing communications support to CBRE in Northern Ireland, which includes strategic advice, reputation management consultancy, PR &amp; media liaison and stakeholder engagement, as well as event design, management and delivery. 
                                <br /><br />
                                This includes the delivery of CBRE’s annual NI Real Estate Market Outlook (NI Outlook) event. When Lanyon began working with CBRE, their research and expertise went largely unnoticed in the local market as it was not being used in a way to differentiate CBRE from their competitors. We spent time and significant effort on interpreting their data and research, establishing the key interest points for various audiences and presenting it a number of different platforms. A good example of this is NI Outlook, which before we began working with CBRE, attracted only 70 – 80 people annually. 
                                <br /><br />
                                NI Outlook is now a much sought-after business event for major players and stakeholders in the real estate world in Northern Ireland. NI Outlook now attracts around 500 people each year, at an event held in the ICC Belfast (Waterfront Hall). At the event in 2018 alone, Lanyon secured over 50 units of media coverage and 16.8k Twitter impressions on behalf of CBRE.
                                <br /><br />
                                We continue to work with CBRE, building on the many successes we have delivered with them over our four-year working relationship. This reflects our ability to develop long-term working relationships with clients based on the successful delivery of key strategic projects.
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
                    <StatHeadline>16,800</StatHeadline>
                    <StatText>Twitter impressions</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>500</StatHeadline>
                    <StatText>high-profile attendees</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>55</StatHeadline>
                    <StatText>pieces of coverage</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>1</StatHeadline>
                    <StatText>ten minute documentary produced</StatText>
                </StatContainer>
                </StatWrapper>
            </Container>
        </SectionColoured>
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Event design, management &amp; delivery</SectionSubtitleLeft>
                <CaseStudyDescription>
                    In order to deliver a busy and engaging programme on behalf of CBRE, we identify and engage with a number of relevant speakers, for example, freelance innovation and cyber security expert Olly Rees; Will Church, the Senior Director in charge of managing the Northern Ireland Investment Fund; and Deloitte NI’s Senior Partner Jackie Henry.
                    <br /><br />
                    We also assume the end-to-end management of areas including design and branding, AV and tech requirements, catering, registration and co-ordination of presentations and speakers’ content. 
                </CaseStudyDescription>
                <Video> 
                    <Player 
                        url='https://youtu.be/v-BVAmwdqwA?vq=hd720'
                        width='100%'
                        height='50vh'
                        controls={true}
                    />
                </Video>
            </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <SectionImg fluid={props.data.NIMarketOutlookCover.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>PR &amp; Communications</SectionSubtitleLeft>
                    <CaseStudyDescription>
                        The event brought with it a significant amount of media interest and attendance, so we assumed all media liaison before, during and after the event, which included providing all written materials and facilitating media interviews.
                        <br /><br />
                        In 2018 alone, Lanyon secured over 50 units of media coverage across print, online, broadcast and specialist trade media publications in the UK &amp; Ireland.
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
                            fluid={props.data.NIMOCar1Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.NIMOCar2Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            frameOverflow
                            fluid={props.data.NIMOCar3Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.NIMOCar4Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.NIMOCar5Img.childImageSharp.fluid} />
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
                            fluid={props.data.NIMOCar1Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.NIMOCar2Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            frameOverflow
                            fluid={props.data.NIMOCar3Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.NIMOCar4Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.NIMOCar5Img.childImageSharp.fluid} />
                    </GallerySlide>
                </MobileCarousel>
        </Section>

        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Research &amp; Market Intelligence</SectionSubtitleLeft>
                <CaseStudyDescription>
                    Lanyon supported CBRE in the market intelligence and research required to establish a detailed database of key stakeholders and influencers for NI Outlook. This involved working closely with CBRE London as well as carrying out wider market research to augment the internal CBRE network as well.
                    <br /><br />
                    We also spent considerable time and significant effort interpreting CBRE’s central data and research, translating the key interest points for various audiences and presenting it to a number of different platforms.
                </CaseStudyDescription>
            </CenterThreeContainer>
            </Container>
        </Section>

        <Section>
            <SectionImg fluid={props.data.NIMOSpeakerImg.childImageSharp.fluid} />
        </Section>

        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Documentary Production</SectionSubtitleLeft>
                <CaseStudyDescription>
                    Lanyon developed a 10-minute documentary showcasing Belfast, which premiered at NI Outlook in 2018. The documentary was narrated and lead by ITN’s John Irvine, who gave his take on the positive transformation of Belfast – the city in which he grew up – twenty years after leaving the city. It also featured some of Northern Ireland’s business leaders from across the commercial property and tourism sectors. 
                </CaseStudyDescription>
                <Video> 
                    <Player 
                        url='https://youtu.be/-O2eNHmCNrU?vq=hd720'
                        width='100%'
                        height='50vh'
                        controls={true}
                    />
                </Video>
            </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <SectionImg fluid={props.data.NIMOCrowdImg.childImageSharp.fluid} />
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
    </div>

)

export default CaseStudyOutlook

export const query = graphql`
    query {

            NIMOSpeakerImg: file(relativePath: { eq: "case-studies/NIMarketOutlook/NIMOSpeaker.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1200, cropFocus: ENTROPY ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCrowdImg: file(relativePath: { eq: "case-studies/NIMarketOutlook/NIMOCrowd.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1200, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMarketOutlookCover: file(relativePath: { eq: "case-studies/NIMarketOutlook/NIMO-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1200, cropFocus: NORTH, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOPanelImg: file(relativePath: { eq: "case-studies/NIMarketOutlook/NIMOPanel.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, cropFocus: CENTER, quality: 75 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCar1Img: file(relativePath: { eq: "case-studies/NIMarketOutlook/NIMOSpeaker2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCar2Img: file(relativePath: { eq: "case-studies/NIMarketOutlook/NIMOCar2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCar3Img: file(relativePath: { eq: "case-studies/NIMarketOutlook/NIMOCar3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCar4Img: file(relativePath: { eq: "case-studies/NIMarketOutlook/NIMOCar4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCar5Img: file(relativePath: { eq: "case-studies/NIMarketOutlook/NIMOCar5.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `