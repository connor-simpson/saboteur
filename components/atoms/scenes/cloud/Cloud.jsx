import styled, {keyframes} from "styled-components"

const cloudMoving = keyframes`
    0%, 100% {  
        left: -200px;
    } 
    50% {
        left: 1200px;
    }
`

const Cloud = styled.div`
    width: 100px;
    height: 30px;
    background: white;
    border-radius: 100px;
    position: absolute;
    opacity: 0.7;
    top: ${props => props.posY}px;
    left: ${props => props.posX}px;
    animation-name: ${cloudMoving};
    animation-duration: ${props => props.dur}s;
    animation-iteration-count: infinite;
    z-index:3;
    ::after {
        width: 30px;
        height: 30px;
        content: '';
        background: white;
        position: absolute;
        top: -15px;
        border-radius: 30px;
        left: 20px;
    }
    ::before {
        width: 50px;
        height: 50px;
        content: '';
        background: white;
        position: absolute;
        top: -20px;
        border-radius: 30px;
        left: 30px;
    }
`

export default Cloud