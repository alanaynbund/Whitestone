import "./maincontent.css"
import { Link } from "react-router-dom"

const MainContent = () => {
    return (
        <div className="mainDiv">
            <div className="mainContainer">
                <div className="info">
                    <p>Whitestone Funding is a well-known financial firm that caters to the financing needs of clients all over the country. Nowadays, most banks have strict lending policies and only grant loans to companies that don't really need them. Moreover, most banks specialize in only one type of financing and cannot offer the diverse financing options that small to medium-sized businesses require. 
                        
                        <p>With Whitestone Funding's vast experience and partnerships with leading national lenders, we can provide all types of financing solutions to meet your business needs.

                        Whether you're looking to purchase new equipment, finance your accounts receivable and inventory, raise working capital, or even acquire a company, Whitestone Funding has got you covered.</p>

                        Regardless of whether your business is a startup or well-established, we have the right financing solution to suit your needs.

                        Contact us today to receive a complimentary analysis of your financing requirements with no obligation to commit.</p>
                        <Link to="https://powerforms.docusign.net/2784902b-1f7e-46b9-a887-b96257a931c0?env=na4&acct=244d37cd-17b5-4aed-8a45-76f2f3c5f64c&accountId=244d37cd-17b5-4aed-8a45-76f2f3c5f64c" target="_blank" rel="noopener noreferrer">
                            <button>Apply Now</button>
                        </Link>
                </div>
                
                <div className="image">
                    <img className="img" src="https://static.vecteezy.com/system/resources/previews/016/151/485/original/cartoon-business-graph-icon-in-comic-style-chart-sign-illustration-pictogram-diagram-business-splash-effect-concept-vector.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainContent