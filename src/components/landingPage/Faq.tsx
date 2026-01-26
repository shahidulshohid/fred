"use client"
import Container from '@/lib/Container';
import React from 'react';
import { useState } from "react";
import { GoArrowDown, GoArrowRight } from "react-icons/go";

export default function ElectricianFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: " How can I contact WireQuote Team?",
      answer: "You can reach us through our contact form on our website or by emailing us at help.wirequote@gmail.com We typically respond within 24 hours."
    },
    {
      question: "What services do you offer?",
      answer: "Powered by intelligent pricing logic and A.l WireQuote turns your rules into instant, professional quotes. WireQuote gives you the essential tools to win more jobs, faster Customers get instant quotes, smart job matching, and trusted electricians in seconds. Professionals gain a powerful dashboard that delivers high-quality leads, manages bookings, and keeps their schedule full. It's everything you need to grow, all in one place. contact help-wirequote@gmail.com for more"
    },
    {
      question: "Do customers need an account to get a quote?",
      answer: "No. Customers can request a quote instantly without creating an account Fewer steps means more enquiries, faster responses, and more jobs landing in your inbox."
    },
    {
      question: "What features are not included in WireQuote?",
      answer: "WireQuote focuses on quoting, not admin overload- It doesn't replace your accounting software or CRM — it plugs straight into the tools you already use, keeping your workflow fast and simple."
    },
    {
      question: "Can I change my prices and rules later?",
      answer: "You're always in control- Update prices, job rules, and preferences anytime to match how you work — WireQuote adapts to you, not the other way around."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {/* FAQ Section */}
      <div className="py-16 px-3">
        <Container className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Header Section - 1 Column */}
            <div className="lg:col-span-1">
              <div className="text-left">
                <p className="text-blue-600 font-semibold text-sm mb-3">
                  FAQ
                </p>
                <h1 className="text-2xl md:text-3xl text-gray-900 font-bold mb-3">
                  Frequently Asked Questions
                </h1>
                <p className="text-[18px] text-[#666666]">
                  Get answers to common questions here
                </p>
              </div>
            </div>

            {/* FAQ List - 2 Columns */}
            <div className="lg:col-span-2">
              <div className="w-full">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-[#EBECEF] rounded-[10px] my-2">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-3 flex items-start justify-between text-left hover:bg-gray-50 transition-colors text-[#2D2D2D] text-xl font-bold"
                      style={
                        openIndex === index
                          ? { backgroundColor: "#FFFFFF", borderRadius: "10px" }
                          : {
                            boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 -1px 2px rgba(255, 255, 255, 0.5)"
                          }
                      }
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="text-base font-semibold text-gray-900 leading-relaxed">
                          {faq.question}
                        </h3>
                        {openIndex === index && (
                          <p className="mt-3 text-sm text-[#666666] leading-relaxed">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        {openIndex === index ? (
                          <GoArrowDown className="w-4 h-4 text-gray-700" />
                        ) : (
                          <GoArrowRight className="w-4 h-4 text-gray-700" />
                        )}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}