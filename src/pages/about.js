import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import HeroWrapper from '../components/heroWrapper'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import Carousel from 'nuka-carousel';
import media from "styled-media-query";

// To consolidate

const HeroImg = styled(Img) `
    min-height: 50vh;
`

const Section = styled.div `
    background: #FFF;
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

    ${media.lessThan("medium")`
        font-size: 1.8rem; 
        width: 100%;
    `}
`

const ServiceWrapper = styled.div `
    display: flex;
    flex: 12 1 0%;
    justify-content: space-between;
    // margin-right: 5rem; Different from index (needs removed)
    flex-wrap: wrap;
`

const ServiceContainer = styled.div `
    flex: 1 1 31.66%; // Different from index
    margin-bottom: 7.5rem; // Different from index
    margin-right: 2.5%;

    &:nth-child(3n) {
        margin-right: 0;
    } // Different from index

    &:nth-child(n+3) {
        margin-bottom: 0;
    } // Different from index

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

const ServiceTitle = styled.h3 `
    font-size: 3.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 2.5rem;
`

// Close consolidate

const PeopleContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    position: relative;
    justify-content: flex-end;
`

const PersonContainer = styled.div `
    display: flex;
    flex: 1 0 25%;
    height: 40rem;
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
`

const PersonName = styled.p `
    font-size: 1.5rem;
    color: #222;
    background: #FFF;
    padding: 1rem;
    margin-bottom: 1rem;
`

const PersonTitle = styled.p `
    font-size: 1.5rem;
    color: #FFF;
    background: #199BAA;
    padding: 1rem;
    margin-bottom: 0;
`

const PersonIntro = styled.div `
    display: flex;
    flex: 1 1 100%;
    background: rgba(0, 70, 85, 0.95);
    position: absolute;
    flex-direction: column;
    padding: 5rem;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 5;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;

    &:hover {
        opacity: 1;
    }
`

const Bold = styled.span `
    font-weight: 500;
`

const PersonIntroTop = styled.span `
    font-size: 2.2rem;
    color: #FFF;
    font-weight: 100;
    margin-bottom: 5rem;
`

const PersonIntroBottom = styled.span `
    font-size: 1.8rem;
    color: #FFF;
    font-weight: 100;
`

const ServiceList = styled.ul `
    font-size: 2rem;
    color: #222;
    font-weight: 100;
`

const AboutPage = (props) => (

    <div>
        <FontFace />
        <Nav />
        <HeroWrapper>
            <HeroImg style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
            }}
                fluid={props.data.aboutHeroImg.childImageSharp.fluid} />
        </HeroWrapper>
        <Section>
            <Container>
                <SectionTitle>We are Lanyon</SectionTitle>
                <SectionIntro>
                    Situated in Belfast’s vibrant Queen's Quarter, Lanyon specialises in strategic communication, reputation management and stakeholder engagement.  
                    <br /><br />
                    Our exceptional reputation is underpinned by our strong commitment to delivering excellence consistently across our full portfolio of client services. 
                    <br /><br />
                    Combining our corporate communications and marketing expertise, long-established relationships and market knowledge, we work closely in partnership with local and international clients to help them achieve their full growth potential.
                    <br /><br />
                    Lanyon was established in 2014 by Katie Doran and Jonathan Ireland, who have a combined experience of over 35 years in corporate communications in UK and Ireland and further afield. 
                    <br /><br />
                    Both partners have worked with leading retail banks, international law firms, investment funds and commercial property clients, as well as blue-chip companies drawn from a diverse range of sectors.
                    <br /><br />
                    Their deep knowledge and understanding of the business environment ensure that Lanyon truly adds value to every organisation with whom we work. 
                </SectionIntro>
            </Container>
        </Section>
        <Section>
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
                            fluid={props.data.GWImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Katie Doran</PersonName>
                        <PersonTitle>Partner</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Katie DOran</Bold><br />Partner
                        </PersonIntroTop>
                        <PersonIntroBottom>
                            Who is Katie and what does she do? Who is Katie and what does she do?
                        </PersonIntroBottom>
                    </PersonIntro>
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
                            fluid={props.data.GWImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Jonathan Ireland</PersonName>
                        <PersonTitle>Partner</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Jonathan Ireland</Bold><br />Partner
                        </PersonIntroTop>
                        <PersonIntroBottom>
                            Jonathan advises clients on a wide portfolio of issues to support their business growth and success. He sits on a number of boards within Northern Ireland and was named by Business First in the Top 40 Under 40 2016 and 2017. 
                        </PersonIntroBottom>
                    </PersonIntro>
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
                            fluid={props.data.GWImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>David Elliott</PersonName>
                        <PersonTitle>Senior Client Director</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>David Elliot</Bold><br />Senior Client Director
                        </PersonIntroTop>
                        <PersonIntroBottom>
                        Over 17 years' experience as a business and financial journalist and editor with Belfast Telegraph, Ulster Business and Dow Jones Newswires.
                        </PersonIntroBottom>
                    </PersonIntro>
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
                            fluid={props.data.MJImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Matthew Jeffrey</PersonName>
                        <PersonTitle>Associate</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Matthew Jeffrey</Bold><br />Associate
                        </PersonIntroTop>
                        <PersonIntroBottom>
                        Upon graduating from QUB, Matthew joined Lanyon in 2015 and has a particular focus on PR &amp; media engagement, design and events management.
                        </PersonIntroBottom>
                    </PersonIntro>
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
                            fluid={props.data.GWImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Gavin Williamson</PersonName>
                        <PersonTitle>Associate</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Gavin Williamson</Bold><br />Associate
                        </PersonIntroTop>
                        <PersonIntroBottom>
                        Gavin joined the Lanyon team in January 2016. He holds a first-class honours degree in Marketing and is an Accredited CIPR PR Practitioner. 
                        </PersonIntroBottom>
                    </PersonIntro>
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
                            fluid={props.data.ESImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Ella Simpson</PersonName>
                        <PersonTitle>Client Executive</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Ella Simpson</Bold><br />Client Executive
                        </PersonIntroTop>
                        <PersonIntroBottom>
                        Ella joined Lanyon in 2017 from a magic circle law firm. She has a first class law degree from QUB and a MsC in PR &amp; Communications.
                        </PersonIntroBottom>
                    </PersonIntro>
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
                            fluid={props.data.RPImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Rachel Price</PersonName>
                        <PersonTitle>Client Team Support</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Rachel Price</Bold><br />Client Team Support
                        </PersonIntroTop>
                        <PersonIntroBottom>
                        Upon graduating from the University of Reading Rachel secured an internship with Lanyon, where she is gaining experience in all aspects of PR and communications. 
                        </PersonIntroBottom>
                    </PersonIntro>
                </PersonContainer>
                <PersonContainer>
                </PersonContainer>

            </PeopleContainer>
        </Section>
        <Section>
            <Container>
                <SectionTitleLeft>Our Services</SectionTitleLeft>
                <ServiceWrapper>
                    <ServiceContainer>
                        <ServiceTitle>Market Intelligence</ServiceTitle>
                        <ServiceList>
                            <li>Stakeholder Engagement and Relationship Management</li>
                            <li>Business development support</li>
                            <li>Market insight</li>
                            <li>Media and competitor monitoring</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
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
                        <ServiceTitle>Culture and Engagement</ServiceTitle>
                        <ServiceList>
                            <li>Internal communications strategy and delivery</li>
                            <li>Employee engagement initiatives (surveys, focus groups etc.)</li>
                            <li>Internal workshop facilitation</li>
                            <li>Change management communications</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Digital and Content</ServiceTitle>
                        <ServiceList>
                            <li>Digital media strategy and management</li>
                            <li>Video production</li>
                            <li>Graphic design</li>
                            <li>Web development</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Crisis and Issue Management</ServiceTitle>
                        <ServiceList>
                            <li>Proactive crisis communications planning</li>
                            <li>Reactive crisis communications management</li>
                            <li>Reputation management</li>
                            <li>24/7 press office</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Conferences and events</ServiceTitle>
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
        <NavMobile />
    </div>

)

export default AboutPage

export const query = graphql`
    query {
            aboutHeroImg: file(relativePath: { eq: "heroes/aboutHero.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MJImg: file(relativePath: { eq: "people/MJ.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            GWImg: file(relativePath: { eq: "people/GW.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            ESImg: file(relativePath: { eq: "people/ES.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            RPImg: file(relativePath: { eq: "people/RP.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `