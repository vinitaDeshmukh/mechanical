import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import HomePage from "./Components/Pages/HomePage.jsx";
import Contact from "./Components/Pages/ContactUs.jsx";
import FAQ from "./Components/Pages/FAQ.jsx";
import RequestQuote from "./Components/Pages/Request.jsx";
import Careers from "./Components/Pages/Careers.jsx";
import CareerDetails from "./Components/Pages/CareersDetails.jsx";
import Blogs from "./Components/Pages/Blogs.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/request" element={<RequestQuote />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career-details" element={<CareerDetails />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
