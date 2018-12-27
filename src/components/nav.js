import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image'

const NavWrapper = styled.div `
    background: #004655;
    height: 100px;
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
`

const NavLinkContainer = styled.div `
    display: flex;
    flex: 3 1 0%;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
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
`

const Nav = ({ data }) => (

    <div>
        <NavWrapper>
                <NavContainer>
                                <LogoContainer>
                                    <Img style={{
                                        maxHeight: '32px',
                                        marginBottom: '0px',
                                        display: 'block',
                                        maxWidth: '185px'
                                    }}
                                        fluid={data.logo.childImageSharp.fluid} />
                                </LogoContainer>
                                <NavLinkContainer>
                                    <NavLink to="/another-page/">
                                        Our Services
                                    </NavLink>
                                    <NavLink to="/another-page/">
                                        Case Studies
                                    </NavLink>
                                    <NavLink to="/another-page/">
                                        News
                                    </NavLink>
                                    <NavLink to="/another-page/">
                                        About
                                    </NavLink>
                                    <NavLink to="/another-page/">
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