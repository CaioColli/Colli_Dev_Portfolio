import styled from 'styled-components'
import { InitialSection } from './InitialSection'
import { ProjectsSection } from './ProjectsSection'
import { useEffect, useRef } from 'react'
import { createRandomStart } from '@/Utils/starCreation'
import { SkillsSection } from './SkillsSection'
import { ContactSection } from './ContactSection'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Container = styled.div`
    position: relative;
`

export const HomePage = () => {
    const containerRefs = useRef({})

    useEffect(() => {
        Object.values(containerRefs.current).forEach((ref) => {
            if (ref) {
                createRandomStart(30, ref)
            }
        })
    }, [])

    return (
        <ParallaxProvider>
            <Container>
                <Parallax>
                    <InitialSection ref={el => (containerRefs.current[0] = el)} />
                </Parallax>

                <Parallax speed={0}>
                    <ProjectsSection ref={el => (containerRefs.current[1] = el)} />
                </Parallax>

                <Parallax speed={0}>
                    <SkillsSection ref={el => (containerRefs.current[2] = el)} />
                </Parallax>

                <Parallax speed={-5}>
                    <ContactSection ref={el => (containerRefs.current[3] = el)} />
                </Parallax>
            </Container>
        </ParallaxProvider>
    )
}