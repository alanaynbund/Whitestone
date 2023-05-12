import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./privacy.css"

const Privacy = () => {
    return(
        <div>
            <Navbar/>
            <h1 className="privTitle">Privacy Policy</h1>
            <div className="privacyContainer">
                <div className="privInfo">
                <p>The protection of private information is a top priority at Whitestone Funding. This Privacy Statement governs data collection and use on https://whitestonefunding.com/ and Whitestone Funding. By using the Whitestone Funding website, you agree to the data collection practices described in this statement.

Whitestone Funding may collect personally identifiable information such as your name, email address, and phone number, as well as non-unique demographic information like your age, gender, and household income to provide better products and services. Personal information is only collected when voluntarily provided, and it may be required to use certain products or services on the site.

Whitestone Funding uses personal information to operate the website and provide requested services. The company may also use the information to inform customers of other products or services available from Whitestone Funding and its affiliates.

Whitestone Funding does not sell, rent or lease customer lists to third parties. However, it may share data with trusted partners to perform statistical analysis, send email or postal mail, provide customer support, or arrange for deliveries. Third parties are prohibited from using personal information except to provide these services and are required to maintain confidentiality.

Whitestone Funding may disclose personal information without notice if required by law, to comply with legal process, protect and defend its rights or property, or act under exigent circumstances to protect personal safety.

Whitestone Funding may track user behavior to determine the most popular services and deliver customized content and advertising. Information about hardware and software may also be collected and used to maintain service quality and provide general statistics regarding website use.

Whitestone Funding may use cookies to personalize online experiences and recall specific information on subsequent visits. Customers have the ability to accept or decline cookies, but declining cookies may limit the experience of interactive features.

Whitestone Funding uses SSL protocol to secure personal information and protect against unauthorized access, use, or disclosure. While the company strives to take appropriate security measures, it cannot guarantee 100% security due to inherent limitations of the Internet.</p>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Privacy