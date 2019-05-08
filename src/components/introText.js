import React, { Component } from 'react' 
import Typed from 'react-typed'
import styled from 'styled-components'
import media from "styled-media-query"
import HeaderContainer from '../components/headerContainer'

const HeadingOne = styled.h1 `
    font-size: 5.5rem;
    color: #004655;
    font-weight: 100;
    display: flex;
    margin-bottom: 5rem;

    ${media.lessThan("huge")`
        font-size: 4.5rem;
    `}

    // ${media.lessThan("medium")`
    //     font-size: 3.5rem;
    //     margin-bottom: 2.5rem;
    //     text-align: center;
    //     justify-content: center;
    //     margin-top: 15vh;
    // `}
`

const HeadingTextContainer = styled.div `
    // flex: 0 1 62%;
    flex: 0 1 75%;
    justify-content: center;
    margin: 0 auto;
    text-align: center;

    ${media.lessThan("large")`
        flex: 0 1 80%;
        margin: 0 auto;
    `}
`

const TypedStyled = styled(Typed) `
    color: #FFF;
    margin: 0 auto;

    .hidden {
        display: none;
    }
`


class IntroText extends Component {
  state = {
    playing: true,
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  

  render () {

    return (
        <HeaderContainer>
            <HeadingTextContainer>
                <HeadingOne onClick={playPause}>
                    <TypedStyled
                        strings={["Strategic Communications", "Reputation Management", "Stakeholder Engagement", "Watch the showreel"]} 
                        typeSpeed={40}
                    />
                </HeadingOne>
                {/* <ButtonXL onClick={e => setActiveTab(e, 'HideTypedText')}>Play showreel</ButtonXL> */}
            </HeadingTextContainer>
        </HeaderContainer>
    )
  }
}

export default IntroText