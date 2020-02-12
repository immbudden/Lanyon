import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Carousel from 'nuka-carousel';
import media from "styled-media-query";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';


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


export default ({ slice }) => {
    return (
    <div>
        <StyledCarousel slidesToShow={2.5} cellSpacing={50} slidesToScroll={1} easing="easeCubicIn" edgeEasing="easeCubicIn" renderBottomCenterControls={null} wrapAround={true}

            renderCenterLeftControls={({ previousSlide }) => (
                <CarouselNav onClick={previousSlide}><ArrowBackIos /></CarouselNav>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <CarouselNav onClick={nextSlide}><ArrowForwardIos /></CarouselNav>
            )}
        
        >
            {console.log(slice)}
            {slice.items.map((item, index)=>{
                return(
                    <GallerySlide key={index}>
                            <GallerySlideImg 
                            fluid={item.gallery_image.localFile.childImageSharp.fluid} />
                    </GallerySlide>
                )
            })}

        </StyledCarousel>

        <MobileCarousel slidesToShow={1.5} cellSpacing={25} slidesToScroll={1} easing="easeCubicIn" edgeEasing="easeCubicIn" renderBottomCenterControls={null} wrapAround={true}

            renderCenterLeftControls={({ previousSlide }) => (
                <CarouselNav onClick={previousSlide}><ArrowBackIos /></CarouselNav>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <CarouselNav onClick={nextSlide}><ArrowForwardIos /></CarouselNav>
            )}
        
        >
            {slice.items.map((item, index)=>{
                return(
                    <GallerySlide key={index}>
                            <GallerySlideImg 
                            fluid={item.gallery_image.localFile.childImageSharp.fluid} />
                    </GallerySlide>
                )
            })}

        </MobileCarousel>
    </div>
)}
