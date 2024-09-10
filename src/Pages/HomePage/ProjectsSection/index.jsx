import styled from 'styled-components'
import { Cloud } from '../Clouds'
import { useParallax } from 'react-scroll-parallax'
import { Satellite } from '../Satellite'
import { forwardRef } from 'react'
import { projectsData } from '@/Data/projectsData'

const Container = styled.section`
    align-items: center;
    background-color: var(--BrownBg);
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 48px;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    width: 100%;
    padding: 48px;
`

const CloudsContain = styled.div``

const SatelliteContain = styled.div``

const Content = styled.div`
    position: relative;
    z-index: 100;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Card = styled.article`
    background-color: var(--WhiteBg);
    border-radius: 30px;
    height: fit-content;
    min-width: 450px;
    max-width: 450px;
    padding: 10px;

    @media (max-width: 700px) {
        min-width: auto;
        max-width: 360px;
    }

    @media (max-width: 320px) {
        min-width: auto;
        max-width: 300px;
    }
`

const Header = styled.header`
    background-color: var(--DarkBlueBg);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding: 24px;
`

const Image = styled.img`

    @media (max-width: 320px) {
        max-width: 250px;
    }
`

const DetailProject = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 16px 0;
    max-width: 100%;
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 30px;
`

const Description = styled.p`
    font-size: 16px;
`

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const TechnologyList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const TechnologyItem = styled.li`
    all: unset;
    background-color: var(--BlueBg);
    border-radius: 10px;
    color: var(--WhiteColor);
    cursor: default;
    font-size: 24px;
    padding: 5px 10px;
`

const Links = styled.div`
    display: flex;
    gap: 8px;
    width: fit-content;
`

const Anchor = styled.a`
    all: unset;
    background-color: var(--OrangeBg);
    border-radius: 10px;
    color: var(--WhiteColor);
    cursor: pointer;
    font-size: 24px;
    padding: 5px 10px;
    transition: 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 320px) {
        font-size: 20px;
    }
`

const Developing = styled.button`
    all: unset;
    background-color: var(--RedBg);
    border-radius: 10px;
    color: var(--WhiteColor);
    cursor: default;
    font-size: 24px;
    padding: 5px 10px;
`

const Button = styled.button`
    all: unset;
    color: var(--WhiteColor);
    cursor: pointer;
    font-size: 24px;
    transition: 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1);
    }
`

export const ProjectsSection = forwardRef((props, ref) => {
    const cloudsData = [
        { CloudWidth: '80px', CloudHeight: '80px', CloudOpacity: '.1', CloudTop: '-20%', CloudLeft: '5%' },
        { CloudWidth: '150px', CloudHeight: '150px', CloudOpacity: '.1', CloudTop: '-15%', CloudLeft: '50%' },
        { CloudWidth: '100px', CloudHeight: '100px', CloudOpacity: '.1', CloudTop: '-35%', CloudLeft: '40%' },
        { CloudWidth: '150px', CloudHeight: '150px', CloudOpacity: '.1', CloudTop: '-25%', CloudLeft: '80%' },
        { CloudWidth: '250px', CloudHeight: '250px', CloudOpacity: '.5', CloudTop: '5%', CloudLeft: '70%' },
        { CloudWidth: '350px', CloudHeight: '350px', CloudOpacity: '.5', CloudTop: '15%', CloudLeft: '5%' },
        { CloudWidth: '200px', CloudHeight: '200px', CloudOpacity: '.5', CloudTop: '30%', CloudLeft: '40%' },
        { CloudWidth: '95px', CloudHeight: '95px', CloudOpacity: '.5', CloudTop: '45%', CloudLeft: '60%' },
        { CloudWidth: '200px', CloudHeight: '200px', CloudOpacity: '.5', CloudTop: '60%', CloudLeft: '80%' },
        { CloudWidth: '300px', CloudHeight: '300px', CloudOpacity: '.5', CloudTop: '70%', CloudLeft: '5%' },
    ].map(cloud => ({
        ...cloud,
        parallaxConfig: { easing: 'easeIn', translateY: [20, -100] }
    }))

    const parallaxHooks = cloudsData.map(cloud => useParallax(cloud.parallaxConfig))

    const data = projectsData

    return (
        <Container ref={ref} id='SectionProjects'>
            <CloudsContain>
                {cloudsData.map((cloud, index) => (
                    <Cloud
                        key={index}
                        ref={parallaxHooks[index].ref}
                        CloudWidth={cloud.CloudWidth}
                        CloudHeight={cloud.CloudHeight}
                        CloudOpacity={cloud.CloudOpacity}
                        CloudTop={cloud.CloudTop}
                        CloudLeft={cloud.CloudLeft}
                    />
                ))}
            </CloudsContain>

            <SatelliteContain>
                <Satellite
                    right='5%'
                    top='-10%'
                />
            </SatelliteContain>

            <Content>
                {data && data.map(item => (
                    <Card key={item.id}>
                        <Header>
                            <figure>
                                <Image src={item.image} />
                            </figure>
                        </Header>

                        <DetailProject>
                            <Title>
                                {item.title}
                            </Title>
                            <Description>
                                {item.description}
                            </Description>
                        </DetailProject>

                        <Footer>
                            <TechnologyList>
                                {item.technology.map((tech, index) => (
                                    <TechnologyItem key={index}>
                                        {tech}
                                    </TechnologyItem>
                                ))}
                            </TechnologyList>

                            <Links>
                                {item.links.map((link, index) => (
                                    <Anchor href={link} target='_blank' key={index}>
                                        {item.linkTitle[index]}
                                    </Anchor>
                                ))}
                            </Links>

                            {item.finished === false && (
                                <Developing>
                                    EM DESENVOLTIMENTO
                                </Developing>
                            )}

                        </Footer>
                    </Card>
                ))}
            </Content>
            {data && data.length >= 6 && (
                <Button>
                    MAIS PROJETOS
                </Button>
            )}
        </Container>
    )
})