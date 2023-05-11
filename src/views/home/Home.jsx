import Hero from "../../components/hero/Hero"
import MainContent from "../../components/mainContent/MainContent"
import Navbar from "../../components/navbar/Navbar"
import "./home.css"

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className="title">
                <h1>Why Choose Whitestone?</h1>
            </div>
            <MainContent/>
        </div>
    )
}

export default Home