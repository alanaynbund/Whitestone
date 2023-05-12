import "./contact.css"
import { useNavigate } from "react-router-dom"

const Contact = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/contact")
    }


    return(
        <div className="contactC">
            <h1>Want to get in touch?</h1>
            <button className="btn" onClick={handleClick}>Contact Us</button>
        </div>
    )
}

export default Contact