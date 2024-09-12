import styled from 'styled-components'

const Container = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    min-width: 450px;

    @media (max-width: 700px) {
        min-width: auto;
        max-width: 360px;
    }

    @media (max-width: 320px) {
        min-width: auto;
        max-width: 300px;
    }
`

const Content = styled.div`
    background-color: var(--WhiteBg);
    border-radius: 30px 30px 0 0;
    padding: 10px;
    min-height: 500px;
`

const Figure = styled.figure`
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

const Description = styled.div`
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

const Paragraph = styled.p`
    font-size: 16px;
`

const Footer = styled.footer`
    align-items: center;
    background-color: var(--DarkBlueBg);
    border-radius: 0 0 30px 30px;
    display: flex;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;
    width: 100%;
`

const Technologys = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
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

const DevelopingMessage = styled.div`
    background-color: var(--RedBg);
    border-radius: 10px;
    color: var(--WhiteColor);
    cursor: default;
    font-size: 24px;
    padding: 5px 10px;
`

export const Card = ({ image, title, paragraph, technologies, links, isFinished }) => {
    return (
        <Container>
            <Content>
                <Figure>
                    <Image src={image} />
                </Figure>

                <Description>
                    <Title>{title}</Title>
                    <Paragraph>{paragraph}</Paragraph>
                </Description>
            </Content>

            <Footer>
                <Technologys>
                    {technologies.map((tech, index) => (
                        <TechnologyItem key={index}>{tech}</TechnologyItem>
                    ))}
                </Technologys>

                <Links>
                    {links.map((link, index) => (
                        <Anchor href={link.href} target='_blank' key={index}>
                            {link.title}
                        </Anchor>
                    ))}
                </Links>

                {!isFinished && (
                    <DevelopingMessage>EM DESENVOLVIMENTO</DevelopingMessage>
                )}
            </Footer>
        </Container>
    )
}