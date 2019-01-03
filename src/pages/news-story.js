import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import HeaderWrapper from '../components/headerWrapper'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import Carousel from 'nuka-carousel';
import media from "styled-media-query";

// To consolodate 

const HeaderImg = styled(Img) `
    max-height: 50vh;
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

const SectionTitleLeft = styled.h1 `
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

// To consolodate end

const NewsStoryWrapper = styled.div `
    display: flex; 
    flex: 1 1 72%;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -40rem;
`

const NewsStoryContainer = styled.div `
    display: flex; 
    justify-content: flex-end;
    flex-direction: row;
    align-items: flex-start;
    background #FFF;
    padding: 5rem;
    flex-flow: row wrap;
    max-width: 72%;
`

const NewsStoryMetaContainer = styled.div `
    flex: 1 1 100%; // Different from case studies (100%)
`

const NewsStoryMeta = styled.p `
    font-size: 1.8rem;
`

const Date = styled.span `
    font-weight: 500;
`

const Category = styled.span `
    font-weight: 500;
    color: #199BAA;
`

const Author = styled.span `
    font-weight: 100;
`

const NewsStoryTextContainer = styled.div `
    flex: 1 1 100%; // Different from case studies (100%)
`

const NewsStoryText= styled.p `
    font-weight: 100;
    font-size: 1.8rem;
`

const NewsStory = (props) => (

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
                fluid={props.data.NewsStoryHeadlineImg.childImageSharp.fluid} />
        </HeaderWrapper>
        <Section>

                <NewsStoryWrapper>
                    <NewsStoryContainer>
                        <SectionTitleLeft>Innovation Nation 2018</SectionTitleLeft> {/* get from index */}
                        <NewsStoryMetaContainer>
                            <NewsStoryMeta>
                                <Date>17 October 2018</Date> &nbsp; &nbsp; <Category>News</Category> &nbsp; &nbsp; <Author>Matthew Jeffrey</Author>
                            </NewsStoryMeta>
                        </NewsStoryMetaContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryText>
                                This is test text for the story This is test text for the story
                                This is test text for the story This is test text for the story
                                This is test text for the story This is test text for the story
                                This is test text for the story This is test text for the story
                                <br />
                                This is test text for the story This is test text for the story
                                <br />
                                This is test text for the story This is test text for the story
                            </NewsStoryText>
                        </NewsStoryTextContainer>
                    </NewsStoryContainer>
                </NewsStoryWrapper>
        </Section>
        <NavMobile />
    </div>

)

export default NewsStory

export const query = graphql`
    query {
        NewsStoryHeadlineImg: file(relativePath: { eq: "placeholders/NewsPlaceholder.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `