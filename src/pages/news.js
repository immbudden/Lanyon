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
    min-height: 100%;
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

const NewsStoryImgContainer = styled.div `
    flex: 1 1 100%;
    height: 30vh;
    position: relative;
    overflow: hidden;
`

const NewsStoryTextContainer = styled.div ` 
    display: flex;
    flex: 1 1 100%;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
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
    flex: 1 1 23.125%;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
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


const NewsPage = (props) => { 

    // This is all old code for refrence 
    // console.log(props.data.prismicNewsStory.data.body)
    
    // const body = props.data.prismicNewsStory.data.body.reduce((object, item) => ({
    //     ...object,
    //     [item.__typename]: item.primary
    // }), {});

    // console.log(body)

    // const QuoteData = body.PrismicNewsStoryBodyQuote
    
    // const headline_image = props.data.prismicNewsStory.data.headline_image.url
    // const title = props.data.prismicNewsStory.data.title.text
    // const main_content = props.data.prismicNewsStory.data.main_content.html
    // // const published = props.data.prismicNewsStory.first_publication_date
    // const published_date = props.data.prismicNewsStory.data.published_date
    // const category = props.data.prismicNewsStory.data.category.document[0].data.category.text
    // const author = props.data.prismicNewsStory.data.author.document[0].data.author_name.text

    const newsList = props.data.allPrismicNewsStory;

    // const title = node.data.title.text
    // const short_description = node.data.short_description
    // const published_date = node.data.published_date
    // const author = node.data.author.document.data.author_name.text
    // const category = node.data.category.document.data.category.text

    return (
        <div>
        <FontFace />
        <Nav />

        <Section>
            <HeadlineNewsStoryWrapper>
                <HeadlineNewsStoryImgContainer>
                    <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg.childImageSharp.fluid} />
                </HeadlineNewsStoryImgContainer>
                <HeadlineNewsStoryTextWrapper>
                    <HeadlineNewsStoryTextContainer>
                        <HeadlineNewsStoryTitle>The big headline goes in here and should be striking</HeadlineNewsStoryTitle>
                        <HeadlineNewsStoryShortDescription>Short intro to the story in here, this introduction should hook the viewer in and be no longer than 140 characters</HeadlineNewsStoryShortDescription>
                            <HeadlineNewsStoryMeta>
                                <Date>DD Month YYYY</Date> &nbsp; &nbsp; <Category>Category</Category> &nbsp; &nbsp; <Author>Author Name</Author>
                            </HeadlineNewsStoryMeta>
                    </HeadlineNewsStoryTextContainer>
                </HeadlineNewsStoryTextWrapper>
            </HeadlineNewsStoryWrapper>
        </Section>

        <Section>
            <Container>
                <SecondaryHeadlineStoriesWrapper>
                    <SecondaryHeadlineStoryContainer>
                        <NewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg2.childImageSharp.fluid} />
                        </NewsStoryImgContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryTitle>The second headline goes in here and should be striking</NewsStoryTitle>
                            <NewsStoryDescription>Short intro to the story in here, this introduction should hook the viewer in and be no longer than 140 characters</NewsStoryDescription>
                                <NewsStoryMeta>
                                    <Date>DD Month YYYY</Date> &nbsp; &nbsp; <Category>Category</Category> &nbsp; &nbsp; <Author>Author Name</Author>
                                </NewsStoryMeta>
                        </NewsStoryTextContainer>
                    </SecondaryHeadlineStoryContainer>
                    
                    <SecondaryHeadlineStoryContainer>
                        <NewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg3.childImageSharp.fluid} />
                        </NewsStoryImgContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryTitle>The third headline goes in here and should be striking</NewsStoryTitle>
                            <NewsStoryDescription>Short intro to the story in here, this introduction should hook the viewer in and be no longer than 140 characters</NewsStoryDescription>
                                <NewsStoryMeta>
                                    <Date>DD Month YYYY</Date> &nbsp; &nbsp; <Category>Category</Category> &nbsp; &nbsp; <Author>Author Name</Author>
                                </NewsStoryMeta>
                        </NewsStoryTextContainer>
                    </SecondaryHeadlineStoryContainer>
                </SecondaryHeadlineStoriesWrapper>
            </Container>
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
            <NoTopContainer>
                <NewsStoriesWrapper>

                {newsList.edges.map(({ node }, i) => (
                    // <Link to={node.slugs} key={i} >
                        <NewsStoryContainer>
                            <NewsStoryImgContainer>
                                <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg4.childImageSharp.fluid} />
                            </NewsStoryImgContainer>
                            <NewsStoryTextContainer>
                                <NewsStoryTitle>{node.data.title.text}</NewsStoryTitle>
                                <NewsStoryDescription>{node.data.short_description}</NewsStoryDescription>
                                    <NewsStoryMeta>
                                        <Date>{node.data.published_date}</Date> &nbsp; &nbsp; <Category>{node.data.category.document[0].data.category.text}</Category> &nbsp; &nbsp; <Author>{node.data.author.document[0].data.author_name.text}</Author>
                                    </NewsStoryMeta>
                            </NewsStoryTextContainer>
                        </NewsStoryContainer>
                    // </Link>
                ))}

                    {/* <NewsStoryContainer>
                        <NewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg5.childImageSharp.fluid} />
                        </NewsStoryImgContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryTitle>The news headline goes in here and should be striking</NewsStoryTitle>
                            <NewsStoryDescription>Short intro to the story in here, this introduction should hook the viewer in and be no longer than 140 characters</NewsStoryDescription>
                                <NewsStoryMeta>
                                    <Date>DD Month YYYY</Date> &nbsp; &nbsp; <Category>{node.data.category.document.data.category.text}</Category> &nbsp; &nbsp; <Author>{node.data.author.document.data.author_name.text}</Author>
                                </NewsStoryMeta>
                        </NewsStoryTextContainer>
                    </NewsStoryContainer>

                    <NewsStoryContainer>
                        <NewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg6.childImageSharp.fluid} />
                        </NewsStoryImgContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryTitle>The news headline goes in here and should be striking</NewsStoryTitle>
                            <NewsStoryDescription>Short intro to the story in here, this introduction should hook the viewer in and be no longer than 140 characters</NewsStoryDescription>
                                <NewsStoryMeta>
                                    <Date>DD Month YYYY</Date> &nbsp; &nbsp; <Category>Category</Category> &nbsp; &nbsp; <Author>Author Name</Author>
                                </NewsStoryMeta>
                        </NewsStoryTextContainer>
                    </NewsStoryContainer>

                    <NewsStoryContainer>
                        <NewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg7.childImageSharp.fluid} />
                        </NewsStoryImgContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryTitle>The news headline goes in here and should be striking</NewsStoryTitle>
                            <NewsStoryDescription>Short intro to the story in here, this introduction should hook the viewer in and be no longer than 140 characters</NewsStoryDescription>
                                <NewsStoryMeta>
                                    <Date>DD Month YYYY</Date> &nbsp; &nbsp; <Category>Category</Category> &nbsp; &nbsp; <Author>Author Name</Author>
                                </NewsStoryMeta>
                        </NewsStoryTextContainer>
                    </NewsStoryContainer>

                    <NewsStoryContainer>
                        <NewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg4.childImageSharp.fluid} />
                        </NewsStoryImgContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryTitle>The news headline goes in here and should be striking</NewsStoryTitle>
                            <NewsStoryDescription>Short intro to the story in here, this introduction should hook the viewer in and be no longer than 140 characters</NewsStoryDescription>
                                <NewsStoryMeta>
                                    <Date>DD Month YYYY</Date> &nbsp; &nbsp; <Category>Category</Category> &nbsp; &nbsp; <Author>Author Name</Author>
                                </NewsStoryMeta>
                        </NewsStoryTextContainer>
                    </NewsStoryContainer>

                    <NewsStoryContainer>
                        <NewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg5.childImageSharp.fluid} />
                        </NewsStoryImgContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryTitle>The news headline goes in here and should be striking</NewsStoryTitle>
                            <NewsStoryDescription>Short intro to the story in here, this introduction should hook the viewer in and be no longer than 140 characters</NewsStoryDescription>
                                <NewsStoryMeta>
                                    <Date>DD Month YYYY</Date> &nbsp; &nbsp; <Category>Category</Category> &nbsp; &nbsp; <Author>Author Name</Author>
                                </NewsStoryMeta>
                        </NewsStoryTextContainer>
                    </NewsStoryContainer>

                    <NewsStoryContainer>
                        <NewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg6.childImageSharp.fluid} />
                        </NewsStoryImgContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryTitle>The news headline goes in here and should be striking</NewsStoryTitle>
                            <NewsStoryDescription>Short intro to the story in here, this introduction should hook the viewer in and be no longer than 140 characters</NewsStoryDescription>
                                <NewsStoryMeta>
                                    <Date>DD Month YYYY</Date> &nbsp; &nbsp; <Category>Category</Category> &nbsp; &nbsp; <Author>Author Name</Author>
                                </NewsStoryMeta>
                        </NewsStoryTextContainer>
                    </NewsStoryContainer>

                    <NewsStoryContainer>
                        <NewsStoryImgContainer>
                            <NewsStoryFeaturedImg fluid={props.data.NewsStoryPlaceholderImg7.childImageSharp.fluid} />
                        </NewsStoryImgContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryTitle>The news headline goes in here and should be striking</NewsStoryTitle>
                            <NewsStoryDescription>Short intro to the story in here, this introduction should hook the viewer in and be no longer than 140 characters</NewsStoryDescription>
                                <NewsStoryMeta>
                                    <Date>DD Month YYYY</Date> &nbsp; &nbsp; <Category>Category</Category> &nbsp; &nbsp; <Author>Author Name</Author>
                                </NewsStoryMeta>
                        </NewsStoryTextContainer>
                    </NewsStoryContainer> */}

                </NewsStoriesWrapper>

                <ViewMore>View More</ViewMore>
            </NoTopContainer>
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
                slugs
                id
                tags
                data {
                  
                  body {
                    __typename
                    ... on PrismicNewsStoryBodyFeaturedImage {
                      primary {
                        featured_image {
                          url
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

        NewsStoryPlaceholderImg: file(relativePath: { eq: "placeholders/NewsPlaceholder.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        NewsStoryPlaceholderImg2: file(relativePath: { eq: "placeholders/NewsPlaceholder2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        NewsStoryPlaceholderImg3: file(relativePath: { eq: "placeholders/NewsPlaceholder3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2500, maxHeight: 1100, cropFocus: CENTER ) {
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