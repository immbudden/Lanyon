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
import get from "lodash.get"
import TruncateMarkup from 'react-truncate-markup';
import Helmet from 'react-helmet'

// To consolodate 

const Section = styled.div `
    background: #FFF;
    z-index: 5;
`

const Container = styled.div `
    margin: 0 auto;
    padding: 7.5rem 0;
    max-width: 90%;
    display: flex;
    flex-direction: column;

    ${media.lessThan("medium")`
        padding: 2.5rem 0;
    `}
`

const NoTopContainer = styled.div `
    margin: 0 auto;
    padding: 0 0 10rem;
    max-width: 90%;
    display: flex;
    flex-direction: column;
`

const FeaturedNewsStoryWrapper = styled(Link) `
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: flex-start;
    flex-flow: row wrap;
    padding-top: 8.5rem;
    text-decoration: none;

    &:visited {
        color: #222;
    }
`

const FeaturedNewsStoryImgContainer = styled.div `
    flex: 1 1 57%;
    // height: 50vh;
    // min-height: 100%;
    min-height: 50vh;
    position: relative;

    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;

    ${media.lessThan("medium")`
        height: 35vh;
    `}
`

const NewsStoryFeaturedImg = styled(Img) `
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const FeaturedNewsStoryTextWrapper = styled.div `
    display: flex;
    flex: 1 1 43%; // Different from case studies (100%)
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #FFF; // Different

    ${media.lessThan("medium")`
        flex: 1 1 100%; // Different from case studies (100%)
        min-height: 25vh;
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
    flex: 1 1 100%;
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

const SecondaryHeadlineStoriesWrapper = styled.div `
    display: flex;
    flex: 1 1 100%;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
`

const SecondaryHeadlineStoryContainer = styled.div `
    display: flex;
    flex: 1 1 48.75%;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
    margin-right: 2.5%;

    &:nth-child(2) {
        margin-right: 0;
    }
`

const NewsStoryImgContainer = styled.div `
    // flex: 1 1 100%;
    height: 30vh;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    
`

const NewsStoryTextWrapper = styled.div ` 
    display: flex;
    // flex: 1 1 100%;
    flex-direction: column;
    justify-content: flex-start;
    background: #FFF;
    margin-top: 5rem;

    ${media.lessThan("medium")`
        border: 1px solid #EEEEEE;
        border-top: none;
        width: 100%;
        margin-top: 0;
    `}
`

const NewsStoryTextContainer = styled.div ` 

    ${media.lessThan("medium")`
        padding: 2.5rem;
    `}
`

// Note that this NewsStoryTextContainer is different from that in news-story

const NewsStoryTitle = styled.h2 `
    flex: 1 1 100%;
    font-size: 2.5rem;
    color: #222;
    font-weight: 400;
    margin-bottom: 2.5rem;
    line-height: 1.3;

    ${media.lessThan("medium")`
        font-size: 2.5rem;
    `}
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

const NewsStoryMeta = styled.div `
    flex: 1 1 100%;
    font-size: 1.5rem;
    color: #222;
`
// NewsStoryMeta could be consolidated with FeaturedNewsStoryMeta

const NewsStoriesWrapper = styled.div `
    display: flex;
    flex: 1 1 100%;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
`

const NewsStoryContainer = styled(Link) `
    display: flex;
    flex: 0 0 23.125%;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 2.5%;
    margin-bottom: 7.5rem;
    text-decoration: none;

    &:nth-child(4n) {
        margin-right: 0;
    }

    ${media.lessThan("medium")`
        flex: 1 1 100%;
        margin-right: 0;
        margin-bottom: 5rem;
    `}
`

const ViewMore = styled(Link) `
    font-size: 2rem;
    color: #199BAA;
    font-weight: 400;
    text-underline-position: under;
    text-transform: uppercase;
`

const NewsLink = styled(Link) `
    text-decoration: none;
`

const renderStories = (node, props) => {
    // console.log(node)

    const body = node.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});

    // console.log({body})

    const featured_image = get(body, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null);
    const authorName = node.data.author.document[0].data.author_name.text;
    const category = node.data.category.document[0].data.category.text;

    console.log(node)

    return (
        <NewsStoryContainer key={node.uid} to={`/news/${node.uid}`}>
        
            {featured_image && (
                <NewsStoryImgContainer>
                    <NewsStoryFeaturedImg fluid={featured_image} />
                </NewsStoryImgContainer>
            )}
            <NewsStoryTextWrapper>
                <NewsStoryTextContainer>
                    <NewsStoryTitle>{node.data.title.text}</NewsStoryTitle>
                    {/* <TruncateMarkup lines={3}>
                        <NewsStoryDescription>{node.data.short_description}</NewsStoryDescription>
                    </TruncateMarkup> */}
                    <NewsStoryMeta>
                        <Date>{node.data.published_date}</Date> &nbsp; &nbsp; <Category>{category}</Category>
                    </NewsStoryMeta>
                </NewsStoryTextContainer>
            </NewsStoryTextWrapper>
        
        </NewsStoryContainer>
    )
}


const NewsPage = (props) => { 

    const newsList = props.data.allPrismicNewsStory;
    const featuredList = props.data.allPrismicNewsStoryFeatured;
    const featuredStory = featuredList.edges[0];

    const body = featuredStory.node.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});

    const featuredStoryUrl = featuredStory.node.uid;
    const featuredStoryImg = get(body, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null)

    
    console.log(featuredStory.node.data.short_description)

    return (
        <div>
        <FontFace />
        <Nav />
        <NavMobile />

        <Helmet
            title='Lanyon - News and Insights'
            meta={[
                { name: 'description', content: 'Lanyon Group are a Belfast based PR and communications firm, specialising in strategic communications, reputation management and stakeholder engagement' },
                { name: 'keywords', content: 'communications, reputation, press, stakeholder, belfast, marketing, pr, media, design, video' },
            ]}
        >
          <html lang="en" />
        </Helmet>

        <Section>
            <FeaturedNewsStoryWrapper to={`/news/${featuredStoryUrl}`}>
                
                {featuredStoryImg && (
                    <FeaturedNewsStoryImgContainer>
                        <NewsStoryFeaturedImg fluid={featuredStoryImg} />
                    </FeaturedNewsStoryImgContainer>
                )}
                {/* <FeaturedNewsStoryImgContainer>
                    <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg.childImageSharp.fluid} />
                </FeaturedNewsStoryImgContainer> */}
                
                <FeaturedNewsStoryTextWrapper>
                    <FeaturedNewsStoryTextContainer>
                        <FeaturedNewsStoryTitle>{featuredStory.node.data.title.text}</FeaturedNewsStoryTitle>
                            {/* <TruncateMarkup lines={3}>
                                <NewsStoryDescription>{featuredStory.node.data.short_description}</NewsStoryDescription>
                            </TruncateMarkup> */}
                            <FeaturedNewsStoryMeta>
                                <Date>{featuredStory.node.data.published_date}</Date> &nbsp; &nbsp; <Category>{featuredStory.node.data.category.document[0].data.category.text}</Category>
                            </FeaturedNewsStoryMeta>
                    </FeaturedNewsStoryTextContainer>
                </FeaturedNewsStoryTextWrapper>
            </FeaturedNewsStoryWrapper>
        </Section>

        <Section>
            {/* <NewsNavWrapper>
                <Container>
                    <NewsNavLink>All</NewsNavLink>
                    <NewsNavLink>News</NewsNavLink>
                    <NewsNavLink>Events</NewsNavLink>
                    <NewsNavLink>Thought Leadership</NewsNavLink>
                </Container>
            </NewsNavWrapper> */}
            <Container>
                <NewsStoriesWrapper>
                        {newsList.edges.map(({ node }) => {
                            return renderStories(node, props)
                        })}
                </NewsStoriesWrapper>

                {/* <ViewMore>View More</ViewMore> */}
            </Container>
        </Section>
    </div>
    )

}

export default NewsPage

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
                                        fluid(maxWidth: 1000, quality: 60, cropFocus: ENTROPY) {
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
                                        fluid(maxWidth: 1000, quality: 60, cropFocus: ENTROPY) {
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
    }
`