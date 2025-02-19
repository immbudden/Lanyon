import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import media from "styled-media-query";

const Url = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const Slide = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
`;
const SlideImg = styled(Img)`
  min-height: 100vh;
`;

const CaseStudyTitle = styled.h2`
  font-size: 10rem;
  color: #fff;
  font-family: Didot;
  font-weight: 100;
  margin: 0 auto;
  text-align: center;
  text-shadow: 2px 2px 8px rgba(34, 34, 34, 0.5);

  ${media.lessThan("large")`
        font-size: 7.5rem;
    `}

  ${media.lessThan("medium")`
        font-size: 5rem;
    `}
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 10rem 0;
  max-width: 90%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export default () => (
  <StaticQuery
    query={graphql`
      query CaseStudySlidesQuery {
        INCover: file(
          relativePath: { eq: "case-studies/InnovationNation18/IN-cover.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        MIPIMCover: file(
          relativePath: { eq: "case-studies/MIPIM18/MIPIM-cover.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        NIMarketOutlookCover: file(
          relativePath: { eq: "case-studies/NIMarketOutlook18/NIMO-cover.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        LMCover: file(
          relativePath: { eq: "case-studies/LinenMill/LM-cover.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <Slide>
          <Url to="/linenmill-studios/">
            <SlideImg
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
              }}
              fluid={data.LMCover.childImageSharp.fluid}
            />
            <Container>
              <CaseStudyTitle>Linen Mill Studios</CaseStudyTitle>
            </Container>
          </Url>
        </Slide>
        <Slide>
          <Url to="/mipim2018/">
            <SlideImg
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
              }}
              fluid={data.MIPIMCover.childImageSharp.fluid}
            />
            <Container>
              <CaseStudyTitle>MIPIM Belfast</CaseStudyTitle>
            </Container>
          </Url>
        </Slide>
        <Slide>
          <Url to="/outlook2018/">
            <SlideImg
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
              }}
              fluid={data.NIMarketOutlookCover.childImageSharp.fluid}
            />
            <Container>
              <CaseStudyTitle>NI Market Outlook</CaseStudyTitle>
            </Container>
          </Url>
        </Slide>
        <Slide>
          <Url to="/innovation-nation2018/">
            <SlideImg
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
              }}
              fluid={data.INCover.childImageSharp.fluid}
            />
            <Container>
              <CaseStudyTitle>Innovation Nation</CaseStudyTitle>
            </Container>
          </Url>
        </Slide>
      </div>
    )}
  />
);

// const CaseStudyCarousel = (props) => (

//     <div>
//         <FontFace />
//         <Carousel edgeEasing="easeQuadInOut" renderBottomCenterControls={false} wrapAround={true}>
//             <Slide>
//                 <Url to="/statsports/">
//                     <SlideImg
//                     style={{
//                         position: "absolute",
//                         left: 0,
//                         top: 0,
//                         width: "100%",
//                         zIndex: -1,
//                     }}
//                     fluid={props.data.SSCover.childImageSharp.fluid} />
//                     <Container>
//                             <CaseStudyTitle>STATSports</CaseStudyTitle>
//                     </Container>
//                 </Url>
//             </Slide>
//             <Slide>
//                 <Url to="/linenmill-studios/">
//                     <SlideImg
//                     style={{
//                         position: "absolute",
//                         left: 0,
//                         top: 0,
//                         width: "100%",
//                         zIndex: -1,
//                     }}
//                     fluid={props.data.LMCover.childImageSharp.fluid} />
//                     <Container>
//                             <CaseStudyTitle>Linen Mill Studios</CaseStudyTitle>
//                     </Container>
//                 </Url>
//             </Slide>
//             <Slide>
//                 <Url to="/mipim2018/">
//                     <SlideImg
//                     style={{
//                         position: "absolute",
//                         left: 0,
//                         top: 0,
//                         width: "100%",
//                         zIndex: -1,
//                     }}
//                     fluid={props.data.MIPIMCover.childImageSharp.fluid} />
//                     <Container>
//                             <CaseStudyTitle>MIPIM Belfast</CaseStudyTitle>
//                     </Container>
//                 </Url>
//             </Slide>
//             <Slide>
//                 <Url to="/outlook2018/">
//                     <SlideImg
//                     style={{
//                         position: "absolute",
//                         left: 0,
//                         top: 0,
//                         width: "100%",
//                         zIndex: -1,
//                     }}
//                     fluid={props.data.NIMarketOutlookCover.childImageSharp.fluid} />
//                     <Container>
//                             <CaseStudyTitle>NI Market Outlook</CaseStudyTitle>
//                     </Container>
//                 </Url>
//             </Slide>
//             <Slide>
//                 <Url to="/innovation-nation2018/">
//                     <SlideImg
//                     style={{
//                         position: "absolute",
//                         left: 0,
//                         top: 0,
//                         width: "100%",
//                         zIndex: -1,
//                     }}
//                     fluid={props.data.INCover.childImageSharp.fluid} />
//                     <Container>
//                             <CaseStudyTitle>Innovation Nation</CaseStudyTitle>
//                     </Container>
//                 </Url>
//             </Slide>
//         </Carousel>
//     </div>

// )

// export default CaseStudyCarousel

// export const CaseStudyCarouselQuery = graphql`
//     query {

//             INCover: file(relativePath: { eq: "case-studies/InnovationNation18/IN-cover.jpg" }) {
//                 childImageSharp {
//                     fluid(maxWidth: 2500) {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }

//             MIPIMCover: file(relativePath: { eq: "case-studies/MIPIM18/MIPIM-cover.jpg" }) {
//                 childImageSharp {
//                     fluid(maxWidth: 2500) {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }

//             NIMarketOutlookCover: file(relativePath: { eq: "case-studies/NIMarketOutlook18/NIMO-cover.jpg" }) {
//                 childImageSharp {
//                     fluid(maxWidth: 2500) {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }

//             LMCover: file(relativePath: { eq: "case-studies/LinenMill/LM-cover.jpg" }) {
//                 childImageSharp {
//                     fluid(maxWidth: 2500) {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }

//             SSCover: file(relativePath: { eq: "case-studies/StatSports/SS-cover.jpg" }) {
//                 childImageSharp {
//                     fluid(maxWidth: 2500) {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }
//     }
// `
