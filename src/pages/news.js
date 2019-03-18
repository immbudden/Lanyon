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
import Truncate from 'react-truncate';

// To consolodate 

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

const NoTopContainer = styled.div `
    margin: 0 auto;
    padding: 0 0 10rem;
    max-width: 90%;
    display: flex;
    flex-direction: column;
`

const HeadlineNewsStoryWrapper = styled.div `
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: flex-start;
    flex-flow: row wrap;
    padding-top: 7.5rem;
`

const HeadlineNewsStoryImgContainer = styled.div `
    flex: 1 1 57%;
    height: 50vh;
    position: relative;
    overflow: hidden;
`

const NewsStoryFeaturedImg = styled(Img) `
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const HeadlineNewsStoryTextWrapper = styled.div `
    display: flex;
    flex: 1 1 43%; // Different from case studies (100%)
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #FFF; // Different
`

const HeadlineNewsStoryTextContainer = styled.div ` 
    padding: 0 5rem;
`

const HeadlineNewsStoryTitle = styled.h2 `
    flex: 0 0 100%;
    font-size: 5rem;
    color: #222;
    font-weight: 400;
    margin-bottom: 5rem;
`

const HeadlineNewsStoryShortDescription = styled.p `
    flex: 0 0 100%;
    font-size: 2rem;
    color: #222;
    font-weight: 100;
    margin-bottom: 2.5rem;
`

const HeadlineNewsStoryMeta = styled.div `
    flex: 0 0 100%;
    font-size: 1.5rem;
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

const NewsStoryImgContainer = styled.a `
    flex: 1 1 100%;
    height: 30vh;
    position: relative;
    overflow: hidden;
`

const NewsStoryTextContainer = styled.div ` 
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: flex-start;
    
    background: #FFF;
    margin-top: 5rem;
`
// Note that this NewsStoryTextContainer is different from that in news-story

const NewsStoryTitle = styled.h2 `
    flex: 1 1 100%;
    font-size: 2.5rem;
    color: #222;
    font-weight: 400;
    margin-bottom: 2.5rem;
`

const NewsStoryDescription = styled.p `
    flex: 1 1 100%;
    font-size: 2rem;
    color: #222;
    font-weight: 100;
    margin-bottom: 5rem;
`

const NewsStoryMeta = styled.div `
    flex: 0 0 100%;
    font-size: 1.5rem;
`
// NewsStoryMeta could be consolidated with HeadlineNewsStoryMeta

const NewsStoriesWrapper = styled.div `
    display: flex;
    flex: 1 1 100%;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
`

const NewsStoryContainer = styled.div `
    display: flex;
    flex: 0 0 23.125%;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 2.5%;
    margin-bottom: 7.5rem;

    &:nth-child(4n) {
        margin-right: 0;
    }
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

const TruncateBlank = styled(Truncate) `
    flex: 1 1 100%;
    font-size: 2rem;
    color: #222;
    font-weight: 100;
    margin-bottom: 5rem;
`

const renderItem = (node, props) => {
    // console.log(node)

    const body = node.data.body.reduce((object, item) => ({
        ...object,
        [item.__typename]: item.primary
    }), {});

    console.log({body})

    const featured_image = get(body, "PrismicNewsStoryBodyFeaturedImage.featured_image.localFile.childImageSharp.fluid", null)

    return (
        <NewsStoryContainer key={node.uid}>
            {featured_image && (
                <NewsStoryImgContainer href={`/news/${node.uid}`}>
                    <NewsStoryFeaturedImg fluid={featured_image} />
                </NewsStoryImgContainer>
            )}
            <NewsStoryTextContainer>
                <NewsStoryTitle>{node.data.title.text}</NewsStoryTitle>
                <TruncateBlank lines={3} ellipsis={<span>...</span>}>
                    <NewsStoryDescription>{node.data.short_description}</NewsStoryDescription>
                </TruncateBlank>
                <NewsStoryMeta>
                    <Date>{node.data.published_date}</Date> &nbsp; &nbsp; <Category>{node.data.category.document[0].data.category.html}</Category> &nbsp; &nbsp; <Author>{node.data.author.document[0].data.author_name.text}</Author>
                </NewsStoryMeta>
            </NewsStoryTextContainer>
        </NewsStoryContainer>
    )
}


const NewsPage = (props) => { 

    const newsList = props.data.allPrismicNewsStory;

    return (
        <div>
        <FontFace />
        <Nav />

        <Section>
            <HeadlineNewsStoryWrapper>
                
                <HeadlineNewsStoryImgContainer>
                    {/* <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg.childImageSharp.fluid} /> */}
                    <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg.childImageSharp.fluid} />
                </HeadlineNewsStoryImgContainer>
                
                <HeadlineNewsStoryTextWrapper>
                    <HeadlineNewsStoryTextContainer>
                        <HeadlineNewsStoryTitle>Three New Zealand Super Rugby teams sign up to use STATSport’s GPS tracking technology</HeadlineNewsStoryTitle>
                        <HeadlineNewsStoryShortDescription>Three New Zealand Super Rugby teams have signed up to use STATSports’ World Rugby-approved sports monitoring technology.</HeadlineNewsStoryShortDescription>
                            <HeadlineNewsStoryMeta>
                                <Date>4 February 2019</Date>&nbsp; &nbsp; <Author>David Elliott</Author>
                            </HeadlineNewsStoryMeta>
                    </HeadlineNewsStoryTextContainer>
                </HeadlineNewsStoryTextWrapper>
            </HeadlineNewsStoryWrapper>
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
                            return renderItem(node, props)
                        })}
                </NewsStoriesWrapper>

                {/* <ViewMore>View More</ViewMore> */}
            </Container>
        </Section>

        
        <NavMobile />
    </div>
    )

}

export default NewsPage

export const query = graphql`
    query {

        allPrismicNewsStory (sort: {order: DESC, fields: [data___published_date]}) {
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
        NewsStoryPlaceholderImg4: file(relativePath: { eq: "placeholders/NewsPlaceholder4.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        NewsStoryPlaceholderImg5: file(relativePath: { eq: "placeholders/NewsPlaceholder5.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        NewsStoryPlaceholderImg6: file(relativePath: { eq: "placeholders/NewsPlaceholder6.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        NewsStoryPlaceholderImg7: file(relativePath: { eq: "placeholders/NewsPlaceholder7.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`