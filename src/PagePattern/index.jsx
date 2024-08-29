import { ButtonToTop } from '@/ButtonToTop'
import { FloatingHeader } from '@/FloatingHeader'
import { PageContainer } from '@/PageContainer'
import { Outlet } from 'react-router-dom'

export const PagePattern = () => {
    return (
        <PageContainer>
            <FloatingHeader />
            <Outlet />
            <ButtonToTop />
        </PageContainer>
    )
}