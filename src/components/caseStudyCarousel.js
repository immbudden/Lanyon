import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import FontFace from "../utils/font-face";
import Carousel from "nuka-carousel";
import media from "styled-media-query";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

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
  text-shadow: 2px 2px 8px rgba(34, 34, 34, 0.75);

  ${media.lessThan("large")`
        font-size: 7.5rem;
    `}

  ${media.lessThan("medium")`
        font-size: 3.5rem;
    `}
`;

const CaseStudyNumber = styled.h5`
  font-size: 3rem;
  color: #fff;
  font-family: GillSansMTPro;
  font-weight: 400;
  text-align: center;
  text-shadow: 2px 2px 8px rgba(34, 34, 34, 0.75);

  ${media.lessThan("large")`
        font-size: 2rem;
    `}

  ${media.lessThan("medium")`
        font-size: 1.5rem;
    `}
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 10rem 0;

  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;

  background: linear-gradient(
    to top,
    transparent,
    20%,
    rgba(22, 22, 22, 0.5),
    80%,
    transparent
  );
`;

const CarouselNav = styled.button`
  background: #fff;
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
`;

export default () => (
  <StaticQuery
    query={graphql`
      query registryQuery {
        INCover: file(
          relativePath: { eq: "case-studies/InnovationNation18/IN-cover.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500, cropFocus: ENTROPY, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        MIPIMCover: file(
          relativePath: { eq: "case-studies/MIPIM18/MIPIM-cover.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500, cropFocus: ENTROPY, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        NIMarketOutlookCover: file(
          relativePath: { eq: "case-studies/NIMarketOutlook/NIMOPanel.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500, cropFocus: ENTROPY, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        LMCover: file(
          relativePath: { eq: "case-studies/LinenMill/LM-cover.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500, cropFocus: ENTROPY, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        SSCover: file(
          relativePath: { eq: "case-studies/StatSports/SS-cover.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500, cropFocus: ENTROPY, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        RBCover: file(
          relativePath: { eq: "case-studies/RoryBest/RB-cover.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500, cropFocus: ENTROPY, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        MIPIM19Cover: file(
          relativePath: { eq: "case-studies/MIPIM19/MIPIM19Cover.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2500, cropFocus: ENTROPY, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        NIEImg: file(relativePath: { eq: "case-studies/NIE/pylon.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 2500
              maxHeight: 1400
              cropFocus: CENTER
              quality: 80
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Carousel
        renderBottomCenterControls={null}
        wrapAround={true}
        easing="easePolyInOut"
        edgeEasing="easePolyInOut"
        speed={600}
        transitionMode={"scroll"}
        renderCenterLeftControls={({ previousSlide }) => (
          <CarouselNav onClick={previousSlide}>
            <ArrowBackIos />
          </CarouselNav>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <CarouselNav onClick={nextSlide}>
            <ArrowForwardIos />
          </CarouselNav>
        )}
      >
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
              <CaseStudyNumber>CASE STUDY 1</CaseStudyNumber>
              <CaseStudyTitle>Linen Mill Studios</CaseStudyTitle>
            </Container>
          </Url>
        </Slide>
        <Slide>
          <Url to="/mipim2019/">
            <SlideImg
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
              }}
              fluid={data.MIPIM19Cover.childImageSharp.fluid}
            />
            <Container>
              <CaseStudyNumber>CASE STUDY 2</CaseStudyNumber>
              <CaseStudyTitle>Belfast at MIPIM 2019</CaseStudyTitle>
            </Container>
          </Url>
        </Slide>
        <Slide>
          <Url to="/outlook/">
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
              <CaseStudyNumber>CASE STUDY 3</CaseStudyNumber>
              <CaseStudyTitle>
                CBRE NI Real Estate Market Outlook
              </CaseStudyTitle>
            </Container>
          </Url>
        </Slide>
        <Slide>
          <Url to="/rorybest/">
            <SlideImg
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
              }}
              fluid={data.RBCover.childImageSharp.fluid}
            />
            <Container>
              <CaseStudyNumber>CASE STUDY 4</CaseStudyNumber>
              <CaseStudyTitle>Freedom of the Borough</CaseStudyTitle>
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
              <CaseStudyNumber>CASE STUDY 5</CaseStudyNumber>
              <CaseStudyTitle>Innovation Nation</CaseStudyTitle>
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
              <CaseStudyNumber>CASE STUDY 6</CaseStudyNumber>
              <CaseStudyTitle>Belfast at MIPIM 2018</CaseStudyTitle>
            </Container>
          </Url>
        </Slide>
        <Slide>
          <Url to="/nie/">
            <SlideImg
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
              }}
              fluid={data.NIEImg.childImageSharp.fluid}
            />
            <Container>
              <CaseStudyNumber>CASE STUDY 7</CaseStudyNumber>
              <CaseStudyTitle>NIE Networks</CaseStudyTitle>
            </Container>
          </Url>
        </Slide>
      </Carousel>
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
