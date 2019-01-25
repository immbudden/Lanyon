import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import media from "styled-media-query";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import markerLanyon from "../images/mapPin.png";
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
    display: flex;
    flex-direction: row-wrap;
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
        width: 80%;
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
        width: 80%;
    `}
`

// To consolodate end

const SectionParagraph = styled.p `
    font-size: 1.8rem;
    font-weight: 100;
    color: #222;
    line-height: 1.75;
    
    margin-bottom: 0;
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

const exampleMapStyles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
] //Add some style 

const MapWrapper = styled.div `
    height: 50vh;
`

const MapContainer = styled.div `
    position: absolute;
    height: 50vh;
    width: 100%;
    z-index: 0;
`

const ContactDetailsContainer = styled.div `
    display: flex;
    width: 90%;
    margin: 0 auto;
    height: 50vh;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const ContactDetails = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    flex: 0 0 60rem;
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

    &:nth-child(2) {
        margin-right: 0;
    }
`

const AddressText = styled.p `
    flex: 1 1 100%;
    font-size: 2rem;
    font-weight: 100;
    color: #222;
    line-height: 3rem;
    margin-bottom: 0;
`

const Button = styled.button `
    flex: 1 1 100%;
    background: #199BAA;
    color: #FFF;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    text-transform: uppercase;
    width: 22.5rem;
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
`

const ButtonLink = styled(Link) `
    text-decoration: none;
    
`


const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBYL3QlXrvdys93ouvBz1V5RqzFTpz0WUk",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `50vh` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 54.5869451, lng: -5.93 }}
      defaultOptions={{ styles: exampleMapStyles }}
    >
    {/* <Marker 
        position={{ lat: 54.5869451, lng: -5.93 }} 
        // defaultIcon={'../images/mapPin.png'}
      /> */}
        {props.isMarkerShown && 

            <Marker 
                position={{ lat: 54.5869451, lng: -5.9367179 }} 
                icon={markerLanyon}
            />
        }
    </GoogleMap>
  );

const ContactPage = (props) => (

    <div>
        <FontFace />
        <Nav />
        <Section>
            <Container>
            <CenterThreeContainer>
                <SectionTitleTop>Get in touch</SectionTitleTop>
                <SectionParagraph>
                    At Lanyon we know how to spread the word about the great work your company is doing to a wider audience. Drop us a line or give us a call to hear how we can help you.
                </SectionParagraph>
            </CenterThreeContainer>
            </Container>
        </Section>
        <Section>
            <MapWrapper>
                <MapContainer>
                    <MyMapComponent isMarkerShown />
                </MapContainer>
                    <ContactDetailsContainer>
                        <ContactDetails>
                            <ContactContainer>
                                <AddressText>Lanyon<br />8 Upper Crescent<br />Belfast<br />BT7 1NT</AddressText>
                            </ContactContainer>
                            <ContactContainer>
                            <ButtonLink>
                                <Button>028 9018 3242</Button>
                            </ButtonLink>
                                <ButtonLink>
                                    <ButtonInvert>View directions</ButtonInvert>
                                </ButtonLink>
                            </ContactContainer>
                        </ContactDetails>
                    </ContactDetailsContainer>
            </MapWrapper>
        </Section>
        <Section>
            <Container>
                <LeftTwoContainer>
                    <SectionTitleLeft>How can we help you?</SectionTitleLeft>
                    <SectionParagraph>
                        One short paragraph in here which would briefly ask if the user is looking for support for a similar project, if so - we’d love to talk about it and see if there was a way to collaborate.  This paragraph should be no longer than three lines in total.
                    </SectionParagraph>
                </LeftTwoContainer>
                <LeftTwoContainer>
                    {/* <Formik
                        // Sets up our default values
                        initialValues={{ name: "", email: "", tel: "", message: "",}}

                        // Validates our data
                        validate={values => {
                            const errors = {};

                            if (!values.name) errors.name = "You must enter your name";

                            if (!values.email) errors.email = "Required";

                            if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                            ) {
                            errors.email = "You must supply a valid email address";
                            }

                            if (
                            !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/m.test(values.tel)
                            ) {
                            errors.tel = "You must supply a valid telephone number";
                            }

                            if (!values.message) errors.message = "You must enter a message";

                            return errors;
                        }}

                        // Handles our submission
                        // onSubmit={(values, { setSubmitting }) => {
                        //     // This is where you could wire up axios or superagent
                        //     console.log("Submitted Values:", values);
                        //     // Simulates the delay of a real request
                        //     setTimeout(() => setSubmitting(false), 3 * 1000);
                        // }}
                        >
                        {props => (
                            <ContactForm name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <div>
                                <FormInput
                                name="name"
                                type="name"
                                placeholder="Enter your full name"
                                value={props.values.name}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                style={{
                                    borderColor:
                                    props.errors.name && props.touched.name && "red"
                                }}
                                />
                                {props.errors.name && props.touched.name && (
                                <div style={{ color: "red" }}>{props.errors.name}</div>
                                )}
                            </div>
                            <FormInput
                                name="bot-field"
                                type="hidden"
                            />
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <div>
                                <FormInput
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                value={props.values.email}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                style={{
                                    borderColor:
                                    props.errors.email && props.touched.email && "red"
                                }}
                                />
                                {props.errors.email && props.touched.email && (
                                <div style={{ color: "red" }}>{props.errors.email}</div>
                                )}
                            </div>
                            <FormLabel htmlFor="tel">Telephone Number</FormLabel>
                            <div>
                                <FormInput
                                name="tel"
                                type="tel"
                                placeholder="Enter your telephone number"
                                value={props.values.tel}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                style={{
                                    borderColor:
                                    props.errors.tel && props.touched.tel && "red"
                                }}
                                />
                                {props.errors.tel && props.touched.tel && (
                                <div style={{ color: "red" }}>{props.errors.tel}</div>
                                )}
                            </div>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <div>
                                <FormTextArea
                                name="message"
                                placeholder="Enter your telephone number"
                                value={props.values.message}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                style={{
                                    borderColor:
                                    props.errors.message && props.touched.message && "red"
                                }}
                                />
                                {props.errors.message && props.touched.message && (
                                <div style={{ color: "red" }}>{props.errors.message}</div>
                                )}
                            </div>
                            <LightTealButton
                                type="submit"
                                value="Submit"
                                disabled={props.isSubmitting}
                            >
                            Send
                            </LightTealButton>
                            </ContactForm>
                         )}
                    </Formik> */}
                    <ContactForm />
                
                </LeftTwoContainer>
            </Container>
        </Section>
        <NavMobile />
    </div>

)

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