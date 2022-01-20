import styled from "styled-components"
import { palette } from "../../../../design"

import Moon from "../../../atoms/scenes/moon"
import Cloud from "../../../atoms/scenes/cloud"
import Stars from "../../../molecules/scenes/stars"
import { useEffect, useState } from "react"


const Backdrop = styled.div`
    background: linear-gradient(to top, ${palette.nightSky.primary} 25% 50%, ${palette.nightSky.secondary} 50% 60%, ${palette.nightSky.tertiary} 60% 70%, ${palette.nightSky.quaternary} 70% 80%);
    width: 1200px;
    height: 700px;
    border-radius: 10px;
    position: relative;
    border: 5px solid ${palette.nightSky.quaternary};
    box-shadow: 5px 5px rgba(0, 0, 0, 0.4);
    overflow: hidden;
`


const Dusk = ({ children }) => {
   
    const [clouds, setClouds] = useState([])

    const randCloudY = () => Math.floor((Math.random() * 250))
    const randCloudX = () => Math.floor(Math.random() * 400)
    const randCloudDur = () =>  Math.floor((Math.random() * 360) + 120) 


    useEffect(() => {
        let object = [];
        for(let i = 0; i < 25; i++){
            object.push(<Cloud key={i} posX={randCloudX} posY={randCloudY} dur={randCloudDur} />)
        }
        setClouds(object)
    }, [])

    return <Backdrop>
        <Moon />
        <Stars />
        {clouds}
        {children}
    </Backdrop>
    

}

export default Dusk