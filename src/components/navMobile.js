import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import media from "styled-media-query";

const NavWrapperMobile = styled.div `
    background: #004655;
    height: 7.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 500;

    ${media.greaterThan("medium")`
        display: none;
    `}
`

const NavContainer = styled.div `
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px auto;
    width: 90%;
`

const NavLinkContainer = styled.div `
    display: flex;
    flex: 3 1 0%;
    align-items: center;
    height: 100%;
    justify-content: space-between;

    
`

const NavLink = styled(Link) `
    color: #FFF;
    font-size: 2.4rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 2.4rem;
    padding-top: 0.8rem;
    margin-right: 8.5rem;
    letter-spacing: 0.08rem;
    opacity: 0.6;

    &:last-child {
        margin-right: 0;
    }

    ${media.lessThan("huge")`
        font-size: 2rem;
    `}

    ${media.lessThan("large")`
        font-size: 1.6rem;
        margin-right: 2rem;
    `}
`

const ActiveLink =  {
    opacity: '1',
    transition: 'all 0.5s linear'
}   

const NavMobile = ({ data }) => (
        <NavWrapperMobile>
            <NavContainer>
                <NavLinkContainer>
                    <NavLink to="/case-studies/" activeStyle={ActiveLink}>
                        Case Studies
                    </NavLink>
                    <NavLink to="/news/" activeStyle={ActiveLink}>
                        News
                    </NavLink>
                    <NavLink to="/about/" activeStyle={ActiveLink}>
                        About
                    </NavLink>
                    <NavLink to="/contact/" activeStyle={ActiveLink}>
                        Contact
                    </NavLink>
                </NavLinkContainer>
                </NavContainer>
        </NavWrapperMobile>
)

export default NavMobile