import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  const BackToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="Footer">
      <div className="Footer-top">
        <hr />
        <div className="goToSignIN">
          <p className="title-section-top">See personalized recommendations</p>
          <Link to="/login" className="Links">
            Sign in
          </Link>
          <p className="SignIn-link">
            New customer ?<Link to="SignIn">start here .</Link>
          </p>
        </div>
        <hr />
      </div>

      <button className="Back-btn" onClick={BackToTop}>
        Back to top
      </button>
      <div className="Footer-content">
        <div>
          <h3>Get to Know Us</h3>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Science</p>
        </div>
        <div>
          <h3>Make Money with Us</h3>
          <p>Sell products on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
          <p>›See More Make Money with Us</p>
        </div>
        <div>
          <h3>Amazon Payment Products</h3>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div>
          <h3>Let Us Help You</h3>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
