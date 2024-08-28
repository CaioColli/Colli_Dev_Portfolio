import { PageContainer } from '@/PageContainer'
import { Outlet } from 'react-router-dom'

export const PagePattern = () => {
    return (
        <PageContainer>
            <Outlet />
        </PageContainer>
    )
}