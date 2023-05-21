import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import "./about.css"
import Footer from "../../components/footer/Footer"

const About = () => {

    return (
        <div>
            <Navbar />
            <div className="aboutHero">
                <h1>About Whitestone Funding</h1>
                <div className="heroItems">
                    <div className="heroItem">
                        <h1>1000+</h1>
                        <p>Clients</p>
                    </div>
                    <div className="heroItem">
                        <h1>400M+</h1>
                        <p>Dollars Funded</p>
                    </div>
                    <div className="heroItem">
                        <h1>100%</h1>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
            </div>
            <div className="aboutInfo">
                <div className="aboutInfoWrapper">
                    <div className="aboutInfoItem">
                        <h1>Our Company</h1>
                        <p>Our Small Business Funding service is highly sought-after and has become a popular choice among our clients. We have streamlined the process to make it quick and effortless for your company to access funds as soon as possible. The impact of this service has been significant for many of our customers, and we provide it with the utmost excellence. With the funds obtained through us, our clients have been able to meet business demands by opening new locations and expanding their current operations. Our commitment is to ensure that all details are handled in a simple, seamless, and timely manner.

                            Credit Repair and Invoice Factoring are also frequently utilized by the majority of our customers, as these services have proven essential for success on numerous occasions. We understand the frustration of waiting for customers to fulfill their invoices, and that's precisely why we are here to assist you. Even in situations where businesses have credit issues, we diligently assess the circumstances and work alongside you to develop the best plan to secure the necessary funding. Let us know how we can assist you today. Small business owners face numerous challenges on a daily basis, with competition, growth, and the economy influencing every decision they make. Often, immediate financial assistance is needed to sustain their businesses. With our extensive experience of over 20 years in funding, ProVenture Capital recognizes the importance of timeliness for small businesses and offers a range of financing and payment service solutions. Our strong background in finance and sales allows you to rely on professionals who possess the expertise required for your success.

                            At Whitestone Funding, we do not require collateral for your funding, relieving the anxiety associated with high-stakes borrowing. You can repay the funds within a reasonable time while maintaining the integrity of your company and your income. Moreover, our advances are provided immediately, eliminating the need to wait for extended periods to access crucial funds.

                            The application process at Whitestone Funding is straightforward, and our representatives will guide you through each step. Our goal is to get your application approved, even if you have previously been turned down by banks and other lenders. As a result, we boast a notably high approval rate because we believe in your business and are dedicated to helping you grow and expand. We aim to continue our relationship by being available whenever you require immediate funds, and all our efforts are geared towards supporting that goal of getting you on your feet.

                            If you're a business owner in need of funds, you can apply online or contact us to speak with one of our knowledgeable representatives.</p>
                    </div>
                    <div className="aboutInfoItem">
                        <h1>Our Process</h1>
                        <p>The Merchant Funding Process offered by Whitestone Funding is a rapid four-step procedure.

                            Complete our online application, and within 24 hours, one of our knowledgeable representatives will respond to you.

                            Submit the application along with 1 month of credit card processing statements, 4 months of recent bank statements, a copy of your driver's license, and a voided check.

                            Our team will carefully review your application and paperwork to determine your eligibility for a cash advance. You will promptly receive an offer.

                            Once you agree to the terms and accept the agreement, the funds will be deposited into your bank account within 24-48 hours.

                            Within just 24-48 hours, your business will receive the necessary funds to cover essential expenses. We eliminate unnecessary intermediaries, ensuring a hassle-free and efficient process. What distinguishes us from other similar service providers is our commitment to consistency, diligence, and promptness. You will have a dedicated contact person who will guide you through the process and address any questions or concerns you may have.

                            Our funding policy is transparent and straightforward. After you receive the funds for your business project, we deduct a reasonable and agreed-upon percentage from your future receivables until the loan is fully repaid. Unlike bank loans, our factor rates remain fixed and are calculated with your business model in mind. This ensures that your repayment plan does not strain your business but rather keeps you on track with a reasonable percentage of your monthly income.</p>
                    </div>
                    <div className="aboutInfoItem">
                        <h1>Merchant Cash Advances</h1>
                        <p>In the current economic landscape, business owners encounter a dilemma. Traditional banks are reluctant to provide swift loans to business owners, leaving them in need of immediate cash to enhance and expand their businesses. Frequently, business owners face the arduous and time-consuming application process of banks, only to be rejected when they require funds the most.

                            Whitestone Funding aims to alleviate the frustration associated with these challenges by offering a rapid and convenient four-step process to secure the desired loan. Our Merchant Cash Advance company provides an alternative Cash Advance that distinguishes itself from a bank loan in several ways: There is no requirement for collateral, no fixed repayment term, no late payment fees, and no penalties or surcharges.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About