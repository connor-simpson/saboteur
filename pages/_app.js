import { GlobalStyle } from "../design"

const Saboteur = ({ Component, pageProps }) => {
  return <>
    <GlobalStyle />
    <Component {...pageProps} /> 
  </>
}

export default Saboteur
