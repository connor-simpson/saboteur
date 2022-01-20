import { useEffect } from "react"
import styled from "styled-components"
import Star from "../../../atoms/scenes/star"

const Layer = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 280px;
    z-index: 0;
    opacity: 0.5;
`

const Stars = () => {   


    const totalStars = 100
    const starsObject = []

    const randStarY = () => Math.floor((Math.random() * 280))
    const randStarX = () => Math.floor(Math.random() * 1200)
    const randStarDur = () =>  Math.floor((Math.random() * 60) + 10)

    for(let i = 1; i < totalStars; i++){ 
        starsObject.push(<Star key={i} posX={randStarX} posY={randStarY} dur={randStarDur} />)
    }

    return <Layer>
        {starsObject}
    </Layer>
}

export default Stars