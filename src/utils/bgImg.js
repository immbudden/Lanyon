import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HeaderWrapper = styled.div `
    margin-bottom: 5rem;
    overflow; hidden;
    position: relative;
`

const HeaderContainer = styled.div `
    margin: 0 auto;
    max-width; 80%
    position: relative;
`

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || 'auto'};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${props => props.fit || 'cover'} !important; object-position: ${props => props.position || '50% 50%'} !important;'
  }
`

const Header = ({ data }) => (
    <HeaderWrapper>
        <HeaderContainer>
            
        </HeaderContainer>


    </HeaderWrapper>

)

export default Header