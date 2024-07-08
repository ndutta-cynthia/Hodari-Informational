import './index.css'
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import { Md360 } from "react-icons/md";

const Feature =()=>{
    return(
        <>
        <div>
            <h2 className="title">Why Choose Us</h2>
        </div>
        
        <div className="section-one">     
            <div className="sub-section-one">
            <div className="socials">
                <div className='personcircle-icon'><BsPersonCircle   alt="personcircle-icon"/></div>
               

            </div>
            <div className="section-two">
                <h2 className='headers'> Analytics</h2>
                <p>Our system accurately records the total<br></br>
                amount of loans disbursed  <br></br> over a specific period of time.
                </p>
            </div>
            </div>
            <div className="sub-section-two">
            <div className="payment-icon">
            <Md360   alt="payment-icon"/>
            </div>
            <div>
                <h2 className='headers'>Payment Tracker</h2>
                <p>Our system closely monitors the repayment <br></br> 
                  dates and duration it takes for farmers<br></br> 
                 to fully repay their loans.</p>
            </div>
        </div>
        </div>
        <div className="section-three">
            <div className="sub-section-three">
            <div className="holdingusd-icon">
            <FaHandHoldingUsd  alt="holdingusd-icon"/>
            </div>
            <div>
                <h2 className='headers'>Alternative collateral</h2>
                <p>We ensure the collection of alternative <br></br>
               collateral to effectively mitigate<br></br> potential losses and reduce risk.</p>
            </div>
            </div>

            <div className="sub-section-four">
            <div className="arrowclockwise-icon">
            <BsArrowClockwise  alt="arrowclockwise-icon" />
            </div>
            <div>
                <h2 className='headers'>Credit Scoring</h2>
                <p>The accuracy score of farmer-generated <br></br> 
                 data is constantly updated  based on <br></br> 
                 their provided information accurately.</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default Feature;