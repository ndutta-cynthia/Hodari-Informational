import React from 'react';
import FaqItem from './Components/FaqItem';
import './index.css';
const Faqs = () => {
    const faqs = [
      {
        id: 1,
        question: "What does the system do?",
        answer: "Credit scoring algorithims uses Utility bills,milk collection, savings, and other sources of income as data, then generates a credit score."
      },
      {
          id: 2,
          question: "How do you assess a customers creditworthiness",
          answer: "We give a credit score based on the information aprovided my the customer."
        },
        {
          id: 3,
          question: "What is required to asses the creditworthiness",
          answer: "We require the milk production rates for each customer."
        },
        {
          id: 4,
          question: "What is required to asses the creditworthiness",
          answer: "We require the milk production rates for each customer."
        },
        {
          id: 5,
          question: "What is required to asses the creditworthiness",
          answer: "We require the milk production rates for each customer."
        },
        {
          id: 6,
          question: "What is required to asses the creditworthiness",
          answer: "We require the milk production rates for each customer."
        },
      
    ];
    return (
      <>
      <div id='heading'>
          <div id='customer'>Customers</div>
          <div id>Questions &<span id='word'> *Answers</span></div>
        </div>
        <div id='sentence'>Please send us any question you may have</div>
        <div className="faq-section">
            <div className="faq-grid">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
        </>
    );
};
export default Faqs;