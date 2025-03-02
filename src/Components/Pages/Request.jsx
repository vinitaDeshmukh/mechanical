import React from "react";
import backgroundImage from "../Images/Request.jpg"; // ✅ Import Background Image

const Request = () => {
  return (
    <div style={{ ...styles.pageBackground, backgroundImage: `url(${backgroundImage})` }}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Request a Quote</h1>
        <p style={styles.description}>
          Fill out the form below and our team will get back to you with a customized quote.
        </p>

        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} required />
          <input type="email" placeholder="Your Email" style={styles.input} required />
          <input type="text" placeholder="Company Name" style={styles.input} />
          <textarea placeholder="Project Details" style={styles.textarea} required></textarea>
          <button type="submit" style={styles.button}>Submit Request</button>
        </form>
      </div>
    </div>
  );
};

// ✅ Modern Styles (Smaller Card)
const styles = {
  pageBackground: {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",  // ✅ Dark Overlay for Readability
    padding: "30px",  // 🔽 Reduced Padding
    borderRadius: "8px", // 🔽 Reduced Border Radius
    textAlign: "center",
    width: "85%", // 🔽 Slightly Smaller Width
    maxWidth: "420px", // 🔽 Reduced Max Width
    color: "white",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // 🔽 Reduced Shadow
  },
  heading: {
    fontSize: "2rem", // 🔽 Slightly Smaller Heading
    marginBottom: "8px",
  },
  description: {
    fontSize: "1rem", // 🔽 Reduced Text Size
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px", // 🔽 Less Gap Between Inputs
  },
  input: {
    padding: "10px", // 🔽 Reduced Padding
    fontSize: "0.9rem",
    borderRadius: "4px",
    border: "none",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    fontSize: "0.9rem",
    borderRadius: "4px",
    border: "none",
    width: "100%",
    minHeight: "100px", // 🔽 Reduced Height
  },
  button: {
    padding: "10px",
    fontSize: "1rem", // 🔽 Reduced Button Size
    backgroundColor: "#ff9800",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Request;
