import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import media from "styled-media-query";

// const NavWrapperMobile = styled.div `
//     background: #004655;
//     height: 7.5rem;
//     overflow: hidden;
//     display: flex;
//     flex-direction: row;
//     -webkit-box-align: center;
//     align-items: center;
//     position: fixed;
//     bottom: 0;
//     width: 100%;
//     z-index: 500;

//     ${media.greaterThan("medium")`
//         display: none;
//     `}
// `

// const NavContainer = styled.div `
//     display: flex;
//     flex-direction: row;
//     -webkit-box-align: center;
//     align-items: center;
//     margin: 0px auto;
//     width: 90%;
// `

// const NavLinkContainer = styled.div `
//     display: flex;
//     flex: 3 1 0%;
//     align-items: center;
//     height: 100%;
//     justify-content: space-between;

    
// `

const StyledMenu = styled.div `
    #page-wrap {
        text-align: center;
        overflow: auto;
    }
    
    .bm-item {
        display: inline-block;
        text-decoration: none;
        margin-bottom: 10px;

        transition: 'all 0.5s linear';
    }

    .bm-item:hover {
        opacity: '1';
        transition: 'all 0.5s linear';
    }

    .bm-burger-button {
        position: fixed;
        width: 3rem;
        height: 2.5rem;
        left: 3rem;
        top: 3rem;
        opacity: 0.7;;
    }

    .bm-burger-bars {
        background: #FFF;
        height: 16%!important;
    }

    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    .bm-cross {
        background: #bdc3c7;
    }

    .bm-menu {
        background: #004655;
        padding: 3rem;
        /* font-size: 1.15em; */
    }

    .bm-morph-shape {
        fill: #373a47;
    }

    .bm-item-list {
        color: #b8b7ad;
    }

    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }

    ${media.greaterThan("medium")`
         display: none;
     `}
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
    opacity: 0.8;

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

export default props => {
    return (
        <StyledMenu>
            <Menu>
                <NavLink className="menu-item" to="/case-studies/" activeStyle={ActiveLink}>Case Studies</NavLink>
                <NavLink className="menu-item" to="/news/" activeStyle={ActiveLink}>News</NavLink>
                <NavLink className="menu-item" to="/about/" activeStyle={ActiveLink}>About</NavLink>
                <NavLink className="menu-item" to="/contact/" activeStyle={ActiveLink}>Get in touch</NavLink>
            </Menu>
        </StyledMenu>
    );
  };

// const NavMobile = () => (
//     // <NavWrapperMobile>
//     //     <NavContainer>
//     //         <NavLinkContainer>
//     //             <NavLink to="/case-studies/" activeStyle={ActiveLink}>
//     //                 Case Studies
//     //             </NavLink>
//     //             <NavLink to="/news/" activeStyle={ActiveLink}>
//     //                 News
//     //             </NavLink>
//     //             <NavLink to="/about/" activeStyle={ActiveLink}>
//     //                 About
//     //             </NavLink>
//     //             <NavLink to="/contact/" activeStyle={ActiveLink}>
//     //                 Contact
//     //             </NavLink>
//     //         </NavLinkContainer>
//     //     </NavContainer>
//     // </NavWrapperMobile>


    
// )


// export default NavMobile