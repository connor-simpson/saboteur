
import Container from "../components/atoms/container"
import UserBar from "../components/molecules/userbar"
import dynamic from "next/dynamic"
import PlayerLayer from "../components/organisms/playerLayer";
import Player from "../components/atoms/player";
import { usePlayer } from "../contexts/playerContext";
import Login from "../components/organisms/login";

const Sunset = dynamic(() => import('../components/organisms/scenes/sunset'), {ssr: false});
const Dusk = dynamic(() => import('../components/organisms/scenes/dusk'), {ssr: false});

const Home = () => {

  const {playerName, setPlayerName} = usePlayer()

  
  if(playerName){
    return <Container>
      <Dusk>
        <UserBar />
        <PlayerLayer />
      </Dusk>
    </Container>
  }
  
  return <Container>
    <Sunset>
      <Login />
    </Sunset>
  </Container>
}

export default Home