import { PagePattern } from '@/PagePattern'
import { PageNotFound } from '@/Pages/404Page'
import { HomePage } from '@/Pages/HomePage'
import { OtherProjects } from '@/Pages/OtherProjets'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PagePattern />}>
                    <Route index element={<HomePage />} />
                    <Route path='projetos' element={<OtherProjects />}/>
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}