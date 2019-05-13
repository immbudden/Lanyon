import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Global, css } from "@emotion/core"
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import media from "styled-media-query";
import get from "lodash.get"
import ReactPlayer from 'react-player'
import Helmet from 'react-helmet'

// To consolodate 

// const HeroImg = styled(Img) `
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//     position: fixed;
// `

const HeadingWrapper = styled.div `
    height: 50vh;
    overflow: hidden;
    display: flex;
    padding-top: 8.5rem;
    flex-flow: row wrap;

    ${media.lessThan("large")`
        height: 60vh;
    `}

    ${media.greaterThan("medium")`
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
    `}

    ${media.lessThan("medium")`
        height: auto;
    `}
`

const NewsStoryHeadingWrapper = styled.div `
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: flex-start;
    flex-flow: row wrap;
    padding-top: 8.5rem;
    text-decoration: none;
`

const HeroImg = styled(Img) `
    width: 100%;
    height: 100%;
    // z-index: -1;
    // position: fixed;
`

const Section = styled.div `
    background: #FFF;
    z-index: 5;
`

const Container = styled.div `
    margin: 0 auto;
    // padding: 10rem 0; original size
    padding: 7.5rem 0;
    max-width: 90%;
    display: flex;
    flex-direction: column;

    ${media.lessThan("large")`
        padding: 5rem 0;
    `}

    ${media.lessThan("medium")`
        padding: 2.5rem 0;
    `}
`

const SectionTitleLeft = styled.h1 `
    font-size: 5rem; 
    color: #222; // Different from index.js - to consolodate 
    display: flex; // Different from index.js 
    flex: 1 1 100%; // Different from index.js
    font-family: Didot;
    font-weight: 100;
    // margin-bottom: 5rem; // Different from index.js - to consolodate
    margin-bottom: 0;
    text-align: left;
    line-height: 1.25;

    ${media.lessThan("huge")`
        font-size: 4.5rem;
    `}

    ${media.lessThan("large")`
        font-size: 3.5rem;
    `}

    ${media.lessThan("medium")` 
        font-size: 2.5rem;
        width: 100%;
    `}
`

// To consolodate end

const NewsStoryWrapper = styled.div `
    display: flex; 
    align-items: flex-start;

    ${media.lessThan("medium")` 
        flex-flow: row wrap;
    `}
`

const NewsStoryContainer = styled.div `
    display: flex; 
    flex: 1 1 55%;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    background #FFF;
    // margin-top: -20rem;
    // padding: 5rem;
    
    padding-bottom: 0;
    flex-flow: row wrap;
    // max-width: 55%;
    
    margin-right: 7.5%;

    ${media.lessThan("medium")` 
        margin-right: 0;
        flex: 1 1 100%;
    `}
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

const NewsStoryText= styled.div `
    font-weight: 100;
    font-size: 1.8rem;
      

    & p {
         
    } 

    & img {
        max-width: 100%; 
        width: 100%;
    } 
`
const QuoteContainer = styled.div `
    flex: 1 1 41%;
    // margin-top: 2.5rem;

    ${media.lessThan("medium")` 
        flex: 1 1 100%;
        margin: 5rem 0;
    `}
`

const Quote = styled.div `
    flex-direction: row;
`

const QuoteOpen = styled.p `
    flex: 1 1 100%;
    font-size: 7.5rem;
    color: #199BAA;
    margin-bottom: 0;
    text-align: center;
    line-height: 1;

    ${media.lessThan("large")`
        font-size: 6rem;
    `}

`

const QuoteClose = styled.p `
    flex: 1 1 100%;
    font-size: 7.5rem;
    color: #199BAA;
    margin-bottom: 0;
    margin-top: 5rem;
    text-align: center;
    line-height: 1;

    ${media.lessThan("large")`
        font-size: 6rem;
    `}

    ${media.lessThan("large")`
        line-height: 3.5rem;
`}
`

const QuoteText = styled.h6 `
    flex: 1 1 100%;
    font-size: 2.5rem;
    text-align: center;
    line-height: 1.2;

    ${media.lessThan("large")`
        font-size: 2rem;
    `}
`

const QuoteBy = styled.p `
    flex: 1 1 100%;
    font-size: 1.5rem;
    text-align: center;

    ${media.lessThan("large")`
        font-size: 1.2rem;
    `}
`

const FeaturedImageWrapper = styled.div `
    position: relative;
`

const FeaturedImageContainer = styled.div `
    width: 100%;
    max-height: 45rem;
    margin-top: 5rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;

    ${media.lessThan("medium")`
        margin-top: 2.5rem;
    `}

    
`

// const FeaturedImage = styled(Img) `
//     width: 100%;
//     height: 100%;
// `

const FeaturedImage = styled(Img) `
    width: 100%;
    height: 100%;
`

const FeaturedImageCaption = styled.div `
    display: flex;
    flex: 1 1 100%;
    background: #199BAA;
    padding: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.3;
    color: #FFF;
`

const HeadlineImgContainer = styled.div `
    // display: flex;
    flex: 1 1 59%;
    height: 50vh;
    overflow: hidden;

    ${media.lessThan("medium")`
        flex: 1 1 100%;
        min-height: auto;
        height: 30vh;
    `}
`

const HeadlineContainer = styled.div `
    padding: 7.5rem;
    flex: 1 1 41%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50vh;

    ${media.lessThan("medium")`
        padding: 2.5rem 0 0; 
        max-width: 90%;
        margin: 0 auto;
        height: 20vh;
    `}
`

const Video = styled.div `
    height: 100%;
    width: 100%;
    // margin-bottom: 5rem;
    
`

const Player = styled(ReactPlayer)`


`




const NewsStory = (props) => { 
    // console.log(props.data.prismicNewsStory.data.body)
    
    const body = props.data.prismicNewsStory.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});

    // console.log(body)

    const QuoteData = body.PrismicNewsStoryBodyQuote
    // Image Plugins
    const headline_image = props.data.prismicNewsStory.data.headline_image.localFile.childImageSharp.fluid
    const featured_image = get(body, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null)
    const main_video = props.data.prismicNewsStory.data.main_video.embed_url
    
    // const featured_image = body.PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp && body.PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid
    // const headline_image = props.data.prismicNewsStory.data.headline_image.url
    // const featured_image = body.PrismicNewsStoryBodyFeaturedImage.featured_image.url


    const title = props.data.prismicNewsStory.data.title.text
    const main_content = props.data.prismicNewsStory.data.main_content.html
    // const published = props.data.prismicNewsStory.first_publication_date
    const published_date = props.data.prismicNewsStory.data.published_date
    const category = props.data.prismicNewsStory.data.category.document[0].data.category.text
    const author = props.data.prismicNewsStory.data.author.document[0].data.author_name.text
    const tags = props.data.prismicNewsStory.data.tags
    const rootUrl = 'https://lanyongroup.com/'
    const short_description = props.data.prismicNewsStory.data.short_description

    // const quote = props.data.prismicNewsStory.data.body[0].primary.quote.text
    // const featured_image = props.data.prismicNewsStory.data.body[0].primary.featured_image.url
    // const image_caption = props.data.prismicNewsStory.data.body[0].primary.image_caption

    // checking if quote is a falsy (undefined, null, NaN etc)
    // function QuoteData (props) {
    //     if (!quote)  {
    //         return null;
    //     } else {
    //         return (
    //             {quote}
    //         )
    //     }
    // }
    
   

    return (
        <div>
        <FontFace />
        <Nav />
        <NavMobile />

        <Helmet
            title={title}
            meta={[
                { name: 'description', content: 'Lanyon Group are a Belfast based PR and communications firm, specialising in strategic communications, reputation management and stakeholder engagement' },
            ]}
        >
            <meta property="keywords" content={`${tags}`}/>
            <meta property="og:image" content={`${rootUrl}${props.data.prismicNewsStory.data.headline_image.localFile.childImageSharp.fluid.src}`}/>
            <meta property="og:url" content="https://lanyongroup.com"/>
            <meta property="og:title" content={`${title}`}/>
            <meta property="og:description" content={`${short_description}`}/>
            <meta property="og:site_name" content="Lanyon" />
            <meta property="og:type" content="website" />
            <meta name="twitter:site" content="@LanyonGroup" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={`${rootUrl}${props.data.prismicNewsStory.data.headline_image.localFile.childImageSharp.fluid.src}`} />
            <meta name="twitter:image:alt" content={`${title}`} />
            
            <html lang="en" />
        </Helmet>
        <NewsStoryHeadingWrapper>
            {/* <HeroImg fluid={headline_image}/> */}
            <HeadlineImgContainer>
                {headline_image && main_video ? (

                    // If headline_image and main_video exist - only render main_video
                    <Video> 
                        <Player 
                            url={main_video}
                            width='100%'
                            height='100%'
                            controls='0'
                        />
                    </Video>
                    ) : (
                        // If not then render the headline_image
                    <HeroImg fluid={headline_image}/>
                )}

                {/* {main_video && (
                    <Video> 
                        <Player url={main_video} width='100%' height='100%' controls='true'/>
                    </Video>
                )}
                {headline_image && (
                    <HeroImg fluid={headline_image}/>
                )} */}
                {/* <HeroImg fluid={headline_image}/> */}
            </HeadlineImgContainer>
            <HeadlineContainer>
                <SectionTitleLeft>{title}</SectionTitleLeft>
                {/* <NewsStoryMetaContainer>
                    <NewsStoryMeta>
                        <Date>{published_date}</Date> &nbsp; &nbsp; <Category>{category}</Category> &nbsp; &nbsp; <Author>{author}</Author>
                    </NewsStoryMeta>
                </NewsStoryMetaContainer> */}
            </HeadlineContainer>
        </NewsStoryHeadingWrapper>
        <Section>
            <Container>
                <NewsStoryWrapper>
                    <NewsStoryContainer>
                        {/* <SectionTitleLeft>{title}</SectionTitleLeft> */}
                        <NewsStoryMetaContainer>
                            <NewsStoryMeta>
                                <Date>{published_date}</Date> &nbsp; &nbsp; <Category>{category}</Category>
                            </NewsStoryMeta>
                        </NewsStoryMetaContainer>
                        <NewsStoryTextContainer>
                                {/* <Video> 
                                    <Player url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%' controls='true'/>
                                </Video> */}
                                <NewsStoryText dangerouslySetInnerHTML={{ __html: main_content }} />
                                {featured_image && (
                                    <FeaturedImageWrapper>
                                        <FeaturedImageContainer>
                                            {/* <FeaturedImage fluid={featured_image} /> */}
                                            <FeaturedImage fluid={featured_image} />
                                        </FeaturedImageContainer>
                                        <FeaturedImageCaption>{body.PrismicNewsStoryBodyFeaturedImage.image_caption}</FeaturedImageCaption>
                                    </FeaturedImageWrapper>
                                )}
                        </NewsStoryTextContainer>
                        </NewsStoryContainer>
                        {body.PrismicNewsStoryBodyQuote ? (
                            <QuoteContainer>
                                <Quote>
                                    <QuoteOpen>&ldquo;</QuoteOpen>
                                    <QuoteText>{body.PrismicNewsStoryBodyQuote.quote.text}</QuoteText>
                                    <QuoteBy>{body.PrismicNewsStoryBodyQuote.quote_by.text}</QuoteBy>
                                    <QuoteClose>&rdquo;</QuoteClose>
                                </Quote>
                            </QuoteContainer>
                        ) : (
                            <QuoteContainer />
                        )}
                </NewsStoryWrapper>
            </Container>
        </Section>
    </div>
    )

}

export default NewsStory

// export const query = graphql`
//     query {
//         NewsStoryHeadlineImg: file(relativePath: { eq: "placeholders/NewsPlaceholder.jpg" }) {
//                 childImageSharp {
//                     fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }
//         }
//     `

export const query = graphql`
    query ($slug:String){
        prismicNewsStory (uid:{eq: $slug}) {
            data {

                headline_image {
                    url
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1200, quality: 60, cropFocus: ENTROPY) {
                          src
                          aspectRatio
                        }
                      }
                    }
                  }

                main_video {
                    embed_url
                }

                title {
                    html
                    text
                }

                main_content {
                    html
                    text
                }

                short_description

                published_date (formatString:"D MMMM YYYY")

                category {
                    document {
                        data {
                            category {
                                html
                                text
                            }
                        }
                    }
                }
                
                author {
                    document {
                        data {
                            author_name {
                                html
                                text
                            }
                        }
                    }
                }

                body {
                    __typename
                    ... on PrismicNewsStoryBodyQuote {
                        primary {
                            quote {
                                text
                            }
                            quote_by {
                                text
                            }
                        }
                    }
                
                    ... on PrismicNewsStoryBodyFeaturedImage {
                        primary {
                            featured_image {
                                url
                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 1000, quality: 75, cropFocus: ENTROPY) {
                                            src
                                            aspectRatio
                                        }
                                    }
                                }
                            }
                            image_caption
                        }
                    }
                }
                
            }

            first_publication_date (formatString:"D MMMM YYYY")
        
        }
    }
`