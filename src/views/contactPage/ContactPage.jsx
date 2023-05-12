import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../../components/navbar/Navbar"
import "./contactpage.css"
import { faInbox, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import Footer from "../../components/footer/Footer"

const ContactPage = () => {
    return(
        <div>
            <Navbar/>
            <h1 className="cTitle">Connect With Us</h1>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.3436468415698!2d-74.29790598745335!3d40.24520577168255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3d432ec437391%3A0xaa07a01f2d509b8d!2s315%20W%20Main%20St%2C%20Freehold%2C%20NJ%2007728!5e0!3m2!1sen!2sus!4v1683851404499!5m2!1sen!2sus" width="1000" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contactContainer">
                <div className="contactCards">
                    <div className="contactInfo">
                        <FontAwesomeIcon icon={faPhoneVolume} className="ico"/>
                        <h1>Phone</h1>
                        <h1>929-629-0485</h1>
                    </div>

                </div>
                <div className="contactCards">
                    <div className="contactInfo">
                    <FontAwesomeIcon icon={faInbox} className="ico"/>
                        <h1>Email</h1>
                        <h1>johny@whitestonefundingllc.com</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage