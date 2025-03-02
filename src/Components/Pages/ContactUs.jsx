import React from "react";
import backgroundImage from "../Images/contact.jpg"; // ✅ Import the image

const ContactUs = () => {
  return (
    <div style={{ ...styles.container, backgroundImage: `url(${backgroundImage})` }}>
      {/* Left Section: Contact Info */}
      <div style={styles.infoSection}>
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Reach out to us using the details below.</p>
        <div style={styles.contactDetails}>
          <p><strong>📍 Address:</strong> 123 Industrial Road, City, Country</p>
          <p><strong>📞 Phone:</strong> +123 456 7890</p>
          <p><strong>✉️ Email:</strong> info@mechanicalco.com</p>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div style={styles.formSection}>
        <h3>Send Us a Message</h3>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} required />
          <input type="email" placeholder="Your Email" style={styles.input} required />
          <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

// ✅ Updated Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    padding: "50px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  infoSection: {
    flex: 1,
    padding: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  formSection: {
    flex: 1,
    padding: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    minHeight: "100px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default ContactUs;
