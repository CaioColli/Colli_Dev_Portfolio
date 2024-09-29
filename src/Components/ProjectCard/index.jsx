import styled from 'styled-components'

const Container = styled.article`
    min-width: 960px;
    max-width: 960px;

    @media (max-width: 1024px) {
        min-width: 0;
    }
`

const Content = styled.div`
    background-color: var(--WhiteBg);
    border-radius: 30px;
    padding: 16px;
`

const Figure = styled.figure.withConfig({
    shouldForwardProp: (prop) => !['bgImage'].includes(prop)
})`
    position: relative;
    background-color: var(--DarkBlueBg);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding: 24px;

    // Definir o conteúdo com z-index maior que o ::before
    & > * {
        position: relative;
        z-index: 2;
    }

    // Aplica a imagem de fundo com opacidade no ::before
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${props => props.bgImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 20px;
        opacity: 0.2;
        z-index: 1;
    }
`;

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
    text-align: center;
`

export const Card = ({ bgImage, image, title, paragraph, technologies, links, isFinished }) => {
    return (
        <Container>
            <Content>
                <Figure bgImage={bgImage}>
                    <Image src={image} />
                </Figure>

                <Description>
                    <Title>{title}</Title>
                    <Paragraph>{paragraph}</Paragraph>
                </Description>

                <Footer>
                    <Title>
                        Tecnologias
                    </Title>

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
            </Content>
        </Container>
    )
}