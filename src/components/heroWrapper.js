import styled from 'styled-components'
import media from "styled-media-query";

const HeroWrapper = styled.div `
    position: relative;
    height: 50vh;
    overflow: hidden;
    display: flex;

    ${media.greaterThan("medium")`
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
    `}
`

export default HeroWrapper