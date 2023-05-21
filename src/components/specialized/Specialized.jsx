import { Link } from "react-router-dom"
import "./specialized.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard, faHandshake } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Specialized = () => {
    const [open, setOpen] = useState(false)
    const [openCredit, setOpenCredit] = useState(false)

    return (
        <div className="specC">
            <h1>We Specialize in</h1>
            <div className="container">
                <div className="specContainerItems">
                    <div className="specContainerItem">
                        <h1 className="specTitle" onClick={() => {setOpen(!open)}}><FontAwesomeIcon icon={faHandshake} /> Merchant Cash Advance</h1>
                        
                        {open && <div className="mcaInfo">
                            <p>Revenue based financing, commonly referred to as a Merchant Cash Advance, offers a straightforward application process and relaxed credit prerequisites. The documentation requirements for approval are minimal, with the primary factors being the length of time your business has been operating and the stability of your revenue stream.</p>
                            
                        </div>}
                    </div>
                    <div className="specContainerItem">
                        <h1 className="specTitle" onClick={() => setOpenCredit(!openCredit)}><FontAwesomeIcon icon={faCreditCard} /> Lines of Credit</h1>
                        {openCredit && <div className="creditInfo">
                            <p>Revolving lines of credit are an ideal option for modern entrepreneurs. This funding method allows you to access funds as required and pay them back with regular, fixed payments. Once you've repaid your outstanding balance, you can continue to draw from that pool of capital repeatedly.</p>
                            
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialized