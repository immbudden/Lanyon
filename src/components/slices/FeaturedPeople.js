import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import media from "styled-media-query";


const PeopleContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    position: relative;
    justify-content: flex-end;
    margin-top: 7.5rem;

    ${media.lessThan("medium")`
        margin-top: 5rem;
    `}
`

const PersonContainer = styled.div ` // From as about
    display: flex;
    flex: 1 0 22.5%; // Different
    height: 40rem;
    margin-right: 2.5%; // Different
    position: relative;
    overflow: hidden;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;

    ${media.lessThan("medium")`
        flex: 1 1 100%;
        margin-right: 0;
        margin-bottom: 5rem;

        &:last-child {
            margin-bottom: 2.5rem;
        }
    `}
`

const PersonImg = styled(Img) `
    height: 100%;
    width: 100%;
`

const PersonInfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 2;
    background: #FFF; // Different
`

const PersonName = styled.p `
    font-size: 1.5rem;
    color: #222;
    padding: 1rem;
    padding-bottom: 0; // Different
    margin-bottom: 0rem; // Different
`

const PersonTitle = styled.p `
    font-size: 1.5rem;
    color: #222;
    padding: 1rem;
    padding-top: 0; // Different
    margin-bottom: 0;
    font-weight: 100; // Different
`


export default ({ slice }) =>
    <div>
        <PeopleContainer>

            <PersonContainer>
                <PersonImg 
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        zIndex: 0,
                    }}
                        fluid={slice.primary.featured_person_1_image.localFile.childImageSharp.fluid}
                />
                <PersonInfoWrapper>
                    <PersonName>{slice.primary.featured_person_1_name.text}</PersonName>
                    <PersonTitle>{slice.primary.featured_person_1_title.text}</PersonTitle>
                </PersonInfoWrapper>
            </PersonContainer>

            <PersonContainer>
                <PersonImg 
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        zIndex: 0,
                    }}
                        fluid={slice.primary.featured_person_2_image.localFile.childImageSharp.fluid}
                />
                <PersonInfoWrapper>
                    <PersonName>{slice.primary.featured_person_2_name.text}</PersonName>
                    <PersonTitle>{slice.primary.featured_person_2_title.text}</PersonTitle>
                </PersonInfoWrapper>
            </PersonContainer>

            <PersonContainer>
                <PersonImg 
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        zIndex: 0,
                    }}
                        fluid={slice.primary.featured_person_3_image.localFile.childImageSharp.fluid}
                />
                <PersonInfoWrapper>
                    <PersonName>{slice.primary.featured_person_3_name.text}</PersonName>
                    <PersonTitle>{slice.primary.featured_person_3_title.text}</PersonTitle>
                </PersonInfoWrapper>
            </PersonContainer>

            <PersonContainer>
                <PersonImg 
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        zIndex: 0,
                    }}
                        fluid={slice.primary.featured_person_4_image.localFile.childImageSharp.fluid}
                />
                <PersonInfoWrapper>
                    <PersonName>{slice.primary.featured_person_4_name.text}</PersonName>
                    <PersonTitle>{slice.primary.featured_person_4_title.text}</PersonTitle>
                </PersonInfoWrapper>
            </PersonContainer>

        </PeopleContainer>
    </div>
