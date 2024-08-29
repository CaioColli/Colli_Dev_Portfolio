export const createRandomStart = (numStarts, parentElement) => {
    for (let i = 0; i < numStarts; i++ ) {
        const stars = document.createElement('div')

        const size = Math.random() * 7 + 1 // Define tamanhos aleatórios de 1px a 7px
        const top = Math.random() * 100 // Define posição das estrelas
        const left = Math.random() * 100

        stars.style.position = 'absolute'
        stars.style.width = `${size}px`
        stars.style.height = `${size}px`
        stars.style.backgroundColor = '#FFFFFF'
        stars.style.borderRadius = '50%'
        stars.style.top = `${top}%`
        stars.style.left = `${left}%`

        parentElement.appendChild(stars)
    }
}