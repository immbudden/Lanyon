import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image'
import media from "styled-media-query";

const NavWrapper = styled.div `
    background: #004655;
    height: 7.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 500;
`

const NavContainer = styled.div `
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px auto;
    width: 90%;
`

const LogoContainer = styled.div `
    color: #FFF;
    flex: 1 1 0%;
    
    ${media.lessThan("medium")`
        justify-content: center;
    `}
`

const NavLinkContainer = styled.div `
    display: flex;
    flex: 3 1 0%;
    align-items: center;
    height: 100%;
    justify-content: flex-end;

    ${media.lessThan("medium")`
        display: none;
    `}
`

const LogoLink = styled(Link) `

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

const Logo = styled( Img ) `
    ${media.lessThan("medium")`
        margin: 0 auto;
`}
`


const Nav = ({ data }) => (

    <div>
        <NavWrapper>
                <NavContainer>
                    <LogoContainer>
                        <Link to="/">
                            <Logo style={{
                                maxHeight: '32px',
                                marginBottom: '0px',
                                display: 'block',
                                maxWidth: '185px'
                            }}
                                fluid={data.logo.childImageSharp.fluid} />
                        </Link>
                    </LogoContainer>
                    <NavLinkContainer>
                        <NavLink to="#services">
                            Our Services
                        </NavLink>
                        <NavLink to="/case-studies/">
                            Case Studies
                        </NavLink>
                        <NavLink to="/news/">
                            News
                        </NavLink>
                        <NavLink to="/about/">
                            About
                        </NavLink>
                        <NavLink to="/contact/">
                            Get in Touch
                        </NavLink>
                    </NavLinkContainer>
                </NavContainer>
        </NavWrapper>
    </div>
)

styled.div `
    background: #004655;
`

export default props => (
        <StaticQuery
        query = {graphql`
            query {
                logo: file(relativePath: { eq: "LanyonBrand19White.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }
        `}
        render={data => <Nav data={data} {...props} />}
        />
)