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
// import Layout from "../components/layout"

const HeaderImg = styled(Img) `
    min-height: 100vh;
`

const HeadingOne = styled.h1 `
    font-size: 7.5rem;
    color: #FFF;
    font-weight: 100;
    display: flex;
    margin-bottom: 5rem;

    ${media.lessThan("medium")`
        font-size: 5rem;
        margin-top: 15rem;
        text-align: center;
    `}
`

const HeadingTwo = styled.h2 `
    font-size: 2.5rem;
    color: #FFF;
    font-family: GillSansMTPro;
    font-weight: 100;
    display: flex;

    ${media.lessThan("medium")`
        font-size: 2rem; 
        text-align: center;
    `}
`

const HeadingTextContainer = styled.div `
    justify-content: flex-end;
`

const Section = styled.div `
    background: #FFF;
`

const SectionDark = styled.div `
    background: #004655;
`

const Container = styled.div `
    margin: 0 auto;
    padding: 10rem 0;
    max-width: 90%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
`

const SectionTitle = styled.h2 `
    font-size: 5.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    margin-bottom: 7.5rem;
    width: 60%;
    text-align: center;

    ${media.lessThan("medium")`
        font-size: 4rem; 
        text-align: center;
        width: 80%;
    `}
`

const SectionTitleLight = styled.h2 `
    font-size: 5.5rem;
    color: #FFF;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    margin-bottom: 7.5rem;
    width: 60%;
    text-align: center;

    ${media.lessThan("medium")`
        font-size: 4rem; 
        text-align: center;
        width: 80%;
    `}
`

const SectionTitleLeft = styled.h2 `
    font-size: 5.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin-bottom: 7.5rem;
    width: 40%;
    text-align: left;

    ${media.lessThan("medium")`
        font-size: 4rem; 
        text-align: center;
        width: 80%;
    `}
`

const SectionIntro = styled.p `
    font-size: 2.2rem;
    color: ##373737;
    font-family: GillSansMTPro;
    font-weight: 100;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 10rem;

    ${media.lessThan("medium")`
        font-size: 1.8rem; 
        width: 100%;
    `}
`

const SectionIntroLeft = styled.p `
    font-size: 2.2rem;
    color: ##373737;
    font-family: GillSansMTPro;
    font-weight: 100;
    width: 40%;
    margin-bottom: 10rem;

    ${media.lessThan("medium")`
        font-size: 1.8rem; 
        width: 100%;
    `}
`

const ServiceWrapper = styled.div `
    display: flex;
    flex: 12 1 0%;
    justify-content: space-around;
    margin-right: 5rem;
    flex-wrap: wrap;
`

const ServiceContainer = styled.div `
    width: 30%;
    margin-bottom: 10rem;

    &:nth-child(n+4) {
        margin-bottom: 0;
    }

    ${media.lessThan("medium")`
        margin-bottom: 5rem;
        
        &:nth-child(n+4) {
            margin-bottom: 5rem;
        }

        &:last-child {
            margin-bottom: 0;
        }
    `}
`

const IconContainer = styled.div `
    height: 12rem;
    display: flex;
    flex 1 1 100%;
    flex-direction: column;
    justify-content: flex-end;
`

const ServiceIcon = styled(Img) `
    // margin: 0 auto;
    text-align: center;
    margin-bottom: 25px;
    width: 8rem;
`

const ServiceTitle = styled.h3 `
    font-size: 3.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 2.5rem;
`

const ServiceList = styled.ul `
    font-size: 2rem;
    color: #222;
    font-weight: 100;
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

const LatestNewsWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
`

const LatestNewsContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    position: relative;
    justify-content: flex-end;

`

const LatestNewsStory = styled.div `
    display: flex;
    flex: 0 0 48%;
    flex-flow: row wrap;
    height: 47.5rem;
    margin-right: 4%;
    margin-bottom: 7.5rem;
    position: relative;
    overflow: hidden;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;

    &:nth-child(even) {
        margin-top: -7.5rem;
        margin-right: 0;
    }
`


const LatestNewsStoryImg = styled(Img) `
    height: 100%;
`

const LatestNewsTextWrapper = styled.div `
    display: flex;
    flex-flow: row wrap;
    background: #FFF;
    padding: 2.5rem;
    width: 80%;
    height: 16rem;
    align-items: flex-end;
`

const LatestNewsStoryMeta = styled.div `
    flex: 0 0 100%;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #969696;
`

const LatestNewsStoryHeadline = styled.h4 `
    flex: 0 0 100%;
    font-size: 3rem;
    color: #004655;
    font-weight: 100;
    margin-bottom: 0;
`

const Button = styled.button `
    background: #199BAA;
    color: #FFF;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    text-transform: uppercase;
`

const ClientLogoWrapper = styled.div `
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
`

const ClientLogoContainer = styled.div `
    width: 12rem;
    margin-right: 4%;

    &:last-child {
        margin-right: 0;
    }
`

const ClientLogo = styled(Img) `
    flex: 1 1 100%;
`

const Url = styled(Link) `
    text-decoration: none;
    width: 100%;
`


const IndexPage = (props) => (

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
                fluid={props.data.homeHeroImg.childImageSharp.fluid} />
            <HeaderContainer>
                <HeadingTextContainer>
                    <HeadingOne>Strategic communication</HeadingOne>
                    <HeadingTwo>Helping organisations in here to add more weight to headline word word word word</HeadingTwo>
                </HeadingTextContainer>
            </HeaderContainer>
        </HeaderWrapper>
        <Section id="services">
            <Container>
                <SectionTitle>Our Services</SectionTitle>
                <ServiceWrapper>
                    <ServiceContainer>
                        <IconContainer>
                            <ServiceIcon fluid={props.data.MarketIntelligenceIcon.childImageSharp.fluid} />
                            </IconContainer>
                        <ServiceTitle>Market Intelligence</ServiceTitle>
                        <ServiceList>
                            <li>Stakeholder Engagement and Relationship Management</li>
                            <li>Business development support</li>
                            <li>Market insight</li>
                            <li>Media and competitor monitoring</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <IconContainer>
                            <ServiceIcon fluid={props.data.CorporatePositioningIcon.childImageSharp.fluid} />
                        </IconContainer>
                        <ServiceTitle>Corporate Positioning</ServiceTitle>
                        <ServiceList>
                            <li>PR and media relations</li>
                            <li>Corporate messaging development</li>
                            <li>Market positioning for investment</li>
                            <li>Destination and place making communications</li>
                            <li>Media and presentation skills training</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <IconContainer>
                            <ServiceIcon fluid={props.data.EngagementIcon.childImageSharp.fluid} />
                        </IconContainer>
                        <ServiceTitle>Culture and Engagement</ServiceTitle>
                        <ServiceList>
                            <li>Internal communications strategy and delivery</li>
                            <li>Employee engagement initiatives (surveys, focus groups etc.)</li>
                            <li>Internal workshop facilitation</li>
                            <li>Change management communications</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <IconContainer>
                            <ServiceIcon fluid={props.data.DigitalIcon.childImageSharp.fluid} />
                        </IconContainer>
                        <ServiceTitle>Digital and Content</ServiceTitle>
                        <ServiceList>
                            <li>Digital media strategy and management</li>
                            <li>Video production</li>
                            <li>Graphic design</li>
                            <li>Web development</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <IconContainer>
                            <ServiceIcon fluid={props.data.CrisisIcon.childImageSharp.fluid} />
                        </IconContainer>
                        <ServiceTitle>Crisis and Issue Management</ServiceTitle>
                        <ServiceList>
                            <li>Proactive crisis communications planning</li>
                            <li>Reactive crisis communications management</li>
                            <li>Reputation management</li>
                            <li>24/7 press office</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <IconContainer>
                            <ServiceIcon fluid={props.data.EventIcon.childImageSharp.fluid} />
                        </IconContainer>
                            <ServiceTitle>Conferences and Events</ServiceTitle>
                            <ServiceList>
                                <li>Event strategy and end-to-end delivery</li>
                                <li>Local and international conference management</li>
                                <li>Content strategy and curation</li>
                                <li>Speaker management</li>
                                <li>Sponsorship management</li>
                            </ServiceList>
                    </ServiceContainer>
                </ServiceWrapper>
            </Container>
        </Section>
        <Section id="caseStudies">
            <Carousel edgeEasing="easeQuadInOut" edgeEasing="easeQuadInOut" renderBottomCenterControls={false} wrapAround={true}>
                <Slide>
                    <Url to="/mipim2018/">
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
                                <CaseStudyTitle>MIPIM Belfast</CaseStudyTitle>
                        </Container>
                    </Url>
                </Slide>
                <Slide>
                    <Url to="/innovation-nation2018/">
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
                                <CaseStudyTitle>Innovation Nation</CaseStudyTitle>
                        </Container>
                    </Url>
                </Slide>
                
                <Slide>
                    <Url to="/outlook2018/">
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
                                <CaseStudyTitle>NI Market Outlook</CaseStudyTitle>
                        </Container>
                    </Url>
                </Slide>
                <Slide>
                    <Url to="/linenmill-studios/">
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
                    </Url>
                </Slide>
                <Slide>
                    <Url to="/statsports/">
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
                    </Url>
                </Slide>
            </Carousel>
        </Section>
        <Section>
            <Container>
                <SectionTitleLeft>News &amp; Events</SectionTitleLeft>
                <SectionIntroLeft>
                    Small sentence in here to describe what type of content we post in our news section. No longer than two lines.
                </SectionIntroLeft>
                <LatestNewsWrapper>
                    <LatestNewsContainer>
                        <LatestNewsStory>
                            <LatestNewsStoryImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                    fluid={props.data.NewsStoryPlaceholderImg.childImageSharp.fluid}
                            />
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryMeta>4 February 2019 &nbsp; | &nbsp; David Elliot</LatestNewsStoryMeta>
                                <LatestNewsStoryHeadline>Three New Zealand Super Rugby teams sign up to use STATSport’s GPS tracking technology</LatestNewsStoryHeadline>
                            </LatestNewsTextWrapper>
                        </LatestNewsStory>
                        <LatestNewsStory>
                            <LatestNewsStoryImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                    fluid={props.data.NewsStoryPlaceholderImg2.childImageSharp.fluid}
                            />
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryMeta>14 January 2019 &nbsp; | &nbsp; David Elliot</LatestNewsStoryMeta>
                                <LatestNewsStoryHeadline>Digital DNA Awards: Bloomberg exec Tony McManus named on international judging panel</LatestNewsStoryHeadline>
                            </LatestNewsTextWrapper>
                        </LatestNewsStory>
                        <LatestNewsStory>
                            <LatestNewsStoryImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                    fluid={props.data.NewsStoryPlaceholderImg3.childImageSharp.fluid}
                            />
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryMeta>10 December 2018  &nbsp; | &nbsp; David Elliot</LatestNewsStoryMeta>
                                <LatestNewsStoryHeadline>Kings Hall Health and Wellbeing Park to boost economy by £47m a year and support 640 jobs</LatestNewsStoryHeadline>
                            </LatestNewsTextWrapper>
                        </LatestNewsStory>
                        <LatestNewsStory>
                            <LatestNewsStoryImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                    fluid={props.data.NewsStoryPlaceholderImg4.childImageSharp.fluid}
                            />
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryMeta>3 December 2018 &nbsp; | &nbsp; Matthew Jeffrey</LatestNewsStoryMeta>
                                <LatestNewsStoryHeadline>Grade-A office development in Belfast city centre leading the way in technology</LatestNewsStoryHeadline>
                            </LatestNewsTextWrapper>
                        </LatestNewsStory>
                        <Button href="/news/">More Stories</Button>
                    </LatestNewsContainer>
                </LatestNewsWrapper>
            </Container>
        </Section>
        <SectionDark>
            <Container>
                <SectionTitleLight>Our Clients</SectionTitleLight>
                <ClientLogoWrapper>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.KPMG.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.NIE.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.NIW.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.QUB.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.Farrans.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.CBRE.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.DA.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                </ClientLogoWrapper>
            </Container>
        </SectionDark>
        <NavMobile />
    </div>

)

export default IndexPage


export const query = graphql`
    query {
            homeHeroImg: file(relativePath: { eq: "LanyonBelfast.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            serviceIcon: file(relativePath: { eq: "icon-placeholder.png" }) {
                childImageSharp {
                    fluid(maxWidth: 118) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MarketIntelligenceIcon: file(relativePath: { eq: "icons/MarketIntelligence.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            CorporatePositioningIcon: file(relativePath: { eq: "icons/CorporatePositioning.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            EngagementIcon: file(relativePath: { eq: "icons/Engagement.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            DigitalIcon: file(relativePath: { eq: "icons/Digital.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            CrisisIcon: file(relativePath: { eq: "icons/Crisis.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            EventIcon: file(relativePath: { eq: "icons/Event.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
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

            NewsStoryPlaceholderImg: file(relativePath: { eq: "placeholders/StatSportsNews.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: ENTROPY ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            NewsStoryPlaceholderImg2: file(relativePath: { eq: "placeholders/DigitalDNANews.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: ENTROPY ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            NewsStoryPlaceholderImg3: file(relativePath: { eq: "placeholders/KingsNews.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: ENTROPY ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            NewsStoryPlaceholderImg4: file(relativePath: { eq: "placeholders/GradeANews.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            KPMG: file(relativePath: { eq: "ClientLogos/KPMG.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIE: file(relativePath: { eq: "ClientLogos/NIE-Icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NIW: file(relativePath: { eq: "ClientLogos/NI-Water.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            QUB: file(relativePath: { eq: "ClientLogos/QUB.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            Farrans: file(relativePath: { eq: "ClientLogos/Farrans.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            CBRE: file(relativePath: { eq: "ClientLogos/CBRE.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            DA: file(relativePath: { eq: "ClientLogos/DA.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

    }
`