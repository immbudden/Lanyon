import React, { useState } from 'react'
import styled from 'styled-components'
import media from "styled-media-query"
import HeaderContainer from '../components/headerContainer'
import ReactPlayer from 'react-player'
import Typed from 'react-typed'



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