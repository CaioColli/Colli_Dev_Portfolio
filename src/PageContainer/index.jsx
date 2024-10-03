import { useScrollToTop } from '@/hooks/Navigate'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    max-width: 100%;
    width: 1920px;
    position: relative;
    overflow: hidden;
`

export const PageContainer = ({ children }) => {
    useScrollToTop()

    return (
        <Container>
            {children}
        </Container>
    )
}