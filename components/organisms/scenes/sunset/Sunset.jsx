import styled from "styled-components"
import { palette } from "../../../../design"
import Sun from "../../../atoms/scenes/sun"
import Stars from "../../../molecules/scenes/stars"

const Backdrop = styled.div`
    background: linear-gradient(to top, ${palette.sunset.primary} 25% 50%, ${palette.sunset.secondary} 50% 60%, ${palette.sunset.tertiary} 60% 70%, ${palette.sunset.quaternary} 70% 80%);
    width: 1200px;
    height: 700px;
    border-radius: 10px;
    position: relative;
    border: 5px solid ${palette.sunset.quaternary};
    box-shadow: 5px 5px rgba(0, 0, 0, 0.4);
    overflow: hidden;
`

const Sunset = ({ children }) => {
    return <Backdrop>
        <Stars />
        <Sun />
        {children}
    </Backdrop>
}

export default Sunset