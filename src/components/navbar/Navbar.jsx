import "./navbar.css"
import { useNavigate, Link } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    const handleClick1 = () => {
        navigate("/contact")
    }

    const handleClick2 = () => {
        navigate("/policy")
    }

    const handleClick3 = () => {
        navigate("/about")
    }


    return(
        <div className="navbar">
            <div className="navContainer">
                <div className="groupLogo" onClick={handleClick}>
                    <h1 className="logo">WHITESTONE</h1>
                    <h1 className="logo2">F U N D I N G</h1>
                </div>
                <div className="navItems">
                    <p onClick={handleClick1}>Contact Us</p>
                    <p onClick={handleClick3}>About Us</p>
                    <Link to={"https://powerforms.docusign.net/2784902b-1f7e-46b9-a887-b96257a931c0?env=na4&acct=244d37cd-17b5-4aed-8a45-76f2f3c5f64c&accountId=244d37cd-17b5-4aed-8a45-76f2f3c5f64c" }style={{ textDecoration: 'none' }}target="_blank" rel="noopener noreferrer">
                        <p className="apply">Apply Now</p>
                    </Link>
                    <p onClick={handleClick2}>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar