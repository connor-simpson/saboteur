import styled, {keyframes} from "styled-components"

const starsTwinkle = keyframes`
    0% {
        width: 1px;
        height: 1px;    
    }
    50% {
        width: 3px;
        height: 3px;
    }
`

const Star = styled.div`
    width: 3px;
    height: 3px;
    background: white;
    position: absolute;
    top: ${props => props.posY}px;
    left: ${props => props.posX}px;
    animation-name: ${starsTwinkle};
    animation-duration: ${props => props.dur}s;
    animation-iteration-count:infinite
`

export default Star