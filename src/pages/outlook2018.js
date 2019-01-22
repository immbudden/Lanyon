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

const PeopleContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    position: relative;
    justify-content: flex-end;
    margin-top: 7.5rem;
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
        width: 80%;
    `}
`

const SectionImg = styled(Img) `
    width: 100%;
    min-height: 50vh;
    height: 50vh;
`

const CaseStudyOutlook = (props) => (

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
                fluid={props.data.NIMarketOutlookCover.childImageSharp.fluid} />
        </HeaderWrapper>
        <Section>
            <Container>
                <CaseStudyIntroWrapper>
                    <CaseStudyIntroContainer>
                        <SectionTitleLeft>NI Market Outlook 2018</SectionTitleLeft> {/* get from index */}
                        <CaseStudyInfoContainer>
                            <InfoTitle>Brief</InfoTitle>
                            <InfoText>
                                Event Design, Management &amp; Delivery
                                <br />
                                PR &amp; Communications
                                <br />
                                Research &amp; Market intelligence
                            </InfoText>
                            <InfoTitle>Client</InfoTitle>
                            <InfoText>CBRE</InfoText>
                        </CaseStudyInfoContainer>
                        <CaseStudyDescriptionContainer>
                            <CaseStudyDescription>
                                Lanyon provides on-going full-service marketing communications support to CBRE in Northern Ireland, which includes strategic advice, reputation management consultancy, PR &amp; media liaison and stakeholder engagement, as well as event design, management and delivery. 
                                <br /><br />
                                This includes the delivery of CBRE’s annual NI Real Estate Market Outlook event, which in 2018 attracted an attendance of approximately 500 people in ICC Belfast (formerly known as Belfast Waterfront).
                                <br /><br />
                                As well as maximising the design and branding opportunities at NI Outlook 2018, overseeing the physical running of the event and organising all speakers and their content, Lanyon developed a 10-minute documentary showcasing Belfast, which premiered at the event. 
                                <br /><br />
                                The documentary was narrated and lead by ITN’s John Irvine, who gave his take on the positive transformation of Belfast – the city in which he grew up – twenty years after leaving the city. It also featured some of Northern Ireland’s business leaders from across the commercial property and tourism sectors.
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
                    <StatHeadline>16,800</StatHeadline>
                    <StatText>Twitter impressions</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>500</StatHeadline>
                    <StatText>event atendees</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>55</StatHeadline>
                    <StatText>pieces of coverage</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>XXX</StatHeadline>
                    <StatText>stat in here</StatText>
                </StatContainer>
                </StatWrapper>
            </Container>
        </SectionColoured>
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Event design, management &amp; delivery</SectionSubtitleLeft>
                <CaseStudyDescription>
                In order to deliver a busy and engaging programme, we identified and a number of relevant speakers – including freelance innovation and cyber security expert Olly Rees and Will Church, the Senior Director in charge of managing the Northern Ireland Investment Fund. 
                <br /><br />
                We also assumed the management of areas including co-ordination/design of invitations and RSVPs/guest registrations, as well as catering, staging and AV logistics.
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
                    <SectionSubtitleLeft>PR &amp; Communications</SectionSubtitleLeft>
                    <CaseStudyDescription>
                    The event brought with it a significant amount of media interest and attendance, so we assumed all media liaison before, during and after the event, which included providing all written materials and facilitating media interviews.
                    <br /><br />
                    We secured over 50 units of media coverage across print, online, broadcast and specialist trade media publications in the UK & Ireland, as well as 16.8k Twitter impressions on the day of the event alone.
                    </CaseStudyDescription>
                </CenterThreeContainer>
            </Container>
                <Carousel slidesToShow={2.5} cellSpacing={50} slidesToScroll={0.5} edgeEasing="easeQuadInOut" edgeEasing="easeQuadInOut" renderBottomCenterControls={false} wrapAround={true}>
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
                </Carousel>
        </Section>

        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Research &amp; Market Intelligence</SectionSubtitleLeft>
                <CaseStudyDescription>
                    We undertook all of the market intelligence and research required to ensure a detailed relevant database of relevant stakeholders was developed. This involved working closely with CBRE’s head office in London as well as carrying out wider market research to augment the internal CBRE network.
                    <br /><br /> 
                    This in-depth research carried out by Lanyon Communications has helped grow NI Outlook significantly year-on-year, and this was proven as numbers almost doubled in 2018.
                </CaseStudyDescription>
            </CenterThreeContainer>
            </Container>
        </Section>

        <Section>
            <SectionImg fluid={props.data.NIMOCrowdImg.childImageSharp.fluid} />
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
                    fluid={props.data.LMCover.childImageSharp.fluid} />
                    <Container>
                            <CaseStudyTitle>Linen Mill Studios</CaseStudyTitle>
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
            </Carousel>
        </Section>
        <NavMobile />
    </div>

)

export default CaseStudyOutlook

export const query = graphql`
    query {

            NIMOSpeakerImg: file(relativePath: { eq: "case-studies/NIMarketOutlook18/NIMOSpeaker.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1200, cropFocus: ENTROPY ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCrowdImg: file(relativePath: { eq: "case-studies/NIMarketOutlook18/NIMOCrowd.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1200, cropFocus: NORTH ) {
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

            NIMOCar1Img: file(relativePath: { eq: "case-studies/NIMarketOutlook18/NIMOCar1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCar2Img: file(relativePath: { eq: "case-studies/NIMarketOutlook18/NIMOCar2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCar3Img: file(relativePath: { eq: "case-studies/NIMarketOutlook18/NIMOCar3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCar4Img: file(relativePath: { eq: "case-studies/NIMarketOutlook18/NIMOCar4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIMOCar5Img: file(relativePath: { eq: "case-studies/NIMarketOutlook18/NIMOCar5.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `