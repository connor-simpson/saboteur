import Container from "../components/atoms/container"
import UserBar from "../components/molecules/userbar"
import Footer from "../components/organisms/footer"
import Dusk from "../components/organisms/scenes/dusk"

const Home = () => {
  return <Container>
    <Dusk>
      <UserBar />
    </Dusk>
    <Footer />
  </Container>
}

export default Home