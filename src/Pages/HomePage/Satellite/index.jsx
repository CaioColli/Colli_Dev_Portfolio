import styled from 'styled-components'
import SatelliteIllustration from '/Images/SatelliteIllustration.png'
import { useParallax } from 'react-scroll-parallax'

const Content = styled.div.withConfig({
    shouldForwardProp: (prop) => !['right', 'top'].includes(prop)
})`
    background-image: url(${SatelliteIllustration});
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    height: 150px;
    position: absolute;
    right: ${props => props.right};
    top: ${props => props.top};
    width: 150px;
    z-index: 100;

    @media (max-width: 767px) {
        display: none;
    }
`

export const Satellite = ({ right, top }) => {
    const parallaxSatellite = useParallax({
        easing: 'easeInSine',
        translateY: [-100, 200]
    })

    return (
        <Content
            ref={parallaxSatellite.ref}
            right={right}
            top={top}
        />
    )
}