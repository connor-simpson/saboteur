import { useContext, createContext, useEffect, useRef, useState, useMemo } from "react"
import styled from "styled-components"

export const SocketServerContext = createContext({})

export const useSocketServer = () => useContext(SocketServerContext)


const Console = styled.ul`
    position: fixed;
    height: 100px;
    width: 100%;
    border: thin solid black;
    margin: 0;
    padding: 0;
    font-family: 'Arial';
    overflow: hidden;
    z-index: 100;
    background: white;
    resize: both;
    li {
        margin-bottom: 15px;
    }
    span {
        font-size: 11px;
        color: red;
        text-transform: uppercase;
        font-family: consolas;
        padding: 5px 10px;
        background: lightgrey;
        font-weight: bold;
        border-radius: 3px;
    }
    h3 {
        font-weight: bold;
        margin-bottom: 25px;
    }
`

export const SocketServerProvider = ({ children }) => {

    const ws = useMemo(() => new WebSocket("ws://82.17.164.45:1050"), [])
    const [connected, setConnected] = useState(false);
    const [messages, setMessages] = useState([])
    
   
    ws.onopen = (e) => {
        console.info("Connected to the server succefully!")
        setConnected(true)
    }
        
    ws.onerror = (e) => {
        console.error("An error occurred contacting the server")
    }

    ws.onmessage = (e, data) => {
        console.log(data);
        let dataObject = JSON.parse(e.data)
        if(JSON.stringify([...messages, dataObject]) === JSON.stringify(messages)) return;
        setMessages([...messages, dataObject])
    }

    const sendMessage = (type, data) => {
        ws.send(JSON.stringify({
            type,
            data
        }))
    }

    return <SocketServerContext.Provider value={{connected, messages, sendMessage}}>
        {children}
    </SocketServerContext.Provider>

}