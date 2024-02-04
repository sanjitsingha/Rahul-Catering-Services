import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

const faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: 'Who are we?',
      content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
    },
    {
      title: 'What we do?',
      content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
    },
    {
      title: 'About us?',
      content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availableIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availableIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
    },
  ];

  return (
    <div className=''>
      {accordionData.map((section, index) => (
        <div key={index} className="border mb-1">
          <div
            className={`flex justify-between items-center p-2 cursor-pointer transition-all duration-300 text-white rounded-t-md font-mig ${
              activeIndex === index ? 'bg-primary-0 opacity-70' : 'bg-primary-0 opacity-90'
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span className='text-xl'>{section.title}</span>
            {activeIndex === index ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </div>
          {activeIndex === index && (
            <div className="p-2 text-white font-nats text-xl bg-primary-0 rounded-b-md">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default faq;
