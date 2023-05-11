import Hero from "../../components/hero/Hero"
import MainContent from "../../components/mainContent/MainContent"
import Navbar from "../../components/navbar/Navbar"
import "./home.css"

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <MainContent/>
        </div>
    )
}

export default Home