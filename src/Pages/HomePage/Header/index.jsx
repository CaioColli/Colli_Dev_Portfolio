import styled from 'styled-components'
import profilePicture from '/public/Images/ProfilePicture.png'
import { TbSmartHome } from 'react-icons/tb'
import { CgProfile } from 'react-icons/cg'
import { GiAmericanShield } from 'react-icons/gi'
import { FaDiagramProject } from 'react-icons/fa6'
import { BiLogoLinkedin } from 'react-icons/bi'
import { IoLogoGithub } from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa'
import { Tooltip } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Container = styled.header.withConfig({
    shouldForwardProp: (prop) => !['large'].includes(prop)
})`
    background-color: var(--DarkGrayBg);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 25px;
    width: ${props => props.large ? '200px' : '75px'};
    transition: 0.5s ease;
`

const Content = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 96px;
`

const Input = styled.input`
    all: unset;
    cursor: pointer;
    display: block;
    display: flex;
    flex-direction: column;
    height: 25px;
    width: 25px;
    position: relative;

    &::before, &::after {
        content: '';
        background-color: var(--WhiteColor);
        border-radius: 5px;
        display: block;
        height: 3px;
        width: 30px;
        position: absolute;
        transition: transform 0.5s ease;
    }

    &::before {
        transform: translateY(-6px);
    }

    &::after {
        transform: translateY(6px);
    }

    &:checked::before {
        transform: rotate(45deg);
    }

    &:checked::after {
        transform: rotate(-45deg);
    }
`

const ProfilePic = styled.img.withConfig({
    shouldForwardProp: (prop) => !['bigPhoto'].includes(prop)
})`
    width: ${props => props.bigPhoto ? '90px' : '30px'};
    border-radius: 50%;
    transition: 0.5s ease;
    margin: 0 auto;
`
const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const NavItem = styled.li`
    all: unset;
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    gap: 16px;    
    transition: 0.2s ease;
    
    &:hover {
        scale: 1.1;
    }
`

const DescriptionIcon = styled.span`
    color: var(--WhiteColor);
    display: none;
    font-weight: 500;
`

const iconStyle = `
    font-size: 24px;
    color: var(--WhiteColor);
`

const IconHome = styled(TbSmartHome)`
    ${iconStyle}
`

const IconProfile = styled(CgProfile)`
    ${iconStyle}
`

const IconSkills = styled(GiAmericanShield)`
    ${iconStyle}
`

const IconProjects = styled(FaDiagramProject)`
    ${iconStyle}
`

const Footer = styled.footer`
    display: flex;
    justify-content: center;
`

const NavFooterList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

const IconLinkedin = styled(BiLogoLinkedin)`
    ${iconStyle}    
`

const IconGitHub = styled(IoLogoGithub)`
    ${iconStyle}    
`

const IconWhatsApp = styled(FaWhatsapp)`
    ${iconStyle}    
`

export const Header = () => {
    const [largeHeader, setLargeHeader] = useState(false)
    const [bigPhoto, setBigPhoto] = useState(false)

    const descriptionRef = useRef([])

    const handleInputChange = () => {
        setLargeHeader(prevState => !prevState)
        setBigPhoto(prevState => !prevState)
    }

    useEffect(() => {
        const timeLine = gsap.timeline({ defaults: { duration: 0.8 } })

        if (largeHeader) {
            descriptionRef.current.forEach((ref) => {
                timeLine.fromTo(ref, {
                    x: 50,
                    opacity: 0,
                    display: 'none'
                }, {
                    x: 0,
                    opacity: 1,
                    display: 'block'
                })
            })
        } else {
            timeLine.kill()
            timeLine.clear()

            gsap.set(descriptionRef.current, {
                duration: 0.4,
                opacity: 0,
                display: 'none'
            })
        }

        return () => {
            timeLine.kill()
        }

    }, [largeHeader])

    return (
        <Container large={largeHeader}>
            <Content>
                <Input type='checkbox' onChange={handleInputChange} />
                <Tooltip label='Caio Colli' placement='top' hasArrow color='white ' fontSize='small'>
                    <ProfilePic src={profilePicture} bigPhoto={bigPhoto} />
                </Tooltip>

                <NavList>
                    <Tooltip label='Home' placement='top' hasArrow color='white ' fontSize='small'>
                        <NavItem>
                            <IconHome />
                            <DescriptionIcon ref={el => descriptionRef.current[0] = el}>
                                Home
                            </DescriptionIcon>
                        </NavItem>
                    </Tooltip>

                    <Tooltip label='Sobre' placement='top' hasArrow color='white ' fontSize='small'>
                        <NavItem>
                            <IconProfile />
                            <DescriptionIcon ref={el => descriptionRef.current[1] = el}>
                                Sobre
                            </DescriptionIcon>
                        </NavItem>
                    </Tooltip>

                    <Tooltip label='Skills' placement='top' hasArrow color='white ' fontSize='small'>
                        <NavItem>
                            <IconSkills />
                            <DescriptionIcon ref={el => descriptionRef.current[2] = el}>
                                Skills
                            </DescriptionIcon>
                        </NavItem>
                    </Tooltip>

                    <Tooltip label='Projetos' placement='top' hasArrow color='white ' fontSize='small'>
                        <NavItem>
                            <IconProjects />
                            <DescriptionIcon ref={el => descriptionRef.current[3] = el}>
                                Projetos
                            </DescriptionIcon>
                        </NavItem>
                    </Tooltip>
                </NavList>
            </Content>

            <Footer>
                <NavFooterList>
                    <Tooltip label='LinkedIn' placement='top' hasArrow color='white ' fontSize='small'>
                        <NavItem>
                            <IconLinkedin />
                        </NavItem>
                    </Tooltip>

                    <Tooltip label='GitHub' placement='top' hasArrow color='white ' fontSize='small'>
                        <NavItem>
                            <IconGitHub />
                        </NavItem>
                    </Tooltip>

                    <Tooltip label='WhatsApp' placement='top' hasArrow color='white ' fontSize='small'>
                        <NavItem>
                            <IconWhatsApp />
                        </NavItem>
                    </Tooltip>
                </NavFooterList>
            </Footer>
        </Container>
    )
}