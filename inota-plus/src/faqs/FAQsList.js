import React from 'react';
import FAQItem from './FAQItem';
import faqsData from './faqsData';
import './FAQs.css';

const FAQsList = () => {
  const groupedFaqs = [];
  for (let i = 0; i < faqsData.length; i += 2) {
    groupedFaqs.push(faqsData.slice(i, i + 2));
  }

  return (
  <>
  <div id='heading'>
    <div>
      <h2>Customers</h2>
    </div>
    <div>
      <h2>Questions & <span id='word'>* answers</span></h2>
    </div>
<p>Please send us any questions you may have.</p>

  </div>
    <div className="faqs-grid">
      {groupedFaqs.map((pair, index) =>
        pair.map((faq) => (
          <div key={faq.id} className="faq-container">
            <FAQItem faq={faq} />
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default FAQsList;