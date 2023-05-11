import { Link } from "react-router-dom"
import "./specialized.css"

const Specialized = () => {
    return (
        <div className="specC">
        <h1>We Specialize in</h1>
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
    </div>
    )
}

export default Specialized