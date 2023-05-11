import Contact from "../../components/contact/Contact"
import GetFunded from "../../components/getFunded/GetFunded"
import Hero from "../../components/hero/Hero"
import MainContent from "../../components/mainContent/MainContent"
import Navbar from "../../components/navbar/Navbar"
import Specialized from "../../components/specialized/Specialized"
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
            <Specialized/>
            <GetFunded/>
            <Contact/>
        </div>
    )
}

export default Home