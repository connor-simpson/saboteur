import { useEffect, useState } from "react"
import styled from "styled-components"
import { usePlayer } from "../../../contexts/playerContext"
import { useSocketServer } from "../../../contexts/socketServerContext"
import Player from "../../atoms/player"

const Layer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`

const PlayerLayer = ({ children }) => {

    const {playerName} = usePlayer()
    const {connected, messages, sendMessage} = useSocketServer()
    const [clientJoined, setClientJoined] = useState(false)
    const [players, setPlayers] = useState([])


    useEffect(() => {

        const playerAdded = (data) => {
            if(data){
                let playersClone = players;
                playersClone.push(<Player me={false} name={data.name} />)
                setPlayers(playersClone)
            }   
        }

        if(!connected) return

        if(!clientJoined){
            sendMessage("clientJoined", { 
                    name: playerName,
                    posX: 0
                }
            );
            setClientJoined(true)
        }

        
        
        if(typeof messages.reverse()[0] !== 'undefined'){
            if(typeof messages.reverse()[0]["type"] !== 'undefined'){
                if(messages.reverse()[0]["type"] === 'playerAdded'){
                    playerAdded(messages.reverse()[0]["data"])
                }
            }
        }

    }, [messages]);

    return  <Layer>
        <Player me={true} name={playerName} />
        {players.map(player => {
            return player
        })}
    </Layer>
}

export default PlayerLayer