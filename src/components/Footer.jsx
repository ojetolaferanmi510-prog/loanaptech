import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="footer-logo" to="/">LoanAptech</Link>
          <p>Smart solutions for fast loans and financial services.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/loans">Loan Products</Link>
          <Link to="/signup">Apply Now</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of service</Link>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <a href="mailto:support@loanaptech.com">support@loanaptech.com</a>
          <a href="tel:+2341234567890">+234 123 456 7890</a>
          <span>16, east street, 2nd ave, USA</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} LoanAptech. All rights reserved.</p>
        <p>Licensed by Relevant Financial Authorities</p>
      </div>
    </footer>
  );
}

export default Footer;