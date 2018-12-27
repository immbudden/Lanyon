import React from "react";
import { graphql, StaticQuery, Link } from 'gatsby'
import Slider from "react-slick";
import Img from 'gatsby-image'
import styled from 'styled-components'


const SlideImg = styled(Img) `
    width: 100%;
`

export default class CaseStudySlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <SlideImg fluid={props.data.inCover.childImageSharp.fluid} />
      </Slider>
    );
  }
}