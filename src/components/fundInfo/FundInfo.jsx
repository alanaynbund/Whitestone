import "./fundinfo.css"

const FundInfo = () => {
    return(
        <div className="infoContainer">
            <div className="infoWrapper">
                <h1>Up to $2M in Business Funding</h1>
                <div className="infoCards">
                    <div className="infoCard">
                        <h1>Funds For Payroll Needs</h1>
                        <p>To ensure business continuity, it is crucial to compensate employees regardless of pending customer payments. A client of ours frequently requires funding to meet their company's payroll obligations, which is a top priority for them.</p>
                    </div>
                    <div className="infoCard">
                        <h1>Business Expansion</h1>
                        <p>The most exciting aspect of running a business is when it experiences growth and expansion opportunities arise. With Whitestone Funding, you have the flexibility to utilize funds to establish a second restaurant branch or a new retail store. You have the freedom to decide how to allocate your resources for these ventures.</p>
                    </div>
                    <div className="infoCard">
                        <h1>Business Expenses</h1>
                        <p>Within the realm of business, there are regular operational costs that occur on a daily or monthly basis, such as payroll, rent, and utility bills. However, unforeseen expenses often arise unexpectedly. By utilizing funding, you can ensure the smooth functioning of your operations, even in the face of these unexpected occurrences.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FundInfo