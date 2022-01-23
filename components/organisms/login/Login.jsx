import { useState } from "react"
import styled from "styled-components"
import { usePlayer } from "../../../contexts/playerContext"
import { useSocketServer } from "../../../contexts/socketServerContext"
import Input from "../../atoms/form/input/Input"

const Form = styled.form`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
`

const Login = () => {

    const { player, setPlayerName } = usePlayer()
    const [playerNameInput, setPlayerNameInput] = useState("")
    const {connected, messages, sendMessage} = useSocketServer()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!connected){
            alert("Could not connect to the server... Please refresh and try again")
        }else{
            setPlayerName(playerNameInput)
        }
    }

    return <Form onSubmit={handleSubmit}>
        {player}
        <Input placeholder="Enter player name" onChange={(e) => setPlayerNameInput(e.target.value)} />
    </Form>

}

export default Login