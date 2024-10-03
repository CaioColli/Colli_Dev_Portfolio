import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Esse hook faz com que sempre que voltar ou avançar uma página o usuario vai para o topo da tela
export const useScrollToTop = () => {
    const location = useLocation()

    useEffect(() => {
        window.scroll(0, 0)
    }, [location])
}