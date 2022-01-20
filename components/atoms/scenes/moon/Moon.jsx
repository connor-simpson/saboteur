import styled, { keyframes } from "styled-components"
import { palette } from "../../../../design"

const moonAura = keyframes`
    0%, 100% {
        box-shadow: 0px 0px 44px 19px ${palette.moon.primary};
    }
    50% {
        box-shadow: 0px 0px 35px 10px ${palette.moon.primary};
    }
`

const Moon = styled.div`
    background: ${palette.moon.primary};
    border-radius: 200px;
    box-shadow: 0px 0px 44px 19px ${palette.moon.primary};
    position: absolute;
    width: 50px;
    height: 50px;
    top: 100px;
    left: 100px;
    animation-name: ${moonAura};
    animation-duration: 15s;
    animation-iteration-count: infinite;
    z-index: 1;
`

export default Moon