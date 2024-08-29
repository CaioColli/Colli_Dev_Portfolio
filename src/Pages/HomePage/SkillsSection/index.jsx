import { useParallax } from 'react-scroll-parallax'
import styled from 'styled-components'
import { Cloud } from '../Clouds'
import { forwardRef } from 'react'

const Container = styled.section`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-color: var(--BlueBg);
`
const Content = styled.div`

`

const CloudsContent = styled.div``



export const SkillsSection = forwardRef((props, ref) => {
    const cloudsData = [
        { CloudWidth: '400px', CloudHeight: '400px', CloudOpacity: '.8', CloudTop: '10%', CloudLeft: '5%' },
        { CloudWidth: '250px', CloudHeight: '250px', CloudOpacity: '.8', CloudTop: '40%', CloudLeft: '25%' },
        { CloudWidth: '450px', CloudHeight: '450px', CloudOpacity: '.8', CloudTop: '60%', CloudLeft: '70%' },
        { CloudWidth: '300px', CloudHeight: '300px', CloudOpacity: '.8', CloudTop: '20%', CloudLeft: '60%' },
        { CloudWidth: '300px', CloudHeight: '300px', CloudOpacity: '.8', CloudTop: '60%', CloudLeft: '5%' },
    ].map(cloud => ({
        ...cloud,
        parallaxConfig: { easing: 'easeIn', translateY: [20, -100] }
    }))

    const parallaxHooks = cloudsData.map(cloud => useParallax(cloud.parallaxConfig))

    return (
        <Container ref={ref} id='SectionSkills'>
            <CloudsContent>
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
            </CloudsContent>
        </Container>
    )
})