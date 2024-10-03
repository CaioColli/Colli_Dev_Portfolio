import styled from 'styled-components'
import { Cloud } from '../Clouds'
import { useParallax } from 'react-scroll-parallax'
import { Satellite } from '../Satellite'
import { forwardRef } from 'react'
import { projectsData } from '@/Data/projectsData'
import { Card } from '@/Components/ProjectCard'
import { Link } from 'react-router-dom'

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
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    z-index: 100;
`

const StyledLink = styled(Link)`
    all: unset;
`

const ButtonContent = styled.div`
    z-index: 100;
    display: flex;
`

const Button = styled.button`
    all: unset;
    background-color: var(--OrangeBg);
    border-radius: 10px;
    color: var(--WhiteColor);
    cursor: pointer;
    font-size: 24px;
    padding: 16px;

    &:hover {
        transform: scale(1.02);
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
                    <Card
                        key={item.id}
                        bgImage={item.bgImage}
                        image={item.image}
                        title={item.title}
                        paragraph={item.description}
                        technologies={item.technology}
                        links={item.links.map((link, index) => ({
                            href: link, title: item.linkTitle[index]
                        }))}
                        isFinished={item.finished}
                    />
                ))}
            </Content>

            {data && data.length >= 3 && (
                <ButtonContent>
                    <StyledLink to='projetos'>
                        <Button>
                            MAIS PROJETOS
                        </Button>
                    </StyledLink>
                </ButtonContent>
            )}
        </Container>
    )
})