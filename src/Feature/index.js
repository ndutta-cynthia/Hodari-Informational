import './index.css'
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import { Md360 } from "react-icons/md";





const Feature =()=>{
    return(
        <>
        <div>
            <h2 class="feature">Why Choose Us</h2>
        </div>
        
        <div class="firstpart">     
            <div class="icon1">
            <div class="analytic">
                <div><BsPersonCircle  size='1.5rem' color='#00DEF'  alt="icon1"/></div>
               

            </div>
            <div class="analytics">
                <h2> Analytics</h2>
                {/* <p class="paragraphs">Our system accurately records the total<br></br>
                  amount of loans disbursed  <br></br> over a specific period of time.</p> */}

                <p>Our system accurately records the total<br></br>
                amount of loans disbursed  <br></br> over a specific period of time.
                </p>
            </div>
            </div>
            <div class="tracker">
            <div class="icon2">
            <Md360 size='1.5rem' color='#00DEF'  alt="icon2"/>
            </div>
            <div>
                <h2>Payment Tracker</h2>
                <p>Our system closely monitors the repayment <br></br> 
                  dates and duration it takes for farmers<br></br> 
                 to fully repay their loans.</p>
            </div>
        </div>
        </div>
        <div class="secondpart">
            <div class="alt">
            <div class="icon3">
            <FaHandHoldingUsd size='1.5rem' color='#00DEF'  alt="icon3"/>
            </div>
            <div>
                <h2>Alternative collateral</h2>
                <p>We ensure the collection of   alternative <br></br>
               collateral to effectively mitigate<br></br> potential losses and reduce risk.</p>
            </div>
            </div>

            <div class="credit">
            <div class="icon4">
            <BsArrowClockwise size='1.5rem' color='#00DEF' alt="icon4" />
            </div>
            <div>
                <h2>Credit Scoring</h2>
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