import React, { useState } from 'react';
import './FAQs.css';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        {faq.question}
        <span className={`toggle-icon ${isOpen? 'open' : ''}`}></span>
      </div>
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;