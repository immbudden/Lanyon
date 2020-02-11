import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import ReactPlayer from 'react-player';
import { RichText } from 'prismic-reactjs';

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

const CaseStudyDescription = styled.p `
    font-size: 1.8rem;
    font-weight: 100;
    color: #222;
    line-height: 1.75;
    flex: 1 1 100%;
    margin-bottom: 0;
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

    // console.log(body)

    // Text and Video Section
    // const video_section_title = get(body, "PrismicCaseStudyBodyTextWithVideo.video_section_title.text", null)
    // const video_section_text = get(body, "PrismicCaseStudyBodyTextWithVideo.video_section_text.html", null)
    // const video_section_video = get(body, "PrismicCaseStudyBodyTextWithVideo.video_section_video.embed_url", null)

export default ({ slice }) =>

    <div>
            <Container>
            <CenterThreeContainer>
                <SectionSubtitleLeft>{ RichText.asText(slice.video_section_title) }</SectionSubtitleLeft>
                <CaseStudyDescription>
                { RichText.asText(slice.video_section_text) }
                </CaseStudyDescription>
                <Video> 
                    <Player 
                        url={slice.video_section_video.embed_url}
                        width='100%'
                        height='50vh'
                        controls={true}
                    />
                </Video>
            </CenterThreeContainer>
            </Container>
    </div>
