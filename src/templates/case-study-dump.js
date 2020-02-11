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
import Carousel from 'nuka-carousel';
import media from "styled-media-query";
import CaseStudyCarousel from '../components/caseStudyCarousel';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet'
import get from "lodash.get"
import { ImageCaption, Quote, Text } from '../components/slices'
import { RichText } from 'prismic-reactjs'

// To consolodate

const HeaderImg = styled(Img) `
    min-height: 100vh;

    ${media.lessThan("medium")`
        min-height: 75vh;
    `}
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

    ${media.lessThan("medium")`
        padding: 5rem 0;
    `}
`

const NoTopContainer = styled.div `
    margin: 0 auto;
    padding: 0 0 10rem;
    max-width: 90%;
    display: flex;
    flex-direction: column;
`

const SectionTitleLeft = styled.h2 `
    font-size: 5.5rem; 
    color: #222; // Different from index.js - to consolodate 
    display: flex; // Different from index.js 
    flex: 1 1 100%; // Different from index.js
    font-family: Didot;
    font-weight: 100;
    margin-bottom: 5rem; // Different from index.js - to consolodate
    text-align: left;

    ${media.lessThan("medium")`
        font-size: 3.75rem; 
        text-align: center;
        width: 90%;
    `}
`

const Bold = styled.span `
    font-weight: 500; 
`

const CaseStudyTitle = styled.h2 `
    font-size: 10rem;
    color: #FFF;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    text-align: center;
    text-shadow: 2px 2px 8px rgba(34,34,34,0.5);

    ${media.lessThan("large")`
        font-size: 7.5rem;
    `}

    ${media.lessThan("medium")`
        font-size: 5rem;
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
    min-height: 100vh;
    
`

const GallerySlide = styled.div `
    height: 40vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;

    ${media.lessThan("medium")`
        height: 25vh;
    `}
`
const GallerySlideImg = styled(Img) `
    height: 100%;
    width: 100%;
    
`

const StyledCarousel = styled(Carousel) `
    display: block!important;

    ${media.lessThan("medium")`
        display: none!important;
    `}
`

const MobileCarousel = styled(Carousel) `
    display: none!important;

    ${media.lessThan("medium")`
        display: block!important;
    `}
`

// To consolodate end


const CaseStudyIntroWrapper = styled.div `
    display: flex; 
    flex: 1 1 72%;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -40rem;

    ${media.lessThan("medium")`
        margin-top: -25rem;
    `}

`

const CaseStudyIntroContainer = styled.div `
    display: flex; 
    justify-content: flex-end;
    flex-direction: row;
    align-items: flex-start;
    background #FFF;
    padding: 5rem 5rem 0;
    flex-flow: row wrap;
    max-width: 72%;

    ${media.lessThan("medium")`
        max-width: 100%;
        padding: 2.5rem 2.5rem 0;
    `}
`

const CaseStudyInfoContainer = styled.div `
    flex: 1 1 25.5%;
    margin-right: 2.5%;

    ${media.lessThan("medium")`
        flex: 1 1 100%;
    `}
`

const InfoTitle = styled.h6 `
    display: flex; 
    flex: 1 1 100%;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    font-size: 2.5rem;
    font-weight: 100;
    margin-bottom: 1.5rem;
    margin-top: -0.5rem; // spacing will need fixed so text aligns
`

const InfoText = styled.div `
    display: flex; 
    flex: 1 1 100%;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.8rem;
    margin-bottom: 3.8rem;
    font-weight: 100;
`

const CaseStudyDescriptionContainer = styled.div `
    display: flex; 
    flex: 1 1 72%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    ${media.lessThan("medium")`
        align-items: center;
    `}
`

const CaseStudyDescription = styled.p `
    font-size: 1.8rem;
    font-weight: 100;
    color: #222;
    line-height: 1.75;
    flex: 1 1 100%;
    margin-bottom: 0;
`

const ContactButton = styled.button `
    background: #004655;
    color: #FFF;
    font-size: 2rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    text-transform: uppercase;
    margin-top: 2.5rem;
    cursor: pointer;

    ${media.lessThan("medium")`
        margin-top: 5rem;
    `}
`

const SectionColoured = styled.div `
    background: #004655;
`

const CenterThreeContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: row wrap;
    margin: 0 auto;
    width: 59%;

    ${media.lessThan("medium")`
        width: 100%;
        justify-content: center;
    `}
`

const VideoContainer = styled.div `
    display: flex;
    width: 100%;
`

const StatWrapper = styled.div ` // Same as about page services
    display: flex;
    flex: 12 1 0%;
    justify-content: space-between;
    // margin-right: 5rem; Different from index (needs removed)
    flex-wrap: wrap;
`

const StatContainer = styled.div ` // Same as about page services
    flex: 12 1 23.5%; // Different from index
    // width: 23.5%; Different from index (to be removed)
    margin-bottom: 0rem; // Different from about (to be removed)
    margin-right: 2%;

    &:nth-child(4n) {
        margin-right: 0;
    } // Different from index

    &:nth-child(n+4) {
        margin-bottom: 0;
    } // Different from index

    ${media.lessThan("medium")`
        flex: 12 1 45%;
        margin-bottom: 5rem;
        margin-right: 5%;

        &:nth-child(2n) {
            margin-right: 0;
        }
        
        &:nth-child(n+4) {
            margin-bottom: 0rem;
        }

        &:nth-child(2n+1) {
            margin-bottom: 0rem;
        }
    `}
`

const StatHeadline = styled.h3 ` // Same as about page services
    font-size: 5rem;
    color: #FFF;
    font-weight: 100;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2.5rem;
`

const StatText = styled.p `
    font-size: 2rem;
    color: #FFF;
    font-weight: 400;
    margin: 0 auto;
    text-align: center;

    ${media.lessThan("medium")`
        font-size: 1.8rem;
    `}
`


const SectionSubtitleLeft = styled.h3 `
    font-size: 4rem; 
    color: #222; 
    flex: 1 1 100%;
    font-family: Didot;
    font-weight: 100;
    margin-bottom: 5rem; 
    text-align: left;

    ${media.lessThan("medium")`
        font-size: 3rem; 
        text-align: center;
        width: 100%;
        justify-content: center;
    `}
`

const SectionImg = styled(Img) `
    width: 100%;
    min-height: 50vh;
    height: 50vh;
`

const Url = styled(Link) `
    text-decoration: none;
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

`

const Video = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: 5rem;
`

const Player = styled(ReactPlayer)`

`

// Sort and display the different slice options
const PostSlices = ({ slices }) => {
    return slices.map((slice, index) => {
      const res = (() => {
        switch(slice.type) {

          case 'text_with_video': return (
            <div key={ index }>
              { <TextWithVideo slice={ slice } /> }
            </div>
          )

        //   case 'featured_people': return (
        //     <div key={ index }>
        //       { <Quote slice={ slice } /> }
        //     </div>
        //   )
  
          case 'section_image': return (
            <div key={ index }>
              { <SectionImage slice={ slice } /> }
            </div>
          )
  
          case 'section_title___text': return (
            <div key={ index }>
              { <TitleAndText slice={ slice } /> }
            </div>
          )

        //   case 'image_gallery': return (
        //     <div key={ index }>
        //       { <ImageCaption slice={ slice } /> }
        //     </div>
        //   )
  
          default: return
          
        }
      })();
      return res;
    })
  }
  
  // Display the title, date, and content of the Post
  const PostBody = ({ slicePost }) => {
    
    return (
        <div>
        <FontFace />
        <Nav />
        <NavMobile />
        <Helmet
            title={`${client_name}`}
            meta={[
                { name: 'description', content: `${client_brief}` },
            ]}
        >
            <meta property="keywords" content={`${client_brief}`}/>
            <meta property="og:image" content={`${rootUrl}${headline_image}`}/>
            <meta property="og:url" content="https://lanyongroup.com"/>
            <meta property="og:title" content={`${title}`}/>
            <meta property="og:description" content={`${introduction}`}/>
            <meta property="og:site_name" content="Lanyon" />
            <meta property="og:type" content="website" />
            <meta name="twitter:site" content="@LanyonGroup" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={`${rootUrl}${headline_image}`} />
            <meta name="twitter:image:alt" content={`${title}`} />
            <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Symbol"></script>
            <html lang="en" />
        </Helmet>
        <HeaderWrapper>
            <HeaderImg style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
            }}
                fluid={headline_image} />
        </HeaderWrapper>
        <Section>
            <Container>
                <CaseStudyIntroWrapper>
                    <CaseStudyIntroContainer>
                        <SectionTitleLeft>{title}</SectionTitleLeft> {/* get from index */}
                        <CaseStudyInfoContainer>
                            <InfoTitle>Client</InfoTitle>
                            <InfoText>{client_name}</InfoText>
                            <InfoTitle>Brief</InfoTitle>
                            <InfoText>{client_brief}</InfoText>
                        </CaseStudyInfoContainer>
                        <CaseStudyDescriptionContainer>
                            <CaseStudyDescription>
                                {introduction}
                                <br /><br />
                                Interested in working on something similar? <Bold>Let’s chat about it.</Bold>
                            </CaseStudyDescription>
                            <Url to="/contact">
                                <ContactButton>Get in touch</ContactButton>
                            </Url>
                        </CaseStudyDescriptionContainer>
                    </CaseStudyIntroContainer>
                </CaseStudyIntroWrapper>
            </Container>
        </Section>
        <SectionColoured>
            <Container>
                <StatWrapper>
                <StatContainer>
                    <StatHeadline>{stat_1_num}</StatHeadline>
                    <StatText>{stat_1_text}</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>{stat_2_num}</StatHeadline>
                    <StatText>{stat_2_text}</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>{stat_3_num}</StatHeadline>
                    <StatText>{stat_3_text}</StatText>
                </StatContainer>
                <StatContainer>
                    <StatHeadline>{stat_4_num}</StatHeadline>
                    <StatText>{stat_4_text}</StatText>
                </StatContainer>
                </StatWrapper>
            </Container>
        </SectionColoured>
        <Section>
            <PostSlices />
        </Section>

        {/* Contact Hook */}
        <Section>
            <Container>
                <CenterThreeContainer>
                    <SectionSubtitleLeft>Interested in how we can support your project?</SectionSubtitleLeft>
                    <CaseStudyDescription>
                        At Lanyon we are always interested in collaborating with likeminded people. If you are interested in hearing more about Lanyon and how we can support your organisation or project, get in touch with our Partners today.
                    </CaseStudyDescription>
                    <Url to="/contact">
                        <ContactButton>Get in touch</ContactButton>
                    </Url>
                </CenterThreeContainer>
            </Container>
        </Section>
        <Section id="caseStudies">
            <CaseStudyCarousel/>
        </Section>
    </div>
    );
  }
  
  export default (props) => {
    // Define the Post content returned from Prismic
    const doc = data.allPrismicCaseStudy.edges.slice(0, 1).pop()
  
    if(!doc) return null;
  
    return(
      <div>
        <PostBody slicePost={ doc.node } />
      </div>
    )
  }



const PostSlices = ({ data }) => {

    // // Text and Video Section
    // const video_section_title = props.data.video_section_title.text
    // const video_section_text = props.data.video_section_text.html
    // const video_section_video = props.data.video_section_video.embed_url

    // Featured People
    // const featured_person_1_name = props.data.featured_person_1_name.text
    // const featured_person_1_title = props.data.featured_person_1_title.text
    // const featured_person_1_image = props.data.featured_person_1_image.localFile.childImageSharp.fluid
    // const featured_person_2_name = props.data.featured_person_2_name.text
    // const featured_person_2_title = props.data.featured_person_2_title.text
    // const featured_person_2_image = props.data.featured_person_2_image.localFile.childImageSharp.fluid
    // const featured_person_3_name = props.data.featured_person_3_name.text
    // const featured_person_3_title = props.data.featured_person_3_title.text
    // const featured_person_3_image = props.data.featured_person_3_image.localFile.childImageSharp.fluid
    // const featured_person_4_name = props.data.featured_person_4_name.text
    // const featured_person_4_title = props.data.featured_person_4_title.text
    // const featured_person_4_image = props.data.featured_person_4_image.localFile.childImageSharp.fluid
    

    // Image Section
    const section_image = props.data.section_image.localFile.childImageSharp.fluid

    // Title and Text Section
    const section_title = props.data.section_title.text
    const section_text = props.data.section_text.html

    // Image Gallery
    // const section_image = get(body, "PrismicCaseStudyBodyImageGallery.section_image.localFile.childImageSharp.fluid", null)


    if (!doc) return null
    return (
        <div>
        <Link to="/">
            <span>go back</span>
        </Link>
        <h1>{RichText.asText(doc.node.title)}</h1>
        <span>
            <em>{doc.node.date}</em>
        </span>
        <div>{RichText.render(doc.node.post_body)}</div>
        </div>
    )
    }

    {props.data.body.map(({ __typename, props }, i) => {
        switch (__typename) {

            case "PrismicCaseStudyBodyTextWithVideo":
                return (
                    <div key={i}>
                        <Section>
                            <Container>
                            <CenterThreeContainer>
                                <SectionSubtitleLeft>{props.data.video_section_title.text}</SectionSubtitleLeft>
                                <CaseStudyDescription>
                                    {props.data.video_section_text.html}
                                </CaseStudyDescription>
                                <Video> 
                                    <Player 
                                        url={props.data.video_section_video.embed_url}
                                        width='100%'
                                        height='50vh'
                                        controls={true}
                                    />
                                </Video>
                            </CenterThreeContainer>
                            </Container>
                        </Section>
                    </div>
                )
            
            case "PrismicCaseStudyBodySectionImage":
                return (
                    <div key={i}>
                        <Section>
                            <SectionImg fluid={section_image} />
                        </Section>
                    </div>
                )

            case "PrismicCaseStudyBodySectionTitleText":
                return (
                    <div key={i}>
                        <Section>
                            <Container>
                                <CenterThreeContainer>
                                    <SectionSubtitleLeft>{section_title}</SectionSubtitleLeft>
                                    <CaseStudyDescription>
                                        {section_text}
                                    </CaseStudyDescription>
                                </CenterThreeContainer>
                            </Container>
                        </Section>
                    </div>
                )

          default:
            return null;

        }
      })}

    // console.log(body)

    // return slices.map((slice, index) => {

    // const res = (() => {

    //     switch (slice.type) {

    //     // Video and Text Slice
    //     case 'text_with_video':
    //     return (
    //         <div key={index}>
    //             <Section>
    //                 <Container>
    //                 <CenterThreeContainer>
    //                     <SectionSubtitleLeft>{video_section_title}</SectionSubtitleLeft>
    //                     <CaseStudyDescription>
    //                         {video_section_text}
    //                     </CaseStudyDescription>
    //                     <Video> 
    //                         <Player 
    //                             url={video_section_video}
    //                             width='100%'
    //                             height='50vh'
    //                             controls={true}
    //                         />
    //                     </Video>
    //                 </CenterThreeContainer>
    //                 </Container>
    //             </Section>
    //         </div>
    //     )

    //     // Image Section
    //     case 'section_image':
    //     return (
    //         <div key={index}>
    //             <Section>
    //                 <SectionImg fluid={section_image} />
    //             </Section>
    //         </div>
    //     )

    //     // Title and Text Section
    //     case 'section_title___text':
    //     return (
    //         <div key={index}>
    //             <Section>
    //                 <Container>
    //                     <CenterThreeContainer>
    //                         <SectionSubtitleLeft>{section_title}</SectionSubtitleLeft>
    //                         <CaseStudyDescription>
    //                             {section_text}
    //                         </CaseStudyDescription>
    //                     </CenterThreeContainer>
    //                 </Container>
    //             </Section>
    //         </div>
    //     )

    //     default:
    //         return
    //     }
    // })()

    // return res
    // })
}


const CaseStudy = (props) => { 


    // Colours
    const case_study_colour = props.data.prismicCaseStudy.data.case_study_colour

    // Top Section
    const title = props.data.prismicCaseStudy.data.title.text
    const client_name = props.data.prismicCaseStudy.data.client_name.text
    const client_brief = props.data.prismicCaseStudy.data.client_brief.html
    const introduction = props.data.prismicCaseStudy.data.introduction.html
    const headline_image = props.data.prismicCaseStudy.data.headline_image.localFile.childImageSharp.fluid
    const rootUrl = 'https://lanyongroup.com/'

    //Stats
    const stat_1_num = props.data.prismicCaseStudy.data.stat_1_num
    const stat_1_text = props.data.prismicCaseStudy.data.stat_1_text
    const stat_2_num = props.data.prismicCaseStudy.data.stat_2_num
    const stat_2_text = props.data.prismicCaseStudy.data.stat_2_text
    const stat_3_num = props.data.prismicCaseStudy.data.stat_3_num
    const stat_3_text = props.data.prismicCaseStudy.data.stat_3_text
    const stat_4_num = props.data.prismicCaseStudy.data.stat_4_num
    const stat_4_text = props.data.prismicCaseStudy.data.stat_4_text
   

    return (
        
    )

}

export default CaseStudy

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
    query SlicesQuery($uid: String)
        {
            allPrismicCaseStudy(uid: $uid): allPrismicCaseStudy(sort: {order: ASC, fields: [data___order]}) {
            edges {
                node {
                id
                uid
                data {
                    order
                    case_study_colour
                    title {
                    text
                    }
                    headline_image {
                    __typename
                    localFile {
                        childImageSharp {
                        fluid(maxWidth: 2500, quality: 80, cropFocus: ENTROPY) {
                            src
                            aspectRatio
                        }
                        }
                    }
                    }
                    client_name {
                    text
                    }
                    client_brief {
                    html
                    }
                    introduction {
                    html
                    }
                    stat_1_num
                    stat_1_text
                    stat_2_num
                    stat_2_text
                    stat_3_num
                    stat_3_text
                    stat_4_num
                    stat_4_text
                    body {
                    __typename
                    ... on PrismicCaseStudyBodyTextWithVideo {
                        primary {
                        video_section_title {
                            text
                        }
                        video_section_text {
                            html
                        }
                        video_section_video {
                            embed_url
                        }
                        }
                    }
                    __typename
                    ... on PrismicCaseStudyBodyFeaturedPeople {
                        primary {
                        featured_person_1_name {
                            text
                        }
                        featured_person_1_title {
                            text
                        }
                        featured_person_1_image {
                            localFile {
                            childImageSharp {
                                fluid(maxWidth: 600, quality: 65, cropFocus: ENTROPY) {
                                src
                                aspectRatio
                                }
                            }
                            }
                        }
                        featured_person_2_name {
                            text
                        }
                        featured_person_2_title {
                            text
                        }
                        featured_person_2_image {
                            localFile {
                            childImageSharp {
                                fluid(maxWidth: 600, quality: 65, cropFocus: ENTROPY) {
                                src
                                aspectRatio
                                }
                            }
                            }
                        }
                        featured_person_3_name {
                            text
                        }
                        featured_person_3_title {
                            text
                        }
                        featured_person_3_image {
                            localFile {
                            childImageSharp {
                                fluid(maxWidth: 600, quality: 65, cropFocus: ENTROPY) {
                                src
                                aspectRatio
                                }
                            }
                            }
                        }
                        featured_person_4_name {
                            text
                        }
                        featured_person_4_title {
                            text
                        }
                        featured_person_4_image {
                            localFile {
                            childImageSharp {
                                fluid(maxWidth: 600, quality: 65, cropFocus: ENTROPY) {
                                src
                                aspectRatio
                                }
                            }
                            }
                        }
                        }
                    }
                    __typename
                    ... on PrismicCaseStudyBodySectionImage {
                        primary {
                        section_image {
                            url
                            localFile {
                            childImageSharp {
                                fluid(maxWidth: 2500, quality: 80, cropFocus: ENTROPY) {
                                src
                                aspectRatio
                                }
                            }
                            }
                        }
                        }
                    }
                    __typename
                    ... on PrismicCaseStudyBodySectionTitleText {
                        primary {
                        section_title {
                            text
                        }
                        section_text {
                            html
                        }
                        }
                    }
                    __typename
                    ... on PrismicCaseStudyBodyImageGallery {
                        items {
                        gallery_image {
                            url
                            alt
                            localFile {
                            childImageSharp {
                                fluid(maxWidth: 800, quality: 60, cropFocus: ENTROPY) {
                                src
                                aspectRatio
                                }
                            }
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
            }

            SSCar1Img: file(relativePath: { eq: "case-studies/StatSports/SSCar1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, maxHeight: 525, cropFocus: NORTH ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        
            SSCar2Img: file(relativePath: { eq: "case-studies/StatSports/SSCar2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: ENTROPY ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        
            SSCar3Img: file(relativePath: { eq: "case-studies/StatSports/SSCar3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        
            SSCar4Img: file(relativePath: { eq: "case-studies/StatSports/SSCar4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        
            SSCar5Img: file(relativePath: { eq: "case-studies/StatSports/SSCar5.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        
            SSCar6Img: file(relativePath: { eq: "case-studies/StatSports/SSCar6.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        
`
