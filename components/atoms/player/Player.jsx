import { useEffect, useRef, useState } from "react"
import styled, { css, keyframes } from "styled-components"
import { fonts } from "../../../design/fonts"
import { generateId } from "../../../helpers"

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
    background:url('./images/avatars/still.png');
    width: 73px;
    height: 144px;
    position: absolute;
    bottom: 0;
    left: 0px;

    &:after {
        ${fonts.small}
        content: '${props=>props.name}';
        position: absolute;
        top: -25px;
        width: 100%;
        text-shadow: 3px 3px 0px black;
        color: white;
    }

    &.walking {
        animation-name: ${walking};
        animation-duration: 0.4s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-delay: 0;
    }

    &.left {
        transform: scaleX(-1);

        &:after {
            transform: scaleX(-1);
        }
    }
`

const Player = ({ me = false, name = "Player" }) => {
    
    const playerId = useRef(generateId())
    const playerMoving = useRef(false)
    const playerPosX = useRef(0)

    const [playerPosition, setPlayerPosition] = useState({
        walking: false,
        direction: "right",
        posX: 0
    })

  
    useEffect(() => {

        const stopMoving = e => {
            if(e.key === "ArrowRight" || e.key === "ArrowLeft"){
                const playerOnDom = document.getElementById(playerId.current)
                playerOnDom.classList.remove("walking")
            }
        }

        const walk = (e, bufferPosX = false) => {
        
            if (["ArrowLeft", "ArrowRight"].indexOf(e.key) === -1) return;
    
            const direction = e.key === "ArrowRight" ? 'right' : 'left'
            const change = e.key === "ArrowRight" ? 3 : -3
            const currentPosX = bufferPosX === false ? playerPosX.current : bufferPosX
            const playerOnDom = document.getElementById(playerId.current)
    
            let posX = (currentPosX + change)
    
            if(posX < 0){
                posX = 0
            }
    
            if(posX > 1128){
                posX = 1128
            }
    
            playerPosX.current = posX;
    
            playerOnDom.style.left = `${playerPosX.current}px`;
            playerOnDom.classList.add("walking")
            playerOnDom.classList.remove("left", "right")
            playerOnDom.classList.add(direction)
            
    
            if(playerMoving.current){
                setTimeout(() => walk(e, playerPosX.current), 0)
            }else{
                stopMoving(e);
            }
            
        }

        if(me){
            window.addEventListener("keydown", e => {
                if(["ArrowLeft", "ArrowRight"].indexOf(e.key) === -1) return;

            if(!playerMoving.current){
                    playerMoving.current = true;
                    walk(e)
            }

            window.addEventListener("keyup", e => {
                if(["ArrowLeft", "ArrowRight"].indexOf(e.key) === -1) return;

                if(playerMoving.current){
                    playerMoving.current = false
                }

                }, false)

            }, false)
                
        }
  

        return () => {
            window.removeEventListener("keydown", walk)
            window.removeEventListener("keyup", stopMoving)
        }

    }, [playerPosition])
    

    return <Avatar id={playerId.current} name={name} />
}

export default Player