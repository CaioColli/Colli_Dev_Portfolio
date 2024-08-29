import styled from 'styled-components'
import { Cloud } from '../Clouds'
import { useParallax } from 'react-scroll-parallax'
import { Satellite } from '../Satellite'
import { forwardRef } from 'react'

const Container = styled.section`
    background-color: var(--BrownBg);
    height: 00%;
    min-height: 100vh;
    position: relative;
    width: 100%;
`

const Content = styled.div`

`

const CloudsContain = styled.div``

const SatelliteContain = styled.div``

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
                    right='10%'
                    top='-10%'
                />
            </SatelliteContain>
        </Container>
    )
})