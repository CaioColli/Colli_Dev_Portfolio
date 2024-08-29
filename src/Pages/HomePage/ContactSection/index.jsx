import styled from 'styled-components'
import PlanetIllustration from '/Images/PlanetIllustration.png'
import { forwardRef, useRef } from 'react'

const Container = styled.section`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-color: var(--DarkBlueBg);
    position: relative;

    @media (max-width: 767px) {
        
    }
`

const Content = styled.div`

`

const IllustrationContent = styled.div`
    position: absolute;
    //top: -30%;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`

const Illustration = styled.div`
    background-image: url(${PlanetIllustration});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 600px;
    height: 600px;
    display: block;

    @media (max-width: 767px) {
        max-width: 300px;
    }
`

export const ContactSection = forwardRef((prop, ref) => {
    return (
        <Container ref={ref} id='SectionContact'>
            <IllustrationContent>
                <Illustration />
            </IllustrationContent>

            <Content>

            </Content>
        </Container>
    )
})