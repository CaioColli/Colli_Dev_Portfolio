import styled, { keyframes } from 'styled-components'
import PlanetIllustration from '/Images/PlanetIllustration.png'
import { forwardRef } from 'react'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'
import { Tooltip } from '@chakra-ui/react'
import Astronaut from '/Images/AstronautIllustration.png'

const Container = styled.section`
    align-items: center;
    background-color: var(--DarkBlueBg);
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100%;

    @media (max-width: 767px) {
        
    }
`

const IllustrationContent = styled.div`
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`

const Illustration = styled.div`
    background-image: url(${PlanetIllustration});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 600px;
    height: 600px;
    display: block;
    // É da gambiarra que se vive

    @media (max-width: 767px) {
        max-width: 300px;
    }
`

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 100%;
`

const Title = styled.h1`
    color: var(--WhiteColor);
    font-size: 64px;

    @media (max-width: 700px) {
        font-size: 32px;
    }
`

const Paragraph = styled.p`
    color: var(--WhiteColor);
    font-size: 24px;

    @media (max-width: 700px) {
        font-size: 18px;
    }
`

const IconsContent = styled.div`
    display: flex;
    gap: 32px;
`

const Anchor = styled.a`
    all: unset;
`

const iconStyle = `
    font-size: 48px;
    color: var(--WhiteColor);
    cursor: pointer;

     @media (max-width: 700px) {
        font-size: 32px;
    }
`

const IconLinkedin = styled(BiLogoLinkedin)`
    ${iconStyle}
`

const IconWhatsApp = styled(FaWhatsapp)`
    ${iconStyle}
`

const astronautAnimation = keyframes`
    from {
        transform: translate(0, 0);
    }
    to {
        transform: translate(20px, -20px);
    }
`

const AstronautIllustration = styled.img`
    position: absolute;
    left: 20%;
    bottom: -120%;
    animation: ${astronautAnimation} 3s ease-in-out alternate infinite;

    @media (max-width: 700px) {
        max-width: 150px;
    }
`

export const ContactSection = forwardRef((prop, ref) => {
    return (
        <Container ref={ref} id='SectionContact'>
            <IllustrationContent>
                <Illustration />
            </IllustrationContent>

            <Content>
                <Title>
                    Entre em contato!
                </Title>

                <Paragraph>
                    Será uma honra trabalhar com você!
                </Paragraph>

                <IconsContent>
                    <Tooltip label='Linkedin' placement='top' color='white'>
                        <Anchor href='https://www.linkedin.com/in/caiocolli/' target='_blank'>
                            <IconLinkedin />
                        </Anchor>
                    </Tooltip>

                    <Tooltip label='WhatsApp' placement='top' color='white'>
                        <Anchor href='https://wa.me/+5519992702740' target='_blank'>
                            <IconWhatsApp />
                        </Anchor>
                    </Tooltip>
                </IconsContent>

                <AstronautIllustration src={Astronaut} />
            </Content>
        </Container>
    )
})