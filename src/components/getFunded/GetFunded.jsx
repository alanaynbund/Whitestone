import { Link } from "react-router-dom"
import "./getfunded.css"

const GetFunded = () => {
    return (
        <div className="mainC">
            <h1>Get Funded Today</h1>
            <div className="container">
                <div className="containerItems">
                    <div className="containerItem">
                        <p>Up to</p>
                        <h1>$2M</h1>
                        <p>In business funding</p>
                    </div>
                    <div className="containerItem">
                        <p>Qualify in</p>
                        <h1>2-10</h1>
                        <p>Hours</p>
                    </div>
                    <div className="containerItem">
                        <p>Flexible</p>
                        <h1>2-12 mo.</h1>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
            <Link to="https://powerforms.docusign.net/2784902b-1f7e-46b9-a887-b96257a931c0?env=na4&acct=244d37cd-17b5-4aed-8a45-76f2f3c5f64c&accountId=244d37cd-17b5-4aed-8a45-76f2f3c5f64c" target="_blank" rel="noopener noreferrer">
                <button>Apply Now</button>
            </Link>
        </div>
    )
}

export default GetFunded