import { PagePattern } from '@/PagePattern'
import { HomePage } from '@/Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PagePattern />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}