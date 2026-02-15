import React, { useState } from "react";

const FAQ = ({ title = "Frequently Asked Questions" }) => {
  // State to track which FAQ is open (null means all closed)
  const [openIndex, setOpenIndex] = useState(null);

  // Domain-specific questions based on the Swastik Group/Vikhroli project
  const faqList = [
    { 
      question: "What makes Swastik Group a trusted name in real estate in Vikhroli?", 
      answer: "Swastik Group has built a reputation over decades for delivering high-quality residential spaces with clear titles and transparent documentation, ensuring peace of mind for every homeowner." 
    },
    { 
      question: "What types of residential projects does Swastik Group offer in Vikhroli?", 
      answer: "We offer a range of modern living spaces, including premium 1, 2, and 3 BHK apartments equipped with world-class amenities and smart home features." 
    },
    { 
      question: "Why should I invest in Swastik Group's new projects in Vikhroli?", 
      answer: "Vikhroli is a rapidly developing hub with excellent connectivity to the Eastern Express Highway and JVLR. Investing here ensures high rental yields and significant capital appreciation." 
    },
    { 
      question: "How does Swastik Group ensure quality and sustainability in its real estate projects?", 
      answer: "Our projects utilize sustainable construction materials, rainwater harvesting systems, and energy-efficient lighting to reduce the carbon footprint while maintaining superior build quality." 
    },
    { 
      question: "How can I learn more about upcoming residential projects by Swastik Group in Vikhroli?", 
      answer: "You can visit our sales office on-site, explore the 'Upcoming Projects' section on our website, or contact our relationship managers for a private tour." 
    }
  ];

  const toggleFAQ = (index) => {
    // If the clicked one is already open, close it; otherwise, open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#f0fdfa" }}>
      <h2 style={{ 
        fontSize: "28px", 
        color: "#2f4f4f", 
        marginBottom: "40px", 
        fontWeight: "bold" 
      }}>
        {title}
      </h2>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {faqList.map((faq, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            {/* Question Bar */}
            <div 
              onClick={() => toggleFAQ(i)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#bbf7d0", // Mint green from reference image
                padding: "18px 25px",
                borderRadius: openIndex === i ? "12px 12px 0 0" : "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.3s ease"
              }}
            >
              <h4 style={{ 
                margin: 0, 
                fontSize: "15px", 
                fontWeight: "600", 
                color: "#2f4f4f",
                flex: 1 
              }}>
                {faq.question}
              </h4>
              
              <div style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#2f4f4f",
                marginLeft: "20px",
                transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)", // Rotates + to x when open
                transition: "transform 0.3s ease"
              }}>
                +
              </div>
            </div>

            {/* Answer Box (Conditionally Rendered) */}
            <div style={{
              maxHeight: openIndex === i ? "200px" : "0",
              overflow: "hidden",
              transition: "all 0.4s ease-in-out",
              background: "#ffffff",
              border: openIndex === i ? "1px solid #bbf7d0" : "none",
              borderRadius: "0 0 12px 12px",
              textAlign: "left",
              opacity: openIndex === i ? 1 : 0
            }}>
              <p style={{ 
                padding: "20px 25px", 
                margin: 0, 
                fontSize: "14px", 
                lineHeight: "1.6", 
                color: "#4a5568" 
              }}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;