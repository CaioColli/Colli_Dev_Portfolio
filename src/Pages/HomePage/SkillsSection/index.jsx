import { useParallax } from 'react-scroll-parallax'
import styled from 'styled-components'
import { Cloud } from '../Clouds'
import { forwardRef } from 'react'
import PlanetIllustration from '/Images/PlanetIllustration.png'
import { skillsData } from '@/Data/skillsData'
import { Tooltip } from '@chakra-ui/react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaWordpress, FaSass } from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaGitAlt } from 'react-icons/fa6'
import { SiStyledcomponents } from 'react-icons/si'


const Container = styled.section`
    align-items: center;
    background-color: var(--BlueBg);
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    position: relative;
`

const CloudsContent = styled.div``

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 800px;
    z-index: 100;

    @media (max-width: 1024px) {
        max-width: 600px;
        padding: 48px 0;
    }

    @media (max-width: 700px) {
        max-width: 340px;
    }

    @media (max-width: 320px) {
        max-width: 300px;
    }
`

const TitlesContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const SubTitleContainer = styled.div`
    background-color: var(--DarkBlueBg);
    display: flex;
    justify-content: center;
    min-width: 100%;
    max-width: 100%;
    padding: 16px 0;
    border-radius: 20px;
`

const SubTitle = styled.h2`
    color: var(--WhiteColor);
    font-weight: 200;
`

const Title = styled.h1`
    color: var(--WhiteColor);
    font-size: 64px;
`

const DescriptionsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: 100%;
`

const Paragraph = styled.p`
    color: var(--WhiteColor);
    text-shadow: 1px 1px var(--DarkBlueBg);
    font-size: 24px;
`

const CardsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    justify-content: center;
`

const Icon = styled.span`
    color: var(--DarkBlueBg);
    font-size: 64px;
    max-height: 56px;
    transition: 0.5s ease;
`

const CardItem = styled.li`
    all: unset;
    align-items: center;
    background-color: var(--WhiteBg);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    min-height: 120px;
    min-width: 120px;

    &:hover ${Icon} {
        color: var(--BlueBg);
    }
`

const IllustrationContent = styled.div`
    bottom: 0%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 50%);
    z-index: 50;
`

const Illustration = styled.div`
    background-image: url(${PlanetIllustration});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    height: 600px;
    width: 600px;

    @media (max-width: 767px) {
        max-width: 300px;
    }
`

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


    const data = skillsData

    const iconsData = {
        1: FaHtml5,
        2: FaCss3Alt,
        3: FaJs,
        4: BiLogoTypescript,
        5: FaReact,
        6: FaGitAlt,
        7: FaFigma,
        8: FaWordpress,
        9: FaSass,
        10: SiStyledcomponents
    }

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

            <Content>

                <TitlesContent>
                    <SubTitleContainer>
                        <SubTitle>
                            Sobre Mim
                        </SubTitle>
                    </SubTitleContainer>
                    <Title>
                        MINHAS SKILLS
                    </Title>
                </TitlesContent>

                <DescriptionsContent>
                    <Paragraph>
                        Sou desenvolvedor front-end com alto conhecimento em HTML, CSS e JavaScript, com forte especialização em React.js. Tenho ampla experiência na aplicação de princípios de clean code e no desenvolvimento de interfaces responsivas, garantindo que minhas soluções sejam eficientes, escaláveis e acessíveis em diversas plataformas e dispositivos.
                    </Paragraph>

                    <CardsList>
                        {data && data.map(item => {
                            const Icons = iconsData[item.id]

                            return (
                                <Tooltip key={item.id} label={item.label} placement='top' color='white'>
                                    <CardItem>
                                        <Icon>
                                            {Icons ? <Icons /> : null}
                                        </Icon>
                                    </CardItem>
                                </Tooltip>
                            )
                        })}
                    </CardsList>
                </DescriptionsContent>

            </Content>

            <IllustrationContent>
                <Illustration />
            </IllustrationContent>

        </Container>
    )
})