
import Container from "../components/atoms/container"
import UserBar from "../components/molecules/userbar"
import dynamic from "next/dynamic"
import PlayerLayer from "../components/organisms/playerLayer";
import { usePlayer } from "../contexts/playerContext";
import Login from "../components/organisms/login";
import { useSocketServer } from "../contexts/socketServerContext";

const Sunset = dynamic(() => import('../components/organisms/scenes/sunset'), {ssr: false});
const Dusk = dynamic(() => import('../components/organisms/scenes/dusk'), {ssr: false});

const Home = () => {

  const {playerName, setPlayerName} = usePlayer()
  const {connected} = useSocketServer()

  
  if(!connected){
    return "Couldn't connect to the server."
  }else{

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
}

export default Home