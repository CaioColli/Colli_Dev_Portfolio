import styled from 'styled-components'
import CloudIllustration from '/Images/CloudIllustration.png'
import { forwardRef } from 'react'

const Content = styled.div.withConfig({
    shouldForwardProp: (prop) => !['CloudWidth', 'CloudHeight', 'CloudOpacity', 'CloudTop', 'CloudLeft'].includes(prop)
})`
    background-image: url(${CloudIllustration});
    background-repeat: no-repeat;
    background-size: contain;
    width: ${props => props.CloudWidth};
    height: ${props => props.CloudHeight};
    display: block;
    position: absolute;
    opacity: ${props => props.CloudOpacity};
    top: ${props => props.CloudTop};
    left: ${props => props.CloudLeft};
    z-index: 50;

    @media (max-width: 767px) {
        display: none;
    }
`

export const Cloud = forwardRef(({ CloudWidth, CloudHeight, CloudOpacity, CloudTop, CloudLeft }, ref) => {
    return (
        <Content
            CloudWidth={CloudWidth}
            CloudHeight={CloudHeight}
            CloudOpacity={CloudOpacity}
            CloudTop={CloudTop}
            CloudLeft={CloudLeft}
            ref={ref}
        />
    )
})