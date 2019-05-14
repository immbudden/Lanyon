import styled from 'styled-components'
import media from "styled-media-query";

const HeaderWrapper = styled.div `
    position: relative;
    height: 75vh;
    overflow: hidden;
    display: flex;

    ${media.greaterThan("medium")`
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        height: 100vh;
    `}
`

export default HeaderWrapper