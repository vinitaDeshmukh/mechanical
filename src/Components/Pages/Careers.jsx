import React from "react";
import careerBackground from "../Images/Carrer.jpg";

const Careers = () => {
  return (
    <div style={{ ...styles.pageContainer, backgroundImage: `url(${careerBackground})` }}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.heading}>Join Our Team</h1>
          <p style={styles.description}>
            We are looking for talented individuals to be part of our growing mechanical industry.
          </p>
          <ul style={styles.jobList}>
            <li style={styles.jobItem}>⚙️ Mechanical Engineer</li>
            <li style={styles.jobItem}>🔧 Industrial Technician</li>
            <li style={styles.jobItem}>✅ Quality Control Specialist</li>
            <li style={styles.jobItem}>🏭 Production Manager</li>
          </ul>
          <p style={styles.applyText}>
            Visit our <a href="/career-details" style={styles.link}>Career Details</a> page for more info.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    textAlign: "center",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: "40px",
    borderRadius: "12px",
    maxWidth: "650px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    color: "black",
  },
  heading: {
    fontSize: "2.8rem",
    marginBottom: "20px",
    fontWeight: "bold",
    textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
  },
  description: {
    fontSize: "1.3rem",
    marginBottom: "25px",
    color: "black",
  },
  jobList: {
    listStyle: "none",
    padding: 0,
    fontSize: "1.3rem",
    marginBottom: "25px",
    color: "black",
  },
  jobItem: {
    padding: "12px 0",
    fontWeight: "600",
    textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
    color: "black",
  },
  applyText: {
    fontSize: "1.1rem",
    color: "black",
  },
  link: {
    color: "#FFD700",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Careers;
