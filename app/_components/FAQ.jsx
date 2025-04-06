'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does ESPE Service work?",
      answer: "ESPE Service connects customers with verified service providers through our easy-to-use platform. Simply create an account, browse available services, and book your preferred provider. Our system handles scheduling, payments, and ensures quality service delivery."
    },
    {
      question: "What types of services are available?",
      answer: "We offer a wide range of services including home maintenance, cleaning, electrical work, plumbing, and more. Our platform also supports business services and community initiatives. New services are regularly added based on community needs."
    },
    {
      question: "How are service providers verified?",
      answer: "All service providers undergo a rigorous verification process including background checks, skill assessments, and customer reviews. We maintain high standards to ensure quality and reliability for our customers."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including credit/debit cards, mobile payments, and bank transfers. All transactions are secure and protected by industry-standard encryption."
    },
    {
      question: "How can I become a service provider?",
      answer: "To become a service provider, visit our registration page and complete the application process. You'll need to provide necessary documentation, undergo verification, and complete our onboarding program."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "You can cancel or reschedule appointments through our platform up to 24 hours before the scheduled time. For emergency cancellations, please contact our support team directly."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-[#248c89] mx-auto mb-4"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our services and platform
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-[#248c89] transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`px-6 pb-4 transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 