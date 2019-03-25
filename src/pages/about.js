import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import HeroWrapper from '../components/heroWrapper'
import Nav from '../components/nav'
import NavMobile from '../components/navMobile'
import Carousel from 'nuka-carousel';
import media from "styled-media-query";

// To consolidate

const HeroImg = styled(Img) `
    min-height: 50vh;
`

const Section = styled.div `
    background: #FFF;
`

const Container = styled.div `
    margin: 0 auto;
    padding: 10rem 0;
    max-width: 90%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
`

const SectionTitle = styled.h2 `
    font-size: 5.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    margin-bottom: 7.5rem;
    width: 60%;
    text-align: center;

    ${media.lessThan("medium")`
        font-size: 4rem; 
        text-align: center;
        width: 80%;
    `}
`

const SectionTitleLeft = styled.h2 `
    font-size: 5.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin-bottom: 7.5rem;
    width: 40%;
    text-align: left;

    ${media.lessThan("medium")`
        font-size: 4rem; 
        text-align: center;
        width: 80%;
    `}
`

const SectionIntro = styled.p `
    font-size: 2.2rem;
    color: ##373737;
    font-family: GillSansMTPro;
    font-weight: 100;
    width: 60%;
    margin: 0 auto;

    ${media.lessThan("medium")`
        font-size: 1.8rem; 
        width: 100%;
    `}
`

const ServiceWrapper = styled.div `
    display: flex;
    flex: 12 1 0%;
    justify-content: space-between;
    // margin-right: 5rem; Different from index (needs removed)
    flex-wrap: wrap;
`

const ServiceContainer = styled.div `
    flex: 1 1 31.66%; // Different from index
    margin-bottom: 7.5rem; // Different from index
    margin-right: 2.5%;

    &:nth-child(3n) {
        margin-right: 0;
    } // Different from index

    &:nth-child(n+3) {
        margin-bottom: 0;
    } // Different from index

    ${media.lessThan("medium")`
        margin-bottom: 5rem;
        
        &:nth-child(n+4) {
            margin-bottom: 5rem;
        }

        &:last-child {
            margin-bottom: 0;
        }
    `}
`

const ServiceTitle = styled.h3 `
    font-size: 3.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 2.5rem;
`

// Close consolidate

const PeopleContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    position: relative;
    justify-content: flex-end;
`

const PersonContainer = styled.div `
    display: flex;
    flex: 1 0 25%;
    height: 40rem;
    position: relative;
    overflow: hidden;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;
`


const PersonImg = styled(Img) `
    height: 100%;
    width: 100%;
`

const PersonInfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 2;
`

const PersonName = styled.p `
    font-size: 1.5rem;
    color: #222;
    background: #FFF;
    padding: 1rem;
    margin-bottom: 1rem;
`

const PersonTitle = styled.p `
    font-size: 1.5rem;
    color: #FFF;
    background: #199BAA;
    padding: 1rem;
    margin-bottom: 0;
`

const PersonIntro = styled.div `
    display: flex;
    flex: 1 1 100%;
    background: rgba(0, 70, 85, 0.95);
    position: absolute;
    flex-direction: column;
    padding: 5rem;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 5;
    height: 100%;
    overflow: scroll;
    opacity: 0;
    transition: opacity 0.5s;

    &:hover {
        opacity: 1;
    }
`

const Bold = styled.span `
    font-weight: 500;
`

const PersonIntroTop = styled.span `
    font-size: 2rem;
    color: #FFF;
    font-weight: 100;
    margin-bottom: 5rem;
`

const PersonIntroBottom = styled.span `
    font-size: 1.8rem;
    color: #FFF;
    font-weight: 100;
    
`

const ServiceList = styled.ul `
    font-size: 2rem;
    color: #222;
    font-weight: 100;
`

const AboutPage = (props) => (

    <div>
        <FontFace />
        <Nav />
        <HeroWrapper>
            <HeroImg style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                zIndex: -1,
            }}
                fluid={props.data.aboutHeroImg.childImageSharp.fluid} />
        </HeroWrapper>
        <Section>
            <Container>
                <SectionTitle>We are Lanyon</SectionTitle>
                <SectionIntro>
                    Situated in Belfast’s vibrant Queen's Quarter, Lanyon specialises in strategic communication, reputation management and stakeholder engagement.  
                    <br /><br />
                    Our exceptional reputation is underpinned by our strong commitment to delivering excellence consistently across our full portfolio of client services. 
                    <br /><br />
                    Combining our corporate communications and marketing expertise, long-established relationships and market knowledge, we work closely in partnership with local and international clients to help them achieve their full growth potential.
                    <br /><br />
                    Lanyon was established in 2014 by Katie Doran and Jonathan Ireland, who have a combined experience of over 35 years in corporate communications in UK and Ireland and further afield. 
                    <br /><br />
                    Both partners have worked with leading retail banks, international law firms, investment funds and commercial property clients, as well as blue-chip companies drawn from a diverse range of sectors.
                    <br /><br />
                    Their deep knowledge and understanding of the business environment ensure that Lanyon truly adds value to every organisation with whom we work. 
                </SectionIntro>
            </Container>
        </Section>
        <Section>
            <PeopleContainer>
                <PersonContainer>
                    <PersonImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: 0,
                        }}
                            fluid={props.data.KDImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Katie Doran</PersonName>
                        <PersonTitle>Co-Founder &amp; Partner</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Katie Doran</Bold><br />Co-Founder &amp; Partner
                        </PersonIntroTop>
                        <PersonIntroBottom>
                            A founding partner of Lanyon, Katie Doran is one of the most experienced communications specialists in Northern Ireland. She has over twenty years’ experience advising many of Northern Ireland’s leading firms across a multitude of sectors. These include law and accounting firms, financial institutions, utilities, charities, technology companies and real estate investors. 
                            <br /><br />
                            She regularly acts as a strategic advisor to CEOs and C-Suite across a range of internal and external communication themes, including strategy, culture, leadership communications, stakeholder engagement and issues management.
                            <br /><br />
                            Katie has acted as a lead advisor on a number of high profile serious situation issues, and is regarded as a “go to” person for issues management in Northern Ireland.  She is also widely renowned for her knowledge of the real estate investment sector and placemaking and has unparalleled expertise and experience in working closely with institutional investors and developers across office, residential, mixed use and regeneration developments in the UK and Ireland.
                            <br /><br />
                            Katie is a member of the Connect Leadership Team at Catalyst Inc, the Communications Leadership Group at Business in the Community, and she also sits on the CBI Economic Affairs Committee in NI.
                        </PersonIntroBottom>
                    </PersonIntro>
                </PersonContainer>
                <PersonContainer>
                    <PersonImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: 0,
                        }}
                            fluid={props.data.JIImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Jonathan Ireland</PersonName>
                        <PersonTitle>Co-Founder &amp; Partner</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Jonathan Ireland</Bold><br />Co-Founder &amp; Partner
                        </PersonIntroTop>
                        <PersonIntroBottom>
                            A founding partner of Lanyon, Jonathan has worked with leading retail banks, international law firms, investment funds and utilities, as well as a diverse portfolio of blue chip companies drawn from a range of other business sectors in the UK, Ireland and further afield.  
                            <br /><br />
                            He advises clients on a wide portfolio of issues to support their business growth and success – including cultural change management and business transformation; business development and stakeholder engagement; investor relations; media relations and marketing; reputation/issues management; and sponsorship/partnership management. 
                            <br /><br />
                            Jonathan sits on the Boards of Thrive Audience Development, Crimestoppers and The Ireland Funds Young Leaders in Northern Ireland.  He is a member Council of the Northern Ireland Chamber of Commerce &amp; Industry and the Confederation of British Industry [CBI] 35 Under 35 Committee and is a Governor at Strathearn School. He was named by Business First in the ‘Top 40 Under 40’ 2016 and 2017.     
                        </PersonIntroBottom>
                    </PersonIntro>
                </PersonContainer>
                <PersonContainer>
                    <PersonImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: 0,
                        }}
                            fluid={props.data.DEImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>David Elliott</PersonName>
                        <PersonTitle>Senior Client Director</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>David Elliott</Bold><br />Senior Client Director
                        </PersonIntroTop>
                        <PersonIntroBottom>
                            As a former business and financial journalist with over 17-years’ experience, David brings his content development, writing and media experience to bear for clients ranging from professional services, technology, financial services, education, energy, real estate and agri-food.
                            <br /><br />
                            David has an unapparelled global media contact base which gives Lanyon clients a distinct advantage when reaching international audiences.  He is an expert at making the complex simple given his innate ability in tackling complicated subject matter and simplifying to reach wider audiences.
                            <br /><br />
                            Starting his career in the agri-food sector, David moved to London to work for Dow Jones Newswires for eight years, progressing to news editor for energy market, contributing daily to the Wall Street Journal and appearing regularly on financial news channel CNBC. After moving back to Northern Ireland, David worked as Group Business Editor at The Belfast Telegraph and editor of Ulster Business magazine, while also presenting twice-daily business news slots for Downtown Radio and Cool FM and as a freelance contributor to publications ranging from BBC to The Wall Street Journal.
                            <br /><br />
                            David sits on the board of Crimestoppers Northern Ireland.
                        </PersonIntroBottom>
                    </PersonIntro>
                </PersonContainer>
                <PersonContainer>
                    <PersonImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: 0,
                        }}
                            fluid={props.data.GWImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Gavin Williamson</PersonName>
                        <PersonTitle>Associate</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Gavin Williamson</Bold><br />Associate
                        </PersonIntroTop>
                        <PersonIntroBottom>
                        Gavin joined the Lanyon team in January 2016. He holds a first-class honours degree in Marketing and is an Accredited CIPR PR Practitioner. 
                        </PersonIntroBottom>
                    </PersonIntro>
                </PersonContainer>
                <PersonContainer>
                    <PersonImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: 0,
                        }}
                            fluid={props.data.MJImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Matthew Jeffrey</PersonName>
                        <PersonTitle>Associate</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Matthew Jeffrey</Bold><br />Associate
                        </PersonIntroTop>
                        <PersonIntroBottom>
                        Upon graduating from QUB, Matthew joined Lanyon in 2015 and has a particular focus on PR &amp; media engagement, design and events management.
                        </PersonIntroBottom>
                    </PersonIntro>
                </PersonContainer>
                <PersonContainer>
                    <PersonImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: 0,
                        }}
                            fluid={props.data.ESImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Ella Simpson</PersonName>
                        <PersonTitle>Client Executive</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Ella Simpson</Bold><br />Client Executive
                        </PersonIntroTop>
                        <PersonIntroBottom>
                        Ella joined Lanyon in 2017 from a magic circle law firm. She has a first class law degree from QUB and a MsC in PR &amp; Communications.
                        </PersonIntroBottom>
                    </PersonIntro>
                </PersonContainer>
                <PersonContainer>
                    <PersonImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: 0,
                        }}
                            fluid={props.data.RPImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Rachel Price</PersonName>
                        <PersonTitle>Client Team Support</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Rachel Price</Bold><br />Client Team Support
                        </PersonIntroTop>
                        <PersonIntroBottom>
                            Upon graduating from the University of Reading Rachel secured an internship with Lanyon, where she is gaining experience in all aspects of PR and communications. 
                        </PersonIntroBottom>
                    </PersonIntro>
                </PersonContainer>
                <PersonContainer>
                    <PersonImg 
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            zIndex: 0,
                        }}
                            fluid={props.data.MBImg.childImageSharp.fluid}
                    />
                    <PersonInfoWrapper>
                        <PersonName>Michael Budden</PersonName>
                        <PersonTitle>Creative Director</PersonTitle>
                    </PersonInfoWrapper>
                    <PersonIntro>
                        <PersonIntroTop>
                            <Bold>Michael Budden</Bold><br />Creative Director
                        </PersonIntroTop>
                        <PersonIntroBottom>
                            MB bio to go into here and will be roughly 200 characters long in total. 
                        </PersonIntroBottom>
                    </PersonIntro>
                </PersonContainer>

            </PeopleContainer>
        </Section>
        <Section>
            <Container>
                <SectionTitleLeft>Our Services</SectionTitleLeft>
                <ServiceWrapper>
                    <ServiceContainer>
                        <ServiceTitle>Market Intelligence</ServiceTitle>
                        <ServiceList>
                            <li>Stakeholder Engagement and Relationship Management</li>
                            <li>Business development support</li>
                            <li>Market insight</li>
                            <li>Media and competitor monitoring</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Corporate Positioning</ServiceTitle>
                        <ServiceList>
                            <li>PR and media relations</li>
                            <li>Corporate messaging development</li>
                            <li>Market positioning for investment</li>
                            <li>Destination and place making communications</li>
                            <li>Media and presentation skills training</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Culture and Engagement</ServiceTitle>
                        <ServiceList>
                            <li>Internal communications strategy and delivery</li>
                            <li>Employee engagement initiatives (surveys, focus groups etc.)</li>
                            <li>Internal workshop facilitation</li>
                            <li>Change management communications</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Digital and Content</ServiceTitle>
                        <ServiceList>
                            <li>Digital media strategy and management</li>
                            <li>Video production</li>
                            <li>Graphic design</li>
                            <li>Web development</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Crisis and Issue Management</ServiceTitle>
                        <ServiceList>
                            <li>Proactive crisis communications planning</li>
                            <li>Reactive crisis communications management</li>
                            <li>Reputation management</li>
                            <li>24/7 press office</li>
                        </ServiceList>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Conferences and events</ServiceTitle>
                        <ServiceList>
                            <li>Event strategy and end-to-end delivery</li>
                            <li>Local and international conference management</li>
                            <li>Content strategy and curation</li>
                            <li>Speaker management</li>
                            <li>Sponsorship management</li>
                        </ServiceList>
                    </ServiceContainer>
                </ServiceWrapper>
            </Container>
        </Section>
        <NavMobile />
    </div>

)

export default AboutPage

export const query = graphql`
    query {
            aboutHeroImg: file(relativePath: { eq: "LanyonBelfast.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500, maxHeight: 1100 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            KDImg: file(relativePath: { eq: "people/KD-Warm2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: ENTROPY ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            JIImg: file(relativePath: { eq: "people/JI-Warm.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            DEImg: file(relativePath: { eq: "people/DE-Warm.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MJImg: file(relativePath: { eq: "people/MJ.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            GWImg: file(relativePath: { eq: "people/GW.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            ESImg: file(relativePath: { eq: "people/ES.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            RPImg: file(relativePath: { eq: "people/RP.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            MBImg: file(relativePath: { eq: "people/MB-Warm.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 650, cropFocus: CENTER ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `