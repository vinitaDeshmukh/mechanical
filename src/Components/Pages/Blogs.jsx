import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogBackground from "../Images/Blogs.jpg";

const Blogs = () => {
  const navigate = useNavigate();
  const [expandedBlog, setExpandedBlog] = useState(null);

  const handleReadMore = (blogId) => {
    setExpandedBlog(blogId);
  };

  return (
    <div style={{ ...styles.pageContainer, backgroundImage: `url(${blogBackground})` }}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.heading}>📝 Our Latest Blogs</h1>
          <p style={styles.description}>Stay updated with the latest trends in the mechanical industry.</p>
          <div style={styles.blogList}>
            {expandedBlog === null && (
              <>
                <div style={styles.blogCard}>
                  <h2>⚙️ 5 Ways to Improve Industrial Efficiency</h2>
                  <p>Discover innovative solutions to enhance your mechanical operations.</p>
                  <button style={styles.readMore} onClick={() => handleReadMore(1)}>Read More</button>
                </div>
                <div style={styles.blogCard}>
                  <h2>🤖 How Automation is Changing Manufacturing</h2>
                  <p>Learn about the latest automation trends in industrial processes.</p>
                  <button style={styles.readMore} onClick={() => handleReadMore(2)}>Read More</button>
                </div>
              </>
            )}
            {expandedBlog !== null && (
              <div style={styles.expandedBlogCard}>
                <h2>{expandedBlog === 1 ? "⚙️ 5 Ways to Improve Industrial Efficiency" : "🤖 How Automation is Changing Manufacturing"}</h2>
                <div style={styles.expandedContent}>
                  {expandedBlog === 1 ? (
                    <p>Efficiency is key to reducing costs and maximizing productivity. Upgrading machinery can significantly boost efficiency. Implementing automation minimizes human errors and speeds up processes. Regular maintenance prevents unexpected breakdowns. Employee training enhances skill levels and improves output quality. Monitoring performance data helps in optimizing workflows. Energy-saving technologies reduce operational costs. Adopting lean manufacturing techniques cuts waste. Collaboration between departments fosters innovation.</p>
                  ) : (
                    <p>Automation reduces reliance on manual labor and increases accuracy. Robotic systems can work 24/7 without fatigue. AI-driven analytics improve decision-making in production. Smart factories utilize IoT for real-time monitoring. Automated quality control ensures defect-free products. Digital twins help simulate manufacturing processes for efficiency. Collaborative robots (cobots) assist human workers in tasks. Supply chain automation optimizes inventory and logistics. Machine learning predicts equipment failures before they occur.</p>
                  )}
                </div>
                <button style={styles.readMore} onClick={() => setExpandedBlog(null)}>Back</button>
              </div>
            )}
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
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
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
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "900px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  blogList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  blogCard: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    color: "black",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
    maxWidth: "400px",
  },
  expandedBlogCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    color: "black",
    textAlign: "center",
    maxWidth: "800px",
    margin: "auto",
  },
  expandedContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
  },
  readMore: {
    marginTop: "10px",
    padding: "8px 15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default Blogs;