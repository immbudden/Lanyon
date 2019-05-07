import React, { useState } from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import HeaderWrapper from '../components/headerWrapper'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import media from "styled-media-query";
import Carousel from 'nuka-carousel';
import CaseStudyCarousel from '../components/caseStudyCarousel';
import TruncateMarkup from 'react-truncate-markup';
import get from "lodash.get"
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import HeaderContainer from '../components/headerContainer'
import ReactPlayer from 'react-player'
import Typed from 'react-typed'
// import Layout from "../components/layout"

const HeaderImg = styled(Img) `
    min-height: 100vh;
`

const HeadingOne = styled.h1 `
    font-size: 5.5rem;
    color: #004655;
    font-weight: 100;
    display: flex;
    margin-top: 35vh;
    // margin-bottom: 5rem;

    ${media.lessThan("huge")`
        font-size: 4.5rem;
    `}

    ${media.lessThan("medium")`
        font-size: 3.5rem;
        margin-bottom: 2.5rem;
        text-align: center;
        justify-content: center;
        margin-top: 15vh;
    `}
`

const HeadingTwo = styled.h2 `
    font-size: 3rem;
    color: #004655;
    font-weight: 100;
    font-family: GillSansMTPro;
    display: flex;
    line-height: 1.5;
    text-align: center;

    ${media.lessThan("medium")`
        font-size: 1.8rem; 
        text-align: center;
    `}
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

    ${media.lessThan("medium")`
        padding: 7.5rem 0;
    `}
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
        width: 90%;
        margin: 0 auto;
        margin-bottom: 5rem;
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
    font-size: 1.8rem;
    color: ##373737;
    font-family: GillSansMTPro;
    font-weight: 100;
    width: 40%;
    margin-bottom: 10rem;

    ${media.lessThan("medium")`
        font-size: 1.8rem; 
        width: 100%;
        text-align: center;
    `}
`

const ServiceWrapper = styled.div `
    display: flex;
    flex: 1 1 100%;
    justify-content: flex-start;
    flex-flow: row wrap;
`

const ServiceContainer = styled.div `
    flex: 1 1 30%;
    margin-bottom: 2.5%;
    margin-right: 2.5%;
    height: 40rem;
    position: relative;
    overflow: hidden;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #004655;

    &:nth-child(1), :nth-child(5) {
        background: #004655;
    }

    &:nth-child(2), :nth-child(6) {
        background: #697887;
    }

    &:nth-child(3), :nth-child(4) {
        background: #199BAA;
    }

    &:nth-child(n+4) {
        margin-bottom: 0;
    }

    &:nth-child(3n+3) {
        margin-right: 0;
    }

    ${media.lessThan("large")`
        flex: 1 1 47.5%;

        &:nth-child(n+4) {
            margin-bottom: 0;
        }

        &:nth-child(3n) {
            margin-right: 2.5%;
        }
    
        &:nth-child(2n+2) {
            margin-right: 0;
        }
    `}

    ${media.lessThan("medium")`

        flex: 0 1 90%;
        margin: 0 auto;
        margin-bottom: 2.5rem;
        height: 25rem;
        
        &:nth-child(n+4) {
            margin-bottom: 5rem;
        }

        &:nth-child(3n) {
            margin-right: auto;
        }

        &:nth-child(2n+2) {
            margin-right: auto;
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
    color: #FFF;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2.5rem;
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 2.5rem;
    transition: opacity 0.5s;

    &:hover {
        opacity: 0;
    }

    ${media.lessThan("medium")`
        font-size: 3rem;
        text-align: center;
    `}
`

const ServiceList = styled.ul `
    font-size: 2rem;
    color: #FFF;
    background: rgba(0, 70, 85, 0.95);
    font-weight: 100;
    display: flex;
    flex: 1 1 100%;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 5;
    height: 100%;
    width: 100%;
    overflow: scroll;
    opacity: 0;
    transition: opacity 0.5s;
    list-style: disc inside none;
    margin-left: 0;
    margin-bottom: 0;
    padding: 2.5rem;

    &:hover {
        opacity: 1;
    }

    &:hover ServiceTitle {
        opacity: 0;
    }

    ${media.lessThan("medium")`
        font-size: 1.8rem;
    `}

    & li {
        list-style-position: outside;
        margin-left: 2.5rem;
        vertical-align: top;
    }
`

const LatestNewsWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
`

const LatestNewsContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 60%;
    position: relative;
    justify-content: flex-end;

    ${media.lessThan("medium")`
        width: 100%;
        justify-content: center;
    `}

`

const LatestNewsStory = styled(Link) `
    display: flex;
    flex: 0 0 48%;
    flex-flow: row wrap;
    height: auto;
    margin-right: 4%;
    margin-bottom: 7.5rem;
    position: relative;
    overflow: hidden;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    text-decoration: none;

    &:nth-child(even) {
        margin-right: 0;
    }

    ${media.lessThan("medium")`
        flex: 1 1 100%;
        margin-right: 0;
        margin-bottom: 5rem;
        height: auto;
        flex-direction: row;

        &:nth-child(even) {
            margin-top: 0rem;
        }
    `}
`

const LatestNewsStoryImgContainer = styled.div `
    flex: 1 1 100%;
    position: relative;
    overflow: hidden;
    height: 40rem;
    z-index: 1;
`


const LatestNewsStoryImg = styled(Img) `
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const LatestNewsTextWrapper = styled.div `
    display: flex;
    flex-flow: row wrap;
    background: #FFF;
    width: 100%;
    align-items: flex-end;
    z-index: 10;
    margin-top: 2.5rem;

    ${media.lessThan("medium")`
        border: 1px solid #EEEEEE;
        border-top: none;
        width: 100%;
        margin-top: 0;
        padding: 2.5rem 1.5rem 1.5rem;

    `}
`

const LatestNewsStoryMeta = styled.div `
    flex: 0 0 100%;
    font-size: 1.5rem;
    // text-transform: uppercase;
    color: #222;
    // color: #969696;
    margin-top: 2.5rem;
`

const LatestNewsStoryHeadline = styled.h4 `
    flex: 0 0 100%;
    font-size: 2.5rem;
    line-height: 1.3;
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
    cursor: pointer;
`

const ButtonXL = styled.button `
    background: #199BAA;
    color: #FFF;
    font-size: 2.5rem;
    padding: 15px 20px 10px; // Typefix
    border: none;
    text-transform: uppercase;
    cursor: pointer;
`

const ButtonMargin = styled.button `
    background: #199BAA;
    color: #FFF;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    text-transform: uppercase;
    margin-top: 2.5rem;

    cursor: pointer;
`

const ClientLogoWrapper = styled.div `
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
`

const ClientLogoContainer = styled.div `
    flex: 0 0 7%;
    margin-right: 8.5%;
    margin-bottom: 7.5rem;

    &:nth-child(7n+7) {
        margin-right: 0;
    }

    &:nth-child(n+15) {
        margin-bottom: 0;
    }

    ${media.lessThan("medium")`
        flex: 0 0 20%;
        margin-bottom: 5rem;

        &:nth-child(7n+7) {
            margin-right: 8.5%;
        }

        &:nth-child(3n+3) {
            margin-right: 0;
        }

        &:nth-child(n+15) {
            margin-bottom: 5rem;
        }

        &:nth-child(n+18) {
            margin-bottom: 0;
        }
        
    `}
`

const ClientLogo = styled(Img) `
    flex: 1 1 100%;
`

const Slide = styled.div `
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;

    ${media.lessThan("medium")`
        height: 70vh;
    `}
`

const SlideOne = styled(Slide) `
    align-items: flex-start;
    // align-items: center;
`
const SlideImg = styled(Img) `
    min-height: 100vh;
    
`

const FeaturedNewsStoryWrapper = styled(Link) `
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: flex-start;
    flex-flow: row wrap;
    padding-top: 7.5rem;
    text-decoration: none;

    &:visited {
        color: #222;
    }
`

const FeaturedNewsStoryImgContainer = styled.div `
    flex: 1 1 57%;
    height: 100vh;
    position: relative;
    overflow: hidden;

    ${media.lessThan("medium")`
        height: 40vh;
    `}
`

const FeaturedNewsStoryTextWrapper = styled.div `
    display: flex;
    flex: 1 1 43%; // Different from case studies (100%)
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #FFF; // Different
    position: relative;

    ${media.lessThan("medium")`
        flex: 1 1 100%; // Different from case studies (100%)
        height: 40vh;
    `}
    
`

const FeaturedNewsStoryTextContainer = styled.div ` 
    padding: 0 5rem;

    ${media.lessThan("medium")`
        display: flex;
        flex-direction: column; 
        padding: 2.5rem;
    `}
`

//

const FeaturedNewsStoryTitle = styled.h2 `
    flex: 0 0 100%;
    font-size: 5rem;
    color: #222;
    font-weight: 400;
    margin-bottom: 5rem;
    line-height: 1.3;

    ${media.lessThan("medium")`
        font-size: 2.5rem;
        margin-bottom: 2.5rem;
        flex: auto;
    `}
`

const FeaturedNewsStoryShortDescription = styled.p `
    flex: 0 0 100%;
    font-size: 2rem;
    color: #222;
    font-weight: 100;
    margin-bottom: 2.5rem;
`

const FeaturedNewsStoryMeta = styled.div `
    flex: 0 0 100%;
    font-size: 1.5rem;
`

const Date = styled.span `
    font-weight: 500;
    color: #222;
`

const Category = styled.span `
    font-weight: 500;
    color: #199BAA;
`

const Author = styled.span `
    font-weight: 100;
    color: #222;
`

const NewsStoryFeaturedImg = styled(Img) `
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const NewsStoryDescription = styled.p `
    flex: 1 1 100%;
    font-size: 2rem;
    color: #222;
    font-weight: 100;
    margin-bottom: 5rem;

    ${media.lessThan("medium")`
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
    `}
`

const StyledCarousel = styled(Carousel) `
    -webkit-box-shadow: 0px 20px 20px -1px rgba(34,34,34,0.025);
    -moz-box-shadow: 0px 20px 20px -1px rgba(34,34,34,0.025);
    box-shadow: 0px 20px 20px -1px rgba(34,34,34,0.025);

    ${media.lessThan("medium")`
        padding-top: 8.5rem;
    `}
`

const CarouselNav = styled.button `
    background: #FFF;
    opacity: 0.35;
    border: none;
    padding: 5.25rem 1.5rem 5rem;
    transition: all 0.5s linear;

    &:hover {
        opacity: 0.8;
    }

    ${media.lessThan("medium")`
        padding: 3.25rem 0.8rem 3rem;
    `}

`

const Url = styled(Link) `
    text-decoration: none;
`

const HeadingTextContainer = styled.div `
    // flex: 0 1 62%;
    flex: 0 1 75%;
    justify-content: center;
    margin: 0 auto;
    text-align: center;

    ${media.lessThan("large")`
        flex: 0 1 80%;
        margin: 0 auto;
    `}
`

const Video = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    // margin-bottom: 5rem;
    // position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    // pointer-events: none;
    overflow: hidden;
    position: absolute;
`

const Player = styled(ReactPlayer)`

    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${media.lessThan("medium")`
        min-height: 70vh;
    `}

`

const TypedStyled = styled(Typed) `
    margin: 0 auto;

    .hidden {
        display: none;
    }
`


const IndexPage = (props) => {

    const newsList = props.data.allPrismicNewsStory;
    const newsStoryOne = newsList.edges[0];
    const newsStoryTwo = newsList.edges[1];
    const newsStoryThree = newsList.edges[2];
    const newsStoryFour = newsList.edges[3];

    const newsBodyOne = newsStoryOne.node.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});
    const newsStoryUrlOne = newsStoryOne.node.uid;
    const newsStoryImgOne = get(newsBodyOne, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null)


    const newsBodyTwo = newsStoryTwo.node.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});
    const newsStoryUrlTwo = newsStoryTwo.node.uid;
    const newsStoryImgTwo = get(newsBodyTwo, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null)

    const newsBodyThree = newsStoryThree.node.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});
    const newsStoryUrlThree = newsStoryThree.node.uid;
    const newsStoryImgThree = get(newsBodyThree, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null)

    const newsBodyFour = newsStoryFour.node.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});
    const newsStoryUrlFour = newsStoryFour.node.uid;
    const newsStoryImgFour = get(newsBodyFour, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null)


    const featuredList = props.data.allPrismicNewsStoryFeatured;
    const featuredStory = featuredList.edges[0];

    const body = featuredStory.node.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});

    const featuredStoryUrl = featuredStory.node.uid;
    const featuredImg = get(body, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null)

    const featuredStoryTwo = featuredList.edges[1];
    const featuredBodyTwo = featuredStoryTwo.node.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});
    const featuredStoryTwoUrl = featuredStoryTwo.node.uid;
    const featuredStoryTwoImg = get(featuredBodyTwo, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null)

    const featuredStoryThree = featuredList.edges[2];
    const featuredBodyThree = featuredStoryThree.node.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});
    const featuredStoryThreeUrl = featuredStoryThree.node.uid;
    const featuredStoryThreeImg = get(featuredBodyThree, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null)
    
    const [activeTab, setActiveTab] = useState('TypedText')

    function navigateToTab(e, tabName) {
        e.preventDefault()
        setActiveTab(tabName)
    }

    return (

    <div>
        <FontFace />
        <Nav />
        <NavMobile />
        <StyledCarousel easing="easeCubicIn" speed={600} renderBottomCenterControls={false} autoplay={false} autoplayInterval={9000} transitionMode={'scroll'} pauseOnHover={false}
            
            renderCenterLeftControls={({ previousSlide }) => (
                <CarouselNav onClick={previousSlide}><ArrowBackIos /></CarouselNav>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <CarouselNav onClick={nextSlide}><ArrowForwardIos /></CarouselNav>
              )}
        >
            <SlideOne >
                <Video> 
                    <Player 
                        url='https://youtu.be/KoKvpo3wzj8?vq=hd1080?showinfo=0?ecver=2'
                        controls={true}
                        playing={false}
                        loop={true}
                        onStart={e => setActiveTab(e, 'HideTypedText')}
                        config={{
                            youtube: {
                              playerVars: { rel: 0 }
                            },
                          }}
                        // volume={1}
                        // muted={true}  
                    />
                </Video>

                {activeTab === 'TypedText' && (
                    <HeaderContainer>
                    <HeadingTextContainer>
                        <HeadingOne>
                            <TypedStyled
                                strings={["Strategic Communications", "Reputation Management", "Stakeholder Engagement", "Watch the showreel"]} 
                                typeSpeed={60} 
                                
                            />
                        </HeadingOne>
                        {/* <ButtonXL>View showreel</ButtonXL> */}
                    </HeadingTextContainer>
                </HeaderContainer>
                )}

                {activeTab === 'HideTypedText' && (
                    <div />
                )}

                {/* <SlideImg style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: -1,
                }}
                    fluid={props.data.homeHeroImg.childImageSharp.fluid} /> */}
                    {/* <HeaderContainer>
                        <HeadingTextContainer>
                            <HeadingOne>Helping businesses achieve their potential</HeadingOne>
                            <HeadingTwo>Through strategic communications, reputation management and stakeholder engagement</HeadingTwo>
                        </HeadingTextContainer>
                    </HeaderContainer> */}
                {/* <HeaderContainer>
                    <HeadingTextContainer>
                        <HeadingOne>Lanyon</HeadingOne>
                        <HeadingTwo>Helping businesses achieve their potential through strategic communications, reputation management and stakeholder engagement</HeadingTwo>
                    </HeadingTextContainer>
                </HeaderContainer> */}
            </SlideOne>

            <Slide>
                <FeaturedNewsStoryWrapper to={`/news/${featuredStoryUrl}`}>
                
                    {featuredImg && (
                        <FeaturedNewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={featuredImg} />
                        </FeaturedNewsStoryImgContainer>
                    )}
                    {/* <FeaturedNewsStoryImgContainer>
                        <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg.childImageSharp.fluid} />
                    </FeaturedNewsStoryImgContainer> */}
                    
                    <FeaturedNewsStoryTextWrapper>
                        <FeaturedNewsStoryTextContainer>
                            <FeaturedNewsStoryTitle>{featuredStory.node.data.title.text}</FeaturedNewsStoryTitle>
                                <TruncateMarkup lines={3}>
                                    <NewsStoryDescription>{featuredStory.node.data.short_description}</NewsStoryDescription>
                                </TruncateMarkup>
                                <FeaturedNewsStoryMeta>
                                    <Date>{featuredStory.node.data.published_date}</Date> &nbsp; &nbsp; <Category>{featuredStory.node.data.category.document[0].data.category.text}</Category>
                                </FeaturedNewsStoryMeta>
                                <ButtonMargin to={`/news/${featuredStoryUrl}`}>Read More</ButtonMargin>
                        </FeaturedNewsStoryTextContainer>
                    </FeaturedNewsStoryTextWrapper>
                </FeaturedNewsStoryWrapper>
            </Slide>

            <Slide>
                <FeaturedNewsStoryWrapper to={`/news/${featuredStoryTwoUrl}`}>
                
                    {featuredStoryTwoImg && (
                        <FeaturedNewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={featuredStoryTwoImg} />
                        </FeaturedNewsStoryImgContainer>
                    )}
                    {/* <FeaturedNewsStoryImgContainer>
                        <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg.childImageSharp.fluid} />
                    </FeaturedNewsStoryImgContainer> */}
                    
                    <FeaturedNewsStoryTextWrapper>
                        <FeaturedNewsStoryTextContainer>
                            <FeaturedNewsStoryTitle>{featuredStoryTwo.node.data.title.text}</FeaturedNewsStoryTitle>
                                <TruncateMarkup lines={3}>
                                    <NewsStoryDescription>{featuredStoryTwo.node.data.short_description}</NewsStoryDescription>
                                </TruncateMarkup>
                                <FeaturedNewsStoryMeta>
                                    <Date>{featuredStoryTwo.node.data.published_date}</Date> &nbsp; &nbsp; <Category>{featuredStoryTwo.node.data.category.document[0].data.category.text}</Category>
                                </FeaturedNewsStoryMeta>
                                <ButtonMargin to={`/news/${featuredStoryTwoUrl}`}>Read More</ButtonMargin>
                        </FeaturedNewsStoryTextContainer>
                    </FeaturedNewsStoryTextWrapper>
                </FeaturedNewsStoryWrapper>
            </Slide>

            <Slide>
                <FeaturedNewsStoryWrapper to={`/news/${featuredStoryThreeUrl}`}>
                
                    {featuredStoryThreeImg && (
                        <FeaturedNewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={featuredStoryThreeImg} />
                        </FeaturedNewsStoryImgContainer>
                    )}
                    {/* <FeaturedNewsStoryImgContainer>
                        <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg.childImageSharp.fluid} />
                    </FeaturedNewsStoryImgContainer> */}
                    
                    <FeaturedNewsStoryTextWrapper>
                        <FeaturedNewsStoryTextContainer>
                            <FeaturedNewsStoryTitle>{featuredStoryThree.node.data.title.text}</FeaturedNewsStoryTitle>
                                <TruncateMarkup lines={3}>
                                    <NewsStoryDescription>{featuredStoryThree.node.data.short_description}</NewsStoryDescription>
                                </TruncateMarkup>
                                <FeaturedNewsStoryMeta>
                                    <Date>{featuredStoryThree.node.data.published_date}</Date> &nbsp; &nbsp; <Category>{featuredStoryThree.node.data.category.document[0].data.category.text}</Category>
                                </FeaturedNewsStoryMeta>
                                <ButtonMargin to={`/news/${featuredStoryThreeUrl}`}>Read More</ButtonMargin>
                        </FeaturedNewsStoryTextContainer>
                    </FeaturedNewsStoryTextWrapper>
                </FeaturedNewsStoryWrapper>
            </Slide>

            </StyledCarousel>
        <Section id="services">
            <Container>
                <SectionTitle>Our Services</SectionTitle>

                <ServiceWrapper>
                    <ServiceContainer>
                        <ServiceTitle>Market Intelligence</ServiceTitle>
                        <ServiceList>
                            <li>Stakeholder engagement and relationship management</li>
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
            <CaseStudyCarousel />
        </Section>
        <Section>
            <Container>
                <SectionTitleLeft>News &amp; Views</SectionTitleLeft>
                <SectionIntroLeft>
                    The latest news and views from our clients and the Lanyon team.
                </SectionIntroLeft>
                <LatestNewsWrapper>
                    <LatestNewsContainer>
                        <LatestNewsStory to={`/news/${newsStoryUrlOne}`}>
                            <LatestNewsStoryImgContainer>
                                <LatestNewsStoryImg fluid={newsStoryImgOne} />
                            </LatestNewsStoryImgContainer>
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryHeadline>{newsStoryOne.node.data.title.text}</LatestNewsStoryHeadline>
                                <LatestNewsStoryMeta><Date>{newsStoryOne.node.data.published_date}</Date> &nbsp; &nbsp; <Category>{newsStoryOne.node.data.category.document[0].data.category.text}</Category></LatestNewsStoryMeta>
                            </LatestNewsTextWrapper>
                        </LatestNewsStory>
                        <LatestNewsStory to={`/news/${newsStoryUrlTwo}`}>
                            <LatestNewsStoryImgContainer>
                                <LatestNewsStoryImg fluid={newsStoryImgTwo} />
                            </LatestNewsStoryImgContainer>
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryHeadline>{newsStoryTwo.node.data.title.text}</LatestNewsStoryHeadline>
                                <LatestNewsStoryMeta><Date>{newsStoryTwo.node.data.published_date}</Date> &nbsp; &nbsp; <Category>{newsStoryTwo.node.data.category.document[0].data.category.text}</Category></LatestNewsStoryMeta>
                            </LatestNewsTextWrapper>
                        </LatestNewsStory>
                        <LatestNewsStory to={`/news/${newsStoryUrlThree}`}>
                            <LatestNewsStoryImgContainer>
                                <LatestNewsStoryImg fluid={newsStoryImgThree} />
                            </LatestNewsStoryImgContainer>
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryHeadline>{newsStoryThree.node.data.title.text}</LatestNewsStoryHeadline>
                                <LatestNewsStoryMeta><Date>{newsStoryThree.node.data.published_date}</Date> &nbsp; &nbsp; <Category>{newsStoryThree.node.data.category.document[0].data.category.text}</Category></LatestNewsStoryMeta>
                            </LatestNewsTextWrapper>
                        </LatestNewsStory>
                        <LatestNewsStory to={`/news/${newsStoryUrlFour}`}>
                        <LatestNewsStoryImgContainer>
                            <LatestNewsStoryImg fluid={newsStoryImgFour} />
                        </LatestNewsStoryImgContainer>
                            <LatestNewsTextWrapper>
                                <LatestNewsStoryHeadline>{newsStoryFour.node.data.title.text}</LatestNewsStoryHeadline>
                                <LatestNewsStoryMeta><Date>{newsStoryFour.node.data.published_date}</Date> &nbsp; &nbsp; <Category>{newsStoryFour.node.data.category.document[0].data.category.text}</Category></LatestNewsStoryMeta>
                            </LatestNewsTextWrapper>
                        </LatestNewsStory>
        
                        <Url to="./news">
                            <Button>More Stories</Button>
                        </Url>
                    </LatestNewsContainer>
                </LatestNewsWrapper>
            </Container>
        </Section>
        <SectionDark>
            <Container>
                <SectionTitleLight>Our Clients</SectionTitleLight>
                <ClientLogoWrapper>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.ALG.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.ABC.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.ARUP.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.BCC.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.CBRE.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.Dalata.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.DA.childImageSharp.fluid}/>
                    </ClientLogoContainer>

                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.DigitalDNA.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.Farrans.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.Killultagh.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.KPMG.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.LinenMill.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.MEABC.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.NMD.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.NIE.childImageSharp.fluid}/>
                    </ClientLogoContainer>

                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.NIW.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.NRC.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.QUB.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.STATSports.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.TODD.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                    <ClientLogoContainer>
                        <ClientLogo fluid={props.data.FourC.childImageSharp.fluid}/>
                    </ClientLogoContainer>
                </ClientLogoWrapper>
            </Container>
        </SectionDark>
    </div>
    )

}

export default IndexPage


export const query = graphql`
    query {

        allPrismicNewsStory: allPrismicNewsStory (sort: {order: DESC, fields: [data___published_date]}) {
            edges {
              node {
                uid
                id
                tags
                data {
                  
                  body {
                    __typename
                    ... on PrismicNewsStoryBodyFeaturedImage {
                        primary {
                            featured_image {
                                url
                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 1000, quality: 65, cropFocus: ENTROPY) {
                                            src
                                            aspectRatio
                                        }
                                    }
                                }
                            }
                        }
                    }
                  }

                  short_description
                  
                  title {
                    text
                  }
                  
                  published_date (formatString:"D MMMM YYYY")
                  
                  author {
                    document {
                      data {
                        author_name {
                          text
                        }
                      }
                    }
                  }
                  
                  category {
                    document {
                      data {
                        category {
                          text
                        }
                      }
                    }
                  }
                  
                }
                
              }
            }
        }

        allPrismicNewsStoryFeatured: allPrismicNewsStory (sort: {order: DESC, fields: [data___published_date]}, filter: {data: {featured_story: {eq: "Yes"}}}) {
            edges {
                node {
                    uid
                    id
                    tags
                    data {

                        body {
                            __typename
                            ... on PrismicNewsStoryBodyFeaturedImage {
                                primary {
                                    featured_image {
                                        url
                                        localFile {
                                            childImageSharp {
                                                fluid(maxWidth: 1500, quality: 65, cropFocus: ENTROPY) {
                                                    src
                                                    aspectRatio
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        short_description
                        
                        title {
                            text
                        }
                        
                        published_date (formatString:"D MMMM YYYY")
                        
                        author {
                            document {
                                data {
                                    author_name {
                                        text
                                    }
                                }
                            }
                        }
                        
                        category {
                            document {
                                data {
                                    category {
                                        text
                                    }
                                }
                            }
                        }
                        
                    }
                
                }
            }
        }

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

            ALG: file(relativePath: { eq: "ClientLogos/ALG.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            ABC: file(relativePath: { eq: "ClientLogos/ABC.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            ARUP: file(relativePath: { eq: "ClientLogos/ARUP.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            BCC: file(relativePath: { eq: "ClientLogos/BCC.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            Dalata: file(relativePath: { eq: "ClientLogos/Dalata.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            DigitalDNA: file(relativePath: { eq: "ClientLogos/DigitalDNA.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            LinenMill: file(relativePath: { eq: "ClientLogos/LinenMill.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MEABC: file(relativePath: { eq: "ClientLogos/MEABC.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NMD: file(relativePath: { eq: "ClientLogos/NMD.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            NRC: file(relativePath: { eq: "ClientLogos/NRC.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            STATSports: file(relativePath: { eq: "ClientLogos/STATSports.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            TODD: file(relativePath: { eq: "ClientLogos/TODD.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            FourC: file(relativePath: { eq: "ClientLogos/4C.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            Killultagh: file(relativePath: { eq: "ClientLogos/Killultagh.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

    }
`