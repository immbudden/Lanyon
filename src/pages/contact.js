import React, { useState } from 'react';
import { render } from 'react-dom'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import media from "styled-media-query";
import HQMap from "../components/HQMap";
import DubMap from "../components/DubMap";
import ContactForm from '../components/ContactForm'
// import { Formik, Field, Form, ErrorMessage } from 'formik';

// To consolodate

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
    flex-direction: row;

    ${media.lessThan("medium")`
        padding: 5rem 0 10rem;
        flex-direction: column;
    `}
`

const NoTopContainer = styled.div `
    margin: 0 auto;
    padding: 0 0 10rem;
    max-width: 90%;
    display: flex;
    flex-direction: column;
`

const SectionTitleTop = styled.h2 `
    font-size: 5.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 7.5rem auto;
    width: 60%;
    text-align: center;

    ${media.lessThan("medium")`
        font-size: 4rem; 
        text-align: center;
        width: 100%;
        margin-bottom: 5rem;
    `}
`

const SectionTitleLeft = styled.h2 `
    font-size: 5.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin-bottom: 7.5rem;
    text-align: left;

    ${media.lessThan("medium")`
        font-size: 4rem; 
        text-align: center;
        width: 100%;
        margin-bottom: 5rem;
    `}
`

// To consolodate end

const SectionParagraph = styled.p `
    font-size: 1.8rem;
    font-weight: 100;
    color: #222;
    line-height: 1.75;
    margin-bottom: 5rem;
`

const SectionParagraphLight = styled.p `
    font-size: 1.8rem;
    font-weight: 100;
    color: #FFF;
    line-height: 1.75;
    flex: 1 1 100%;
    margin-bottom: 0;
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

    ${media.lessThan("medium")`
        width: 100%;
        justify-content: center;
    `}
`

const LeftTwoContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 0 1 38.5%;
    margin-right: 2.5%;

`

const SectionImg = styled(Img) `
    width: 100%;
    min-height: 50vh;
    height: 50vh;
`

const MapWrapper = styled.div `
    height: 50vh;

    ${media.lessThan("medium")`
        height: 90vh;
    `}
`

const MapContainer = styled.div `
    position: absolute;
    height: 50vh;
    width: 100%;
    z-index: 0;

    ${media.lessThan("medium")`
        height: 90vh;
    `}
`

const ContactDetailsContainer = styled.div `
    display: flex;
    width: 90%;
    margin: 0 auto;
    height: 50vh;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    ${media.lessThan("medium")`
        justify-content: center;
    `}
`

const ContactDetails = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    flex: 0 1 38%;
    padding: 5rem;
    z-index: 5;
    background: #FFF;
`

const ContactContainer = styled.div `
    flex: 1 1 47.5%;
    margin-right: 5%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;

    &:first-child {
        margin-bottom: 2.5rem;
    }

    &:nth-child(3) {
        margin-right: 0;

        ${media.lessThan("medium")`
            margin-top: 2.5rem;
        `}
    }
`

const AddressText = styled.p `
    flex: 1 1 100%;
    font-size: 2rem;
    font-weight: 100;
    color: #222;
    line-height: 3rem;
    margin-bottom: 0;

    ${media.lessThan("medium")`
        font-size: 1.8rem;
    `}
`

const AddressNav = styled.div `
    flex: 1 1 100%;
`

const AddressNavLink = styled.a `
    flex: 1 1 100%;
    font-size: 3.5rem;
    font-weight: 100;
    margin-bottom: 0;
    color: #CCC;
    font-family: Didot;
    cursor: pointer;

    &:hover {
        color: #199BAA;
    }

    &:active {
        color: pink;
    }

    &.activeNav {
        color: #199BAA;
    }

    &:first-child {
        margin-right: 1.5rem;
    }

    ${media.lessThan("medium")`
        font-size: 2.5rem;
    `}
`

const Button = styled.button `
    flex: 1 1 100%;
    background: #199BAA;
    color: #FFF;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: 2.5px solid #199BAA;
    text-transform: uppercase;
    width: 22.5rem;
    margin-bottom: 1rem;

    ${media.lessThan("medium")`
        font-size: 1.8rem;
    `}
`

const ButtonInvert = styled.button `
    flex: 1 1 100%;
    background: #FFF;
    color: #199BAA;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: 2.5px solid #199BAA;
    text-transform: uppercase;
    width: 22.5rem;

    ${media.lessThan("medium")`
        font-size: 1.8rem;
    `}
`

const ButtonLink = styled.a `
    text-decoration: none;
    color: inherit;
`

const ContactPage = (data) => {

    const [activeTab, setActiveTab] = useState('HQMap')

    function navigateToTab(e, tabName) {
        e.preventDefault()
        setActiveTab(tabName)
    }

    return (

    <div>
        <FontFace />
        <Nav />
        <NavMobile />
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionTitleTop>Get in touch</SectionTitleTop>
                <SectionParagraph>
                    At Lanyon we are always interested in collaborating with likeminded people. If you are interested in hearing more about Lanyon and how we can support your organisation or project, get in touch with our Partners today.
                </SectionParagraph>
            </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <MapWrapper>
                <MapContainer>
                    {activeTab === 'HQMap' && (
                        <HQMap isMarkerShown />
                    )}
                    {activeTab === 'DubMap' && (
                        <DubMap isMarkerShown />
                    )}
                </MapContainer>
                    <ContactDetailsContainer>
                    {activeTab === 'HQMap' && (
                        <ContactDetails>
                            <ContactContainer>
                                <AddressNav>
                                    <AddressNavLink className="activeNav" onClick={e => navigateToTab(e, 'HQMap')}>Belfast</AddressNavLink>
                                    <AddressNavLink onClick={e => navigateToTab(e, 'DubMap')}>Dublin</AddressNavLink>
                                </AddressNav>
                            </ContactContainer>
                            <ContactContainer>
                                <AddressText>Lanyon<br />8 Upper Crescent<br />Belfast<br />BT7 1NT</AddressText>
                            </ContactContainer>
                            <ContactContainer>

                                <Button>
                                    <ButtonLink href="tel:+4428 9018 3242">+4428 9018 3242</ButtonLink>
                                </Button>

                                <ButtonInvert>
                                    <ButtonLink href="https://www.google.com/maps/dir/Current+Location/Lanyon+Communications,+8+Upper+Cres,+Belfast+BT7+1NT,+UK/@54.5869451,-5.9367179,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x486109bc20580a23:0xd897711e3ade287c!2m2!1d-5.9345292!2d54.5869451">View directions</ButtonLink>
                                </ButtonInvert>
                            </ContactContainer>
                        </ContactDetails>
                    )}
                    {activeTab === 'DubMap' && (
                        <ContactDetails>
                            <ContactContainer>
                                <AddressNav>
                                    <AddressNavLink onClick={e => navigateToTab(e, 'HQMap')}>Belfast</AddressNavLink>
                                    <AddressNavLink className="activeNav" onClick={e => navigateToTab(e, 'DubMap')}>Dublin</AddressNavLink>
                                </AddressNav>
                            </ContactContainer>
                            <ContactContainer>
                                <AddressText>Lanyon<br />17 Mount Street Lower<br />Dublin 2<br />D02 H242</AddressText>
                            </ContactContainer>
                            <ContactContainer>

                                <Button>
                                    <ButtonLink href="tel:+4428 9018 3242">+4428 9018 3242</ButtonLink>
                                </Button>

                                <ButtonInvert>
                                    <ButtonLink href="https://www.google.com/maps/dir/Current+Location/17+Mount+Street+Lower,+Dublin+2,+D02+H242,+Ireland/@53.338804,-6.2467361,17z/data=!3m1!4b1!4m5!3m4!1s0x48670e9430ed04cb:0x345cc7e42cd63298!8m2!3d53.338804!4d-6.2445474">View directions</ButtonLink>
                                </ButtonInvert>
                            </ContactContainer>
                        </ContactDetails>
                    )}
                    </ContactDetailsContainer>
            </MapWrapper>
        </Section>
        <Section>
            <Container>
                <LeftTwoContainer>
                    <SectionTitleLeft>How can we help you?</SectionTitleLeft>
                    <SectionParagraph>
                        If you would prefer to get in touch via email, please fill in the contact form and one of our partners will contact you directly. 
                    </SectionParagraph>
                </LeftTwoContainer>
                <LeftTwoContainer>
                
                    <ContactForm />
                
                </LeftTwoContainer>
            </Container>
        </Section>
    </div>

    )
}

export default ContactPage

export const query = graphql`
    query {

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
        }
    `