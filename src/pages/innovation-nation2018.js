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
import Helmet from 'react-helmet'

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
    background: #E62645;
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
    background: #E62645;
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
    opacity: 0.1;
    border: none;
    padding: 5.25rem 1.5rem 5rem;
    transition: all 0.5s linear;

    &:hover {
        opacity: 0.75;
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

const CaseStudyIN = (props) => (

    <div>
        <FontFace />
        <Nav />
        <NavMobile />
        <Helmet
            title='Innovation Nation | Lanyon'
            meta={[
                { name: 'description', content: 'Lanyon won the tender to work with Nery Mourne and Down Council on Innovation Nation to showcase the innovation within Newry' },
                { name: 'keywords', content: 'communications, reputation, press, stakeholder, belfast, marketing, pr, media, design, video' },
            ]}
        >
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
                fluid={props.data.INCover.childImageSharp.fluid} />
        </HeaderWrapper>
        <Section>
            <Container>
                <CaseStudyIntroWrapper>
                    <CaseStudyIntroContainer>
                        <SectionTitleLeft>Innovation Nation</SectionTitleLeft> {/* get from index */}
                        <CaseStudyInfoContainer>
                            <InfoTitle>Client</InfoTitle>
                            <InfoText>Newry, Mourne and Down Council</InfoText>
                            <InfoTitle>Brief</InfoTitle>
                            <InfoText>
                                To position Newry, Mourne &amp; Down locally and globally as a burgeoning innovation hub, a thriving tech eco-system and a prime investment location for technology and innovation companies
                                <br /><br />
                                To showcase the burgeoning technology and innovation sectors in the Newry, Mourne and Down district, and uncover the global powerhouses operating from within this city and wider council area
                            </InfoText>
                        </CaseStudyInfoContainer>
                        <CaseStudyDescriptionContainer>
                            <CaseStudyDescription>
                                Following a competitive tender process, Lanyon was successful in its bid to develop and deliver an inaugural technology and investment conference for the Newry, Mourne and Down District Council area across two-days. 
                                <br /><br />
                                Supported by Newry, Mourne and Down District Council and some of Northern Ireland’s most successful indigenous companies, including First Derivatives plc, Norbrook Laboratories and STATSports, Innovation Nation 2018 shone a light on the burgeoning tech and innovation scene in Newry and beyond. 
                                <br /><br />
                                Featuring keynote speakers such as Brian Conlon of First Derivatives, Liam Nagle of Norbrook Laboratories and Kinzen’s Mark Little, it showcased how organisations, both local and international, can use the latest innovations and technology to drive their businesses into the future. 
                                <br /><br />
                                During the event we delivered the Ascend Start-up Competition 2018, and the winner was announced at the official Innovation Nation 2018 Dinner, which was hosted in the Newry Town Hall at the end of day one.
                                <br /><br />
                                The second day of the conference, known as Day of Ambition, saw hundreds of school students from throughout the Newry, Mourne and Down District inspired by the local business world and showcased some of the most cutting-edge innovation and technology. 
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
                    <StatHeadline>60+</StatHeadline>
                    <StatText>units of media coverage</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>996k</StatHeadline>
                    <StatText>est. coverage views</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>400+</StatHeadline>
                    <StatText>delegates attended</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>628m</StatHeadline>
                    <StatText>online readership</StatText>
                </StatContainer>
                </StatWrapper>
            </Container>
        </SectionColoured>
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>Event &amp; Programme Management</SectionSubtitleLeft>
                <CaseStudyDescription>
                    Working with key stakeholders, we researched, identified and contacted over 30 relevant speakers to secure their commitment to attending Innovation Nation 2018, and worked with them to manage their travel/accommodation/logistics.
                    <br /><br />
                    We had full responsibility for all staging and AV requirements, as well as all hospitality aspects of the event and successfully executed a number of complex logistical arrangements. We also managed all event photography and videography requirements throughout the conference. 
                </CaseStudyDescription>
                <Video> 
                    <Player 
                        url='https://youtu.be/wordEX7KXmE?vq=hd720'
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
                                fluid={props.data.BCImg.childImageSharp.fluid}
                        />
                        <PersonInfoWrapper>
                            <PersonName>Brian Conlon</PersonName>
                            <PersonTitle>CEO - First Derivatives</PersonTitle>
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
                                fluid={props.data.HLImg.childImageSharp.fluid}
                        />
                        <PersonInfoWrapper>
                            <PersonName>Helen Lennon</PersonName>
                            <PersonTitle>CEO - Secure Broadcast</PersonTitle>
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
                                fluid={props.data.LNImg.childImageSharp.fluid}
                        />
                        <PersonInfoWrapper>
                            <PersonName>Liam Nagle</PersonName>
                            <PersonTitle>CEO - Norbrook</PersonTitle>
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
                                fluid={props.data.CCImg.childImageSharp.fluid}
                        />
                        <PersonInfoWrapper>
                            <PersonName>Cathy Craig</PersonName>
                            <PersonTitle>Founder - Incisiv</PersonTitle>
                        </PersonInfoWrapper>
                    </PersonContainer>
                </PeopleContainer>
            </Container>
        </Section>
        <Section>
            <SectionImg fluid={props.data.INMarkLittleImg.childImageSharp.fluid} />
        </Section>
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Sponsorship management</SectionSubtitleLeft>
                    <CaseStudyDescription>
                        We developed an attractive tiered sponsorship package system that ensured a strong return on investment for all sponsors at their respective levels – these included ‘platinum’, ‘gold’, ‘silver’ and ‘supporting partner’ levels.
                        <br /><br />
                        We utilised our own strong networks of private sector businesses and region-wide stakeholders to sell sponsorship – often requiring Lanyon Communications to attend face-to-face meetings with the potential sponsor, as well as numerous follow-up conversations by telephone/email to convert the sponsorship.  
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
                            fluid={props.data.INCar1Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar2Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar3Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar4Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar5Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar6Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar7Img.childImageSharp.fluid} />
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
                            fluid={props.data.INCar1Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar2Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar3Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar4Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar5Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar6Img.childImageSharp.fluid} />
                    </GallerySlide>
                    <GallerySlide>
                            <GallerySlideImg 
                            fluid={props.data.INCar7Img.childImageSharp.fluid} />
                    </GallerySlide>
                </MobileCarousel>
        </Section>

        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>PR &amp; Communications</SectionSubtitleLeft>
                <CaseStudyDescription>
                    We devised the key messaging for the event, which included integrating relevant pieces of research with regards to innovation and technology, both locally and globally.
                    <br /><br />
                    We developed and agreed a series of newsworthy media announcements, and took control of drafting all press releases, editorials, media commentaries and speaking notes, as well as liaising with the media internationally. 
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
            <SectionImg fluid={props.data.INCrowdCameraImg.childImageSharp.fluid} />
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

export default CaseStudyIN

export const query = graphql`
    query {

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
                    fluid(maxWidth: 2500, maxHeight: 1000, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INCrowdCameraImg: file(relativePath: { eq: "case-studies/InnovationNation18/CrowdCamera.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1400, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INCover: file(relativePath: { eq: "case-studies/InnovationNation18/IN-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, quality: 85 ) {
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

            BCImg: file(relativePath: { eq: "case-studies/InnovationNation18/BC.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            HLImg: file(relativePath: { eq: "case-studies/InnovationNation18/HL.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            LNImg: file(relativePath: { eq: "case-studies/InnovationNation18/LN.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            CCImg: file(relativePath: { eq: "case-studies/InnovationNation18/CC.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER, quality: 85 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INCar1Img: file(relativePath: { eq: "case-studies/InnovationNation18/INCar1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INCar2Img: file(relativePath: { eq: "case-studies/InnovationNation18/INCar2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INCar3Img: file(relativePath: { eq: "case-studies/InnovationNation18/INCar3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INCar4Img: file(relativePath: { eq: "case-studies/InnovationNation18/INCar4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INCar5Img: file(relativePath: { eq: "case-studies/InnovationNation18/INCar5.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INCar6Img: file(relativePath: { eq: "case-studies/InnovationNation18/INCar6.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            INCar7Img: file(relativePath: { eq: "case-studies/InnovationNation18/INCar7.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `