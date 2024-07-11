import React, { useState } from 'react';
import './index.css';
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="faq-item">
            <div className="faq-question-container" onClick={toggleAnswer}>
                <span className="faq-question">{question}</span>
                <span className={`faq-toggle ${isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};
export default FaqItem;