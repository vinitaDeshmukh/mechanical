import React from "react";
import careerBackground from "../Images/CarrerD.jpg";

const CareersDetails = () => {
  return (
    <div style={{ ...styles.pageContainer, backgroundImage: `url(${careerBackground})` }}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.heading}>🚀 Join Our Team</h1>
          <p style={styles.description}>
            Unlock exciting career growth opportunities in the mechanical industry. Be part of innovation!
          </p>
          <div style={styles.jobListContainer}>
            <div style={styles.jobRow}>
              <div style={styles.jobCard}>
                <h3>⚙️ Mechanical Engineer</h3>
                <p>Design and develop cutting-edge industrial equipment.</p>
                <p><strong>Requirements:</strong> B.Tech in Mechanical Engineering, 2+ years experience.</p>
                <button style={styles.applyButton}>Apply Now</button>
              </div>
              <div style={styles.jobCard}>
                <h3>🔧 Industrial Technician</h3>
                <p>Operate and maintain advanced machinery.</p>
                <p><strong>Requirements:</strong> Diploma in Industrial Technology, 1+ year experience.</p>
                <button style={styles.applyButton}>Apply Now</button>
              </div>
            </div>
            <div style={styles.jobRow}>
              <div style={styles.jobCard}>
                <h3>✅ Quality Control Specialist</h3>
                <p>Ensure excellence in production standards.</p>
                <p><strong>Requirements:</strong> Degree in Quality Management, 3+ years experience.</p>
                <button style={styles.applyButton}>Apply Now</button>
              </div>
              <div style={styles.jobCard}>
                <h3>🏭 Production Manager</h3>
                <p>Supervise and optimize manufacturing processes.</p>
                <p><strong>Requirements:</strong> Bachelor's degree in Production Management, 5+ years experience.</p>
                <button style={styles.applyButton}>Apply Now</button>
              </div>
            </div>
          </div>
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
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    textAlign: "center",
    position: "relative",
    padding: "60px 10px 10px 10px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 10px 10px 10px",
  },
  content: {
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "700px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(8px)",
    color: "black",
    width: "100%",
  },
  heading: {
    fontSize: "1.6rem",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: "0.85rem",
    marginBottom: "12px",
    color: "black",
  },
  jobListContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    justifyContent: "center",
    marginBottom: "10px",
  },
  jobRow: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
  },
  jobCard: {
    backgroundColor: "#fff",
    padding: "6px",
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    color: "black",
    textAlign: "left",
    transition: "transform 0.2s ease-in-out",
    maxWidth: "48%",
    flex: "1",
  },
  applyButton: {
    marginTop: "4px",
    padding: "3px 5px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background 0.3s",
    fontSize: "0.7rem",
  },
  applyButtonHover: {
    backgroundColor: "#0056b3",
  }
};

export default CareersDetails;
