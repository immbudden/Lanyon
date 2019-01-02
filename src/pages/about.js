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
    flex: 12 1 23.5%; // Different from index
    // width: 23.5%; Different from index (to be removed)
    margin-bottom: 7.5rem; // Different from index
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
                    Brief introduction to Lanyon, describing the background to the company, how we started and what we do.  This should be a total of three paragraphs and should be no longer than 800 characters. Bacon ipsum dolor amen est brisket picanha, ground round aliqua ex pork flank ham doner alcatra in. 
                    <br /><br />
                    Elit cow shankle turkey, drumstick leberkas eiusmod pork loin alcatra rump in shoulder. Ball alcatra shank, occaecat duis nostrud dolor prosciutto commodo laboris flank ground round shankle. 
                    <br /><br />
                    Shoulder laborum ullamco, short ribs spare ribs landjaeger biltong doner strip steak ham do sausage ipsum flank anim. Burgdoggen ea pastrami velit sint. Laboris cupidatat mollit aliqua cow. Ullamco pariatur adipisicing ham hock in. Leberkas fugiat venison brisket ham pancetta kevin sint nostrud incididunt beef.
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
                            fluid={props.data.MJImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Matthew Jeffrey</PersonName>
                        <PersonTitle>Associate</PersonTitle>
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
                            fluid={props.data.MJImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Matthew Jeffrey</PersonName>
                        <PersonTitle>Associate</PersonTitle>
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
                            fluid={props.data.MJImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Matthew Jeffrey</PersonName>
                        <PersonTitle>Associate</PersonTitle>
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
                            fluid={props.data.MJImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Matthew Jeffrey</PersonName>
                        <PersonTitle>Associate</PersonTitle>
                    </PersonInfoWrapper>
                </PersonContainer>
            </PeopleContainer>
        </Section>
        <Section>
            <Container>
                <SectionTitleLeft>Our Services</SectionTitleLeft>
                <ServiceWrapper>
                    <ServiceContainer>
                        <ServiceTitle>Service Title 1</ServiceTitle>
                        <ServiceList>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Service Title 2</ServiceTitle>
                        <ServiceList>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Service Title 3</ServiceTitle>
                        <ServiceList>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Service Title 4</ServiceTitle>
                        <ServiceList>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Service Title 5</ServiceTitle>
                        <ServiceList>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Service Title 6</ServiceTitle>
                        <ServiceList>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Service Title 7</ServiceTitle>
                        <ServiceList>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Service Title 8</ServiceTitle>
                        <ServiceList>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
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
                    fluid(maxWidth: 650, cropFocus: EAST ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `