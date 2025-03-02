import React, { useState } from "react";
import backgroundImage from "../Images/FAQ.jpg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide end-to-end industrial manufacturing solutions, including machinery design, custom automation, industrial maintenance, and consulting services. We also offer specialized solutions for energy efficiency and productivity improvement."
    },
    {
      question: "Do you provide maintenance and support?",
      answer: "Yes, we offer 24/7 maintenance and support services for all types of industrial equipment. Our team of experts is always ready to assist with troubleshooting, repairs, and preventive maintenance plans."
    },
    {
      question: "How can I request a quote?",
      answer: "You can request a quote by visiting our 'Request Quote' page and filling out the inquiry form. Alternatively, you can contact our sales team via phone or email for a customized quote based on your specific requirements."
    },
    {
      question: "What industries do you serve?",
      answer: "We cater to a wide range of industries, including automotive, aerospace, energy, construction, heavy manufacturing, and robotics. Our solutions are tailored to meet the specific needs of each sector."
    },
    {
      question: "What are your working hours?",
      answer: "Our offices are open Monday to Friday from 9:00 AM to 6:00 PM. However, our support team is available 24/7 for urgent industrial maintenance and technical assistance."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we supply industrial machinery and equipment to clients worldwide. Our logistics team ensures safe and timely delivery with proper documentation for customs clearance."
    },
    {
      question: "Can I schedule a site visit or consultation?",
      answer: "Absolutely! We encourage site visits and consultations to better understand your needs. Please contact us to schedule an appointment, and our experts will be happy to assist you."
    },
    {
      question: "Do you offer customized industrial solutions?",
      answer: "Yes, we specialize in custom-built industrial solutions. Whether you need a modified machine, automation system, or a completely new production setup, we can design and implement a solution that fits your needs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.pageBackground}> {/* ✅ Background color for the whole page */}
      <div style={{ ...styles.container, backgroundImage: `url(${backgroundImage})` }}>
        <h1 style={styles.heading}>Frequently Asked Questions</h1>
        <div style={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <button onClick={() => toggleFAQ(index)} style={styles.question}>
                {faq.question} {openIndex === index ? "▲" : "▼"}
              </button>
              {openIndex === index && <p style={styles.answer}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ Styles with Background Color and Image for Cards
const styles = {
  pageBackground: {
    backgroundColor: "#D1F0EA",  // ✅ Dark background color for the entire page
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  container: {
    maxWidth: "900px",
    padding: "30px",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2.5rem",
    color: "#fff",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  faqItem: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",  // ✅ Keep card background image
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    padding: "15px",
  },
  question: {
    width: "100%",
    textAlign: "left",
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "10px",
  },
  answer: {
    padding: "10px",
    fontSize: "1rem",
    color: "#555",
    borderTop: "1px solid #ddd",
    marginTop: "5px",
  },
};

export default FAQ;
