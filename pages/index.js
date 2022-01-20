
import Container from "../components/atoms/container"
import UserBar from "../components/molecules/userbar"
import dynamic from "next/dynamic"
import Floor from "../components/atoms/floor";
import PlayerLayer from "../components/organisms/playerLayer";
import Player from "../components/atoms/player";

/*
import Footer from "../components/organisms/footer"
import Dusk from "../components/organisms/scenes/dusk"
import Sunset from "../components/organisms/scenes/sunset"*/

const Sunset = dynamic(() => import('../components/organisms/scenes/sunset'), {ssr: false});
const Dusk = dynamic(() => import('../components/organisms/scenes/dusk'), {ssr: false});

const Home = () => {
  return <Container>
    <Dusk>
      <UserBar />
      <PlayerLayer>
        <Player me={true} />
      </PlayerLayer>
    </Dusk>
  </Container>
}

export default Home