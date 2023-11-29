import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  margin: 0 auto;
  padding: 10rem 0 0;
  max-width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;

  ${media.lessThan("medium")`
        padding: 5rem 0;
    `}
`;

const CaseStudyDescription = styled.div`
  font-size: 1.8rem;
  font-weight: 100;
  color: #222;
  line-height: 1.75;
  flex: 1 1 100%;
  margin-bottom: 0;

  > p {
    margin-bottom: 0;
  }
`;

const CenterThreeContainer = styled.div`
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
`;

const SectionSubtitleLeft = styled.h3`
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
`;

// console.log(body)

// Text and Video Section
// const section_title = props.data.section_title.text
// const section_text = props.data.section_text.html

export default ({ slice }) => (
  <div>
    <Container>
      <CenterThreeContainer>
        <SectionSubtitleLeft>
          {slice.primary.section_title.text}
        </SectionSubtitleLeft>
        <CaseStudyDescription
          dangerouslySetInnerHTML={{ __html: slice.primary.section_text.html }}
        />
      </CenterThreeContainer>
    </Container>
  </div>
);
