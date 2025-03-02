import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo.jpeg"; // Import the logo

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Left Side: Logo & Company Name */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="Company Logo" style={styles.logo} />
        <h2 style={styles.companyName}>Mechanical Industrial Co.</h2>
      </div>

      {/* Centered Navigation Links */}
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/faq" style={styles.link}>FAQ</Link>
        <Link to="/request" style={styles.link}>Request Quote</Link>
        <Link to="/careers" style={styles.link}>Careers</Link>
        <Link to="/career-details" style={styles.link}>Career Details</Link>
        <Link to="/blogs" style={styles.link}>Blogs</Link>
      </div>
    </nav>
  );
};

// ✅ Styles for the Navbar
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#333",
    padding: "10px 20px",
    color: "white",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  companyName: {
    fontSize: "1.5rem",
    margin: 0,
  },
  navLinks: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
};

export default Navbar;
