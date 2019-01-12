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

const ServiceIcon = styled(Img) `
    max-height: 20rem;
    margin: 0 auto;
    text-align: center;
    max-height: 200px;
    margin-bottom: 25px;
    max-width: 118px;
`

const ServiceTitle = styled.h3 `
    font-size: 3.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    text-align: center;
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
                    <HeadingOne>Short snappy headline here.</HeadingOne>
                    <HeadingTwo>Supporting strapline in here to add more weight to headline.</HeadingTwo>
                </HeadingTextContainer>
            </HeaderContainer>
        </HeaderWrapper>
        <Section id="services">
            <Container>
                <SectionTitle>Our Services</SectionTitle>
                <SectionIntro>One paragraph in here to introduce ourselves, give a little bit more information about who we are and tell visitors what we do. This paragraph should briefly describe the key pillars of the business which will be below in icons. This should be no longer than 280 characters.</SectionIntro>
                <ServiceWrapper>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Market Intelligence</ServiceTitle>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Corporate Positioning</ServiceTitle>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Culture and Engagement</ServiceTitle>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Digital and Content</ServiceTitle>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Crisis and Issue Management</ServiceTitle>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceIcon fluid={props.data.serviceIcon.childImageSharp.fluid} />
                        <ServiceTitle>Conferences and Events</ServiceTitle>
                    </ServiceContainer>
                </ServiceWrapper>
            </Container>
        </Section>
        <Section id="caseStudies">
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
                        fluid={props.data.inCover.childImageSharp.fluid} />
                        <Container>
                            <HeadingTextContainer>
                                <CaseStudyTitle>Innovation Nation 2018</CaseStudyTitle>
                            </HeadingTextContainer>
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
                            <HeadingTextContainer>
                                <CaseStudyTitle>MIPIM Belfast 2018</CaseStudyTitle>
                            </HeadingTextContainer>
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
                            <HeadingTextContainer>
                                <CaseStudyTitle>NI Market Outlook 2018</CaseStudyTitle>
                            </HeadingTextContainer>
                        </Container>
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
                                    fluid={props.data.newsPlaceholder.childImageSharp.fluid}
                            />
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryMeta>19 JAN 2018 &nbsp; | &nbsp; David Elliot</LatestNewsStoryMeta>
                                <LatestNewsStoryHeadline>News headline 1 will go right in here to grab attention</LatestNewsStoryHeadline>
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
                                    fluid={props.data.newsPlaceholder.childImageSharp.fluid}
                            />
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryMeta>19 JAN 2018 &nbsp; | &nbsp; David Elliot</LatestNewsStoryMeta>
                                <LatestNewsStoryHeadline>News headline 2 will go right in here to grab attention</LatestNewsStoryHeadline>
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
                                    fluid={props.data.newsPlaceholder.childImageSharp.fluid}
                            />
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryMeta>19 JAN 2018 &nbsp; | &nbsp; David Elliot</LatestNewsStoryMeta>
                                <LatestNewsStoryHeadline>News headline 3 will go right in here to grab attention</LatestNewsStoryHeadline>
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
                                    fluid={props.data.newsPlaceholder.childImageSharp.fluid}
                            />
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryMeta>19 JAN 2018 &nbsp; | &nbsp; David Elliot</LatestNewsStoryMeta>
                                <LatestNewsStoryHeadline>News headline 4 will go right in here to grab attention</LatestNewsStoryHeadline>
                            </LatestNewsTextWrapper>
                        </LatestNewsStory>
                        <Button>More Stories</Button>
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

            inCover: file(relativePath: { eq: "case-studies/InnovationNation18/IN-cover.jpg" }) {
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

            newsPlaceholder: file(relativePath: { eq: "placeholders/NewsPlaceholder.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
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