import { Card } from '@/Components/ProjectCard'
import { otherProjectsData } from '@/Data/otherProjects'
import { createRandomStart } from '@/Utils/starCreation'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.section`
    align-items: center;
    background-color: var(--DarkBlueBg);
    display: flex;
    flex-direction: column;
    gap: 48px;
    height: 100%;
    padding: 48px;
`

const Title = styled.h2`
    font-size: clamp(2rem, 1.6446rem + 1.3378vw, 3.25rem);
    color: var(--WhiteColor);
`

const Content = styled.div`
    z-index: 100;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
`
export const OtherProjects = () => {
    const containerRef = useRef(null)
    const data = otherProjectsData

    useEffect(() => {
        if (containerRef.current) {
            createRandomStart(30, containerRef.current)
        }
    }, [])

    return (
        <Container ref={containerRef}>
            <Title>
                Outros projetos
            </Title>

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
        </Container>
    )
}