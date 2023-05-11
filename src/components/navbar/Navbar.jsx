import "./navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navContainer">
                <div className="groupLogo">
                    <h1 className="logo">WHITESTONE</h1>
                    <h1 className="logo2">F U N D I N G</h1>
                </div>
                <div className="navItems">
                    <p>Contact Us</p>
                    <p>Apply Now</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar