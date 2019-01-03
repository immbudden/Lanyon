import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
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
    margin-top: -30rem;
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

const NewsStory = (props) => { 
    console.log(props)

    const headline_image = props.data.prismicNewsStory.data.headline_image.url
    const title = props.data.prismicNewsStory.data.title.text
    const main_content = props.data.prismicNewsStory.data.main_content.html
    const published = props.data.prismicNewsStory.first_publication_date
    const category = props.data.prismicNewsStory.data.category.document[0].data.category.text
    const author = props.data.prismicNewsStory.data.author.document[0].data.author_name.text
    console.log(headline_image)

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
                                <Date>{published}</Date> &nbsp; &nbsp; <Category>{category}</Category> &nbsp; &nbsp; <Author>{author}</Author>
                            </NewsStoryMeta>
                        </NewsStoryMetaContainer>
                        <NewsStoryTextContainer>
                            <NewsStoryText><div dangerouslySetInnerHTML={{__html: main_content}} /></NewsStoryText>
                        </NewsStoryTextContainer>
                    </NewsStoryContainer>
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
            
        }
        first_publication_date (formatString:"D MMMM YYYY")
        }
    }
    `