import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company Info */}
        <div style={styles.section}>
          <h3>Mechanical Industrial Co.</h3>
          <p>123 Industrial Road, City, Country</p>
          <p>📞 +123 456 7890</p>
          <p>✉️ info@mechanicalco.com</p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/services" style={styles.link}>Services</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div style={styles.section}>
          <h3>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon}>🔗 Facebook</a>
            <a href="#" style={styles.icon}>🔗 Twitter</a>
            <a href="#" style={styles.icon}>🔗 LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>© 2025 Mechanical Industrial Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// ✅ Modern Footer Styles
const styles = {
  footer: {
    background: "#333",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "20px",
  },
  section: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "block",
    marginBottom: "5px",
  },
  socialIcons: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  icon: {
    color: "white",
    textDecoration: "none",
  },
  copyright: {
    marginTop: "10px",
    fontSize: "0.9rem",
    borderTop: "1px solid #555",
    paddingTop: "10px",
  },
};

export default Footer;
