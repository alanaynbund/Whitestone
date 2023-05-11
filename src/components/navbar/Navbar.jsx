import "./navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navContainer">
                <h1 className="logo">Whitestone Funding</h1>
                
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