import { useEffect, useState } from "react"
import styled, { css, keyframes } from "styled-components"

const walking = keyframes`
    0%, 100% {
        background:url('./images/avatars/walk1.png')
    }
    14% {
        background:url('./images/avatars/walk2.png')
    }
    28% {
        background:url('./images/avatars/walk3.png')
    }
    42% {
        background:url('./images/avatars/walk4.png')
    }
    56% {
        background:url('./images/avatars/walk5.png')
    }
    70% {
        background:url('./images/avatars/walk6.png')
    }
    84% {
        background:url('./images/avatars/walk7.png')
    }
`

const Avatar = styled.div`
    width: 73px;
    height: 144px;
    position: absolute;
    bottom: 0;
    left: ${props=>props.player.posX}px;

    ${props => {

        if(props.player.direction === 'left'){
            return css`
                transform: scaleX(-1);
            `
        }
    }}

    ${props => {
        if(props.player.walking){
            return css`
                animation-name: ${walking};
                animation-duration: 0.4s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
                animation-delay: 0;
            `
        }
    }}
    ${props => {
        if(props.player.walking === false){
            return css`
                background:url('./images/avatars/still.png');
            `
        }
    }}
`

const Player = ({ me = false, name }) => {


    const [playerPosition, setPlayerPosition] = useState({
        walking: false,
        direction: "right",
        posX: 0
    })

    const stopMoving = e => {
        if(e.key === "ArrowRight" || e.key === "ArrowLeft"){
            setPlayerPosition({
                walking: false,
                direction: playerPosition.direction,
                posX: playerPosition.posX
            })
        }
    }

    const walkForward = e => {
        if(e.key === "ArrowRight"){
            
            setPlayerPosition({
                walking: true,
                direction: "right",
                posX: playerPosition.posX + 15
            })
        }
    }
    const walkBackward = e => {
        if(e.key === "ArrowLeft"){
            setPlayerPosition({
                walking: true,
                direction: "left",
                posX: playerPosition.posX - 15
            })
            
        }
    }

    useEffect( () => {
        
        document.addEventListener("keydown", walkForward)
        document.addEventListener("keydown", walkBackward)
        document.addEventListener("keyup", stopMoving)

        return () => {
            document.removeEventListener("keydown", walkForward)
            document.removeEventListener("keydown", walkBackward)
            document.removeEventListener("keyup", stopMoving)
        }

    }, [playerPosition])

    return <>
        <Avatar player={playerPosition} />
    </>
}

export default Player