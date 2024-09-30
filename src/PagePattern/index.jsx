import { ButtonToTop } from '@/ButtonToTop'
import { FloatingHeader } from '@/FloatingHeader'
import { PageContainer } from '@/PageContainer'
import { Outlet, useLocation } from 'react-router-dom'

export const PagePattern = () => {
    const location = useLocation()

    const hiddenInRoute = ['/projetos']

    const isHidden = hiddenInRoute.includes(location.pathname)

    return (
        <PageContainer>
            {!isHidden && (
                <FloatingHeader />
            )}
            <Outlet />
            <ButtonToTop />
        </PageContainer>
    )
}