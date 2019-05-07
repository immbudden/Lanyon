import React, { useState } from 'react'
import styled from 'styled-components'
import media from "styled-media-query"
import HeaderContainer from '../components/headerContainer'
import ReactPlayer from 'react-player'
import Typed from 'react-typed'

const HeadingOne = styled.h1 `
    font-size: 5.5rem;
    color: #004655;
    font-weight: 100;
    display: flex;
    margin-top: 35vh;
    // margin-bottom: 5rem;

    ${media.lessThan("huge")`
        font-size: 4.5rem;
    `}

    ${media.lessThan("medium")`
        font-size: 3.5rem;
        margin-bottom: 2.5rem;
        text-align: center;
        justify-content: center;
        margin-top: 15vh;
    `}
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

const Video = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    // margin-bottom: 5rem;
    // position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    // pointer-events: none;
    overflow: hidden;
    position: absolute;
`

const Player = styled(ReactPlayer)`

    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${media.lessThan("medium")`
        min-height: 70vh;
    `}

`

const TypedStyled = styled(Typed) `
    margin: 0 auto;

    .hidden {
        display: none;
    }
`

const Showreel = (data) => {

    const [activeTab, setActiveTab] = useState('TypedText')

    function navigateToTab(e, tabName) {
        e.preventDefault()
        setActiveTab(tabName)
    }
    
    return (
        <div onClick={e => setActiveTab(e, 'HideTypedText')} >
            <Video> 
                <Player 
                    url='https://youtu.be/KoKvpo3wzj8?vq=hd1080'
                    controls={true}
                    playing={false}
                    loop={true}
                    // volume={1}
                    // muted={true}  
                />
            </Video>

            {activeTab === 'TypedText' && (
                <HeaderContainer>
                <HeadingTextContainer>
                    <HeadingOne>
                        <TypedStyled
                            strings={["Strategic Communications", "Reputation Management", "Stakeholder Engagement", "Watch the showreel"]} 
                            typeSpeed={60} 
                            
                        />
                    </HeadingOne>
                    {/* <ButtonXL>View showreel</ButtonXL> */}
                </HeadingTextContainer>
            </HeaderContainer>
            )}

            {activeTab === 'HideTypedText' && (
                <div />
            )}

        </div>
    )
}

export default Showreel