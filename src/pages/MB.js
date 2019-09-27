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
import media from "styled-media-query";
import MBCanvasBackground from '../components/MBCanvasBackground'

const HeaderImg = styled(Img) `
    min-height: 100vh;
`

const HeadingOne = styled.h1 `
    font-size: 4.5rem;
    color: #FFF;
    font-weight: 100;
    display: flex;
    margin-top: 5rem;
    text-align: center;
    justify-content: center;

    ${media.lessThan("large")`
        font-size: 4rem;
        margin-top: 3.5rem;
    `}

    ${media.lessThan("medium")`
        font-size: 2.65rem;
    `}
`

const HeadingTwo = styled.h2 `
    font-size: 3rem;
    color: #FFF;
    font-weight: 100;
    font-family: GillSansMTPro;
    display: flex;
    line-height: 1.5;
    text-align: center;
    justify-content: center;

    ${media.lessThan("medium")`
        font-size: 1.8rem; 
        text-align: center;
    `}
`

const HeadingTextContainer = styled.div `
    flex: 1 1 100%;
    justify-content: center;
    margin: 0 auto;
    margin-top: 10rem;

    ${media.lessThan("large")`
        flex: 1 1 100%;
        margin: 0 auto;
        margin-top: 7.5rem;
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
    height: 100%;
    width: 100%;
    object-fit: cover;
    
`

const Url = styled(Link) `
    text-decoration: none;
`

const Logo = styled( Img ) `
    margin: 0 auto;
    width: 25rem;

    ${media.lessThan("large")`
        width: 15rem;
    `}
`

const Button = styled.button `
    background: #FFF;
    color: #004655;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 5rem;
    display: flex;
`


const HoldingIndexPage = (props) => {

    return (

    <div>
        <FontFace />
        <MBCanvasBackground />
            <Slide>
                {/* <SlideImg style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: -1,
                }}
                    fluid={props.data.homeHeroImg.childImageSharp.fluid} /> */}
                    <HeaderContainer>
                        <HeadingTextContainer>
                        <Logo fluid={props.data.logo.childImageSharp.fluid} />
                            {/* <HeadingTwo>For now, click around and explore our new colours</HeadingTwo> */}
                        </HeadingTextContainer>
                    </HeaderContainer>
                {/* <HeaderContainer>
                    <HeadingTextContainer>
                        <HeadingOne>Lanyon</HeadingOne>
                        <HeadingTwo>Helping businesses achieve their potential through strategic communications, reputation management and stakeholder engagement</HeadingTwo>
                    </HeadingTextContainer>
                </HeaderContainer> */}
            </Slide>
    </div>
    )

}

export default HoldingIndexPage


export const query = graphql`
    query {

        homeHeroImg: file(relativePath: { eq: "LanyonBelfast.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        logo: file(relativePath: { eq: "MB_Logo.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
                }
            }
        }

    }
`