import styled from 'styled-components'
import { HiOutlineArrowUpCircle } from "react-icons/hi2"
import { useEffect, useState } from 'react'

const Container = styled.button`
    all: unset;
    background-color: var(--OrangeBg);
    border-radius: 50%;
    bottom: 48px;
    cursor: pointer;
    padding: 8px;
    position: fixed;
    right: 48px;

    @media (max-width: 1024px) {
        display: none;
    }
`

const Icon = styled(HiOutlineArrowUpCircle)`
    color: var(--WhiteColor);
    font-size: 48px;
`

export const ButtonToTop = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        scrollPosition > 200 && (
            <Container onClick={handleClick}>
                <Icon />
            </Container>
        )
    )
}