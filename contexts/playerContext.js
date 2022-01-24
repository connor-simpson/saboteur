import { useContext, createContext,  useState } from "react"

export const PlayerContext = createContext({})

export const usePlayer = () => useContext(PlayerContext)

export const PlayerProvider = ({ children }) => {

    const [playerName, setPlayerName] = useState(null)

    return <PlayerContext.Provider value={{playerName, setPlayerName}}>
        {children}
    </PlayerContext.Provider>   
}
