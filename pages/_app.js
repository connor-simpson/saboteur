import { PlayerProvider } from "../contexts/playerContext"
import { SocketServerProvider } from "../contexts/socketServerContext"
import { GlobalStyle } from "../design"


const BlockSSR = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

const Saboteur = ({ Component, pageProps }) => {
  return <BlockSSR>
    <PlayerProvider>
      <SocketServerProvider>
        <GlobalStyle />
        <Component {...pageProps} /> 
      </SocketServerProvider>
    </PlayerProvider>
  </BlockSSR>
}

export default Saboteur
