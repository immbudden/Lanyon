import React, { useState, Component } from 'react' 
import Typed from 'react-typed'
import styled from 'styled-components'
import media from "styled-media-query"
import HeaderContainer from '../components/headerContainer'
import ReactPlayer from 'react-player'
import { PlayArrow } from '@material-ui/icons';
import SvgIcon from '@material-ui/core/SvgIcon';

const HeadingOne = styled.h1 `
    font-size: 5.5rem;
    color: #004655;
    font-weight: 100;
    display: flex;
    margin-bottom: 2.5rem;

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
    width: 100vw; 
    // margin-top: 20rem;

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

const ButtonXL = styled.button `
    background: #199BAA;
    color: #FFF;
    font-size: 2.5rem;
    padding: 15px 20px 10px; // Typefix
    border: none;
    text-transform: uppercase;
    cursor: pointer;
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
    // min-height: 100vh;
    min-height: 56.25vw;
    min-width: 100vw;
    // min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    // ${media.lessThan("medium")`
    //     min-height: 70vh;
    // `}

`

const Icon = styled(SvgIcon) `
    font-size: 10rem!important;
    color: #FFF;
`



const Showreel = (props) => {
    
    const [activeTab, setActiveTab] = useState('TypedText')

    function navigateToTab(e, tabName) {
        e.preventDefault()
        setActiveTab(tabName)
    }

    const [play, setPlay] = useState(false);


    // const play = () => {
    //     this.setState(prevState => !prevState.playing)
    // }    

    return (
        <div>
            <Video> 
                <Player 
                    url='https://vimeo.com/334652386'
                    controls={false}
                    playing={play}
                    loop={false}
                    onStart={e => setActiveTab(e, 'HideTypedText')}
                    config={{
                        vimeo: {
                            playerOptions: { 
                                title: 'false',
                            },
                        },
                        }}
                    // url='https://youtu.be/KoKvpo3wzj8?vq=hd1080?showinfo=0?ecver=2?html5=1'
                    // controls={true}
                    // playing={false}
                    // loop={true}
                    // onStart={e => setActiveTab(e, 'HideTypedText')}
                    // config={{
                    //     youtube: {
                    //       playerVars: { rel: 0 },
                    //       height: '1080',
                    //       embedOptions: {
                    //             setPlaybackQuality: 'highres',
                    //         }
                    //     },
                    //   }}
                    // volume={1}
                    // muted={true}  
                />
            </Video>

            {activeTab === 'TypedText' && (
                <HeaderContainer>
                    <HeadingTextContainer onClick={() => setPlay(true)}>
                        <HeadingOne>
                            <TypedStyled
                                strings={["Strategic Communications", "Reputation Management", "Stakeholder Engagement", "Watch the showreel"]} 
                                typeSpeed={40}
                            />
                        </HeadingOne>
                        <Icon><PlayArrow /></Icon>
                        {/* <ButtonXL>Play showreel</ButtonXL> */}
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