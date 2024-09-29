import { forwardRef } from 'react'
import styled, { keyframes } from 'styled-components'
import moonIllustration from '/public/Images/MoonIllustration.png'
import rocketIllustration from '/public/Images/RocketIllustration.png'
import { Header } from '../Header'

const Container = styled.section`
    background-color: var(--DarkBlueBg);
    height: 150vh;

    @media (max-width: 1024px) {
        height: 120vh;
        height: auto;
    }
`

const Content = styled.div`
    display: flex;
`

const PrincipalContent = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 48px;
    gap: 240px;
    width: 100%;
    z-index: 100;

    @media (max-width: 1440px) {
        gap: 120px;
    }
`

const PresentationContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 430px) {
        text-align: center;
    }
`

const DescriptionDev = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 430px) {
        justify-content: center;
    }
`
const TitleContent = styled.div`
    @media (max-width: 430px) {
        border-radius: 20px;
        background-color: var(--WhiteBg);
        display: block;
        padding: 8px;
    }
`

const Title = styled.h1`
    font-size: 56px;
    font-weight: 600;
    color: var(--WhiteColor);

    @media (max-width: 430px) {
        color: var(--BlueColor);
        font-size: 48px;
    }
`

const SubTitle = styled.h2`
    font-size: 48px;
    font-weight: 500;
    color: var(--WhiteColor);
`

const SubSubTitle = styled.h3`
    font-size: 32px;
    font-weight: 500;
    color: var(--WhiteColor);
`

const Span = styled.span`
    font-size: 32px;
    font-weight: 600;
    color: var(--BlueColor);
`

const Paragraph = styled.p`
    font-size: 24px;
    font-weight: 800;
    color: var(--BlueColor);
`

const Button = styled.button`
    width: fit-content;
    padding: 16px 48px;
    font-size: 24px;
    color: var(--DarkBlueBg);
    cursor: pointer;
    border-radius: 30px;
    transition: 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1);
    }
`

const Anchor = styled.a`
    all: unset;
`

const ContentIllustrations = styled.div`
    position: relative;
`

const moonAniamtion = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(2deg);
    }
`

const MoonIllustration = styled.img`
    animation: ${moonAniamtion} 2s ease-in-out infinite alternate;

    @media (max-width: 430px) {
        max-width: 300px;
    }
`

const rocketAnimation = keyframes`
    from {
        transform: translate(0, 0); // Ponto inicial
    }
    to {
        transform: translate(50px, -50px); // Ponto final em 45 graus
    }
`

const RocketIllustration = styled.img`
    position: absolute;
    bottom: 80%;
    left: 60%;
    animation: ${rocketAnimation} 2s ease-in-out forwards;

    @media (max-width: 430px) {
        max-width: 100px;
    }
`

export const InitialSection = forwardRef((props, ref) => {
    return (
        <Container ref={ref} id='InitialSection'>
            <Content>
                <Header />

                <PrincipalContent>
                    <PresentationContent>
                        <TitleContent>
                            <Title>
                                Bem vindo
                            </Title>
                        </TitleContent>

                        <Paragraph>
                            Me chamo
                        </Paragraph>

                        <SubTitle>
                            Caio Colli
                        </SubTitle>

                        <DescriptionDev>
                            <SubSubTitle>
                                Desenvolvedor
                            </SubSubTitle>

                            <Span>
                                FULL STACK
                            </Span>
                        </DescriptionDev>

                        <Paragraph>
                            React.js e Node.js
                        </Paragraph>

                        <Anchor href='/Documents/Currículo.pdf' download>
                            <Button>
                                Currículo
                            </Button>
                        </Anchor>
                    </PresentationContent>

                    <ContentIllustrations>
                        <MoonIllustration src={moonIllustration} />
                        <RocketIllustration src={rocketIllustration} />
                    </ContentIllustrations>
                </PrincipalContent>
            </Content>
        </Container>
    )
})