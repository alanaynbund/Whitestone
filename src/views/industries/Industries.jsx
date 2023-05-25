import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../../components/navbar/Navbar"
import "./industries.css"
import { faCarSide, faDumbbell, faHelmetSafety, faHospital, faIndustry, faMoneyBillTransfer, faPeopleGroup, faStethoscope, faStore, faTree, faTruck, faUtensils } from "@fortawesome/free-solid-svg-icons"
import Footer from "../../components/footer/Footer"

const Industries = () => {
    return(
        <div>
            <Navbar/>
            <h1 className="industryTitle">We Fund All Industries</h1>
            <div className="industryC">
                <div className="industryGrid">
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faHelmetSafety} style={{color: "#003580",}} className="icn"/>
                    <p>Construction Industry</p>
                        
                    </div>
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faCarSide} style={{color: "#003580",}} className="icn"/>
                    <p>Auto Industry</p>

                    </div>
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faStore} style={{color: "#003580",}} className="icn"/>
                    <p>Retail Industry</p>

                    </div>
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} style={{color: "#003580",}} className="icn"/>
                    <p>Financial Services Industry</p>

                    </div>
                </div>
                <div className="industryGrid">
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faHospital} style={{color: "#003580",}} className="icn"/>
                    <p>Hospitality Industry</p>

                    </div>
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faStethoscope} style={{color: "#003580",}} className="icn"/>
                    <p>Medical Industry</p>

                    </div>
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faDumbbell} style={{color: "#003580",}} className="icn"/>
                    <p>Gym Industry</p>

                    </div>
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faTruck} style={{color: "#003580",}} className="icn"/>
                    <p>Transportation Industry</p>

                    </div>
                </div>
                <div className="industryGrid">
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faUtensils} style={{color: "#003580",}} className="icn"/>
                    <p>Restaurant Industry</p>

                    </div>
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faTree} style={{color: "#003580",}} className="icn"/>
                    <p>Landscaping Industry</p>

                    </div>
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faIndustry} style={{color: "#003580",}} className="icn"/>
                    <p>Manufacturing Industry</p>

                    </div>
                    <div className="industryCard">
                    <FontAwesomeIcon icon={faPeopleGroup} style={{color: "#003580",}} className="icn"/>
                    <p>Business Services Industry</p>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Industries