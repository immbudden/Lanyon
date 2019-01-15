import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Global, css } from "@emotion/core"
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import HeroWrapper from '../components/heroWrapper'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import media from "styled-media-query";

// To consolodate 

const HeroImg = styled("img") `
    width: 100%;
    z-index: -1;
    position: fixed;
`

const Section = styled.div `
    background: #FFF;
    z-index: 5;
`

const Container = styled.div `
    margin: 0 auto;
    padding: 10rem 0;
    max-width: 90%;
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
    align-items: flex-start;
`

const NewsStoryContainer = styled.div `
    display: flex; 
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    background #FFF;
    padding: 5rem;
    padding-bottom: 0;
    flex-flow: row wrap;
    max-width: 59%;
    margin-top: -20rem;
    margin-right: 2.5%;
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
    margin-top: 2.5rem;
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
`

const QuoteClose = styled.p `
    flex: 1 1 100%;
    font-size: 7.5rem;
    color: #199BAA;
    margin-bottom: 0;
    margin-top: 5rem;
    text-align: center;
`

const QuoteText = styled.h6 `
    flex: 1 1 100%;
    font-size: 2.5rem;
    text-align: center;
    line-height: 1.2;
`

const QuoteBy = styled.p `
    flex: 1 1 100%;
    font-size: 1.5rem;
    text-align: center;
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
`

const FeaturedImage = styled("img") `
    width: 100%;
`

const FeaturedImageCaption = styled.div `
    display: flex;
    flex: 1 1 100%;
    background: #199BAA;
    padding: 1.5rem;
    font-size: 1.5rem;
    line-height: 1rem;
    color: #FFF;
`




const NewsStory = (props) => { 
    console.log(props.data.prismicNewsStory.data.body)
    
    const body = props.data.prismicNewsStory.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});

    const QuoteData = body.PrismicNewsStoryBodyQuote
    
    const headline_image = props.data.prismicNewsStory.data.headline_image.url
    const title = props.data.prismicNewsStory.data.title.text
    const main_content = props.data.prismicNewsStory.data.main_content.html
    // const published = props.data.prismicNewsStory.first_publication_date
    const published_date = props.data.prismicNewsStory.data.published_date
    const category = props.data.prismicNewsStory.data.category.document[0].data.category.text
    const author = props.data.prismicNewsStory.data.author.document[0].data.author_name.text
    
    //get the array
    
    // const {featured_image : fi0, quote: q0, image_caption : ic0} = body[0].primary;
    // // above line is equivalent to:
    // //  const fi0 = body[0].primary.feature_image;
    // //  const q0 = body[0].primary.quote;
    // // when order is reversed q0 will be undefined 

    // const {featured_image : fi = fi0, quote : q = q0, image_caption : ic = ic0} = body[1].primary;
    // // above line is equivalent to:
    // //  const fi = body[1].primary.feature_image || fi0;
    // //  const q = body[1].primary.quote || q0;
    // // when order is reversed fi0 will be assigned to fi

    // const featured_image = fi.url;
    // const quote = q.text;
    // const image_caption = ic;

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
        <HeroWrapper>
            <HeroImg src={headline_image}/>
        </HeroWrapper>
        <Section>
            <Container>
                <NewsStoryWrapper>
                    <NewsStoryContainer>
                        <SectionTitleLeft>{title}</SectionTitleLeft> {/* get from index */}
                        <NewsStoryMetaContainer>
                            <NewsStoryMeta>
                                <Date>{published_date}</Date> &nbsp; &nbsp; <Category>{category}</Category> &nbsp; &nbsp; <Author>{author}</Author>
                            </NewsStoryMeta>
                        </NewsStoryMetaContainer>
                        <NewsStoryTextContainer>
                                <NewsStoryText dangerouslySetInnerHTML={{ __html: main_content }} />
                                {body.PrismicNewsStoryBodyFeaturedImage && (
                                    <FeaturedImageWrapper>
                                        <FeaturedImageContainer>
                                            <FeaturedImage src={body.PrismicNewsStoryBodyFeaturedImage.featured_image.url} />
                                        </FeaturedImageContainer>
                                        <FeaturedImageCaption>{body.PrismicNewsStoryBodyFeaturedImage.image_caption}</FeaturedImageCaption>
                                    </FeaturedImageWrapper>
                                )}
                        </NewsStoryTextContainer>
                        </NewsStoryContainer>
                        {body.PrismicNewsStoryBodyQuote && (
                            <QuoteContainer>
                                <Quote>
                                    <QuoteOpen>&ldquo;</QuoteOpen>
                                    <QuoteText>{body.PrismicNewsStoryBodyQuote.quote.text}</QuoteText>
                                    <QuoteBy>John Murnaghan - M7 Head of UK Real Estate</QuoteBy>
                                    <QuoteClose>&rdquo;</QuoteClose>
                                </Quote>
                            </QuoteContainer>
                        )}
                </NewsStoryWrapper>
            </Container>
        </Section>
        <NavMobile />
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
                }

                title {
                    html
                    text
                }

                main_content {
                    html
                    text
                }

                published_date

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
                        }
                    }
                
                    ... on PrismicNewsStoryBodyFeaturedImage {
                        primary {
                            featured_image {
                                url
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