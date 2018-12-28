import styled from 'styled-components'
import media from "styled-media-query";

const HeaderWrapper = styled.div `
    margin-bottom: 10rem;
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;

    ${media.greaterThan("medium")`
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
    `}
`

export default HeaderWrapper