import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'


const SectionImg = styled(Img) `
    width: 100%;
    min-height: 50vh;
    height: 50vh;
    margin-top: 10rem;
`

    // console.log(body)

    // Text and Video Section
    // const video_section_title = get(body, "PrismicCaseStudyBodyTextWithVideo.video_section_title.text", null)
    // const video_section_text = get(body, "PrismicCaseStudyBodyTextWithVideo.video_section_text.html", null)
    // const video_section_video = get(body, "PrismicCaseStudyBodyTextWithVideo.video_section_video.embed_url", null)

export default ({ slice }) =>

    <div>
        <SectionImg fluid={slice.primary.section_image.localFile.childImageSharp.fluid} />
    </div>
