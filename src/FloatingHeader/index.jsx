import styled from 'styled-components'
import { TbSmartHome } from 'react-icons/tb'
import { CgProfile } from 'react-icons/cg'
import { FaDiagramProject } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'
import { scrollToSection } from '@/Utils/scrollTo'

const Container = styled.div`
    background-color: rgba(0,0,0,60%);
    display: flex;    
    display: none;
    left: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 200;
    
    @media (max-width: 1024px) {
        display: block;
    }
`

const Content = styled.div`
    padding: 16px 32px;
    display: flex;
    gap: 32px;
    justify-content: space-between;
`

const iconStyle = `
    font-size: 40px;
    color: var(--WhiteColor);

    @media (max-width: 430px) {
        font-size: 30px;
    }
`

const IconHome = styled(TbSmartHome)`
    ${iconStyle}
`

const IconContact = styled(MdOutlineEmail)`
    ${iconStyle}
`

const IconSkills = styled(CgProfile)`
    ${iconStyle}
`

const IconProjects = styled(FaDiagramProject)`
    ${iconStyle}
`

export const FloatingHeader = () => {
    return (
        <Container>
            <Content>
                <IconHome onClick={() => scrollToSection('InitialSection')} />
                <IconProjects onClick={() => scrollToSection('SectionProjects')} />
                <IconSkills onClick={() => scrollToSection('SectionSkills')} />
                <IconContact onClick={() => scrollToSection('SectionContact')} />
            </Content>
        </Container>
    )
}