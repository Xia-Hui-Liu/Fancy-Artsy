import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <div className="about">
        <h2>About Us</h2>
        <h5>A Trusted Partner in Chemical Adhesives</h5>
        <p>
          Founded in 1998, FANCY ARTSY is a leading chemical adhesive company with a focus on quality and innovation. With an annual production capacity of over 30,000 tons and a commitment to growth, we have the resources to meet the demands of our customers. Our products undergo rigorous testing and are certified by ISO9001: 2000 quality management system and SGS, RoHS environmental reports.

          At ZDSResin, we understand the importance of customization and are dedicated to providing tailored solutions to meet the specific needs of our customers. Whether it's through our OEM/ODM services or by developing custom products, we are here to help.

          Our corporate vision is to make professional-grade products accessible to everyone, while our business philosophy is centered around delivering superior quality and innovative solutions.

          Join us in our mission to provide the best in chemical adhesives. Contact us today to learn more.
        </p>
      </div>
      <footer className="footer">
        <h3>Follow Us</h3>
        <div className="social-media">
          <a href="https://www.facebook.com/">
            <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" />
          </a>
          <a href="https://twitter.com/">
            <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter" />
          </a>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
        </div>
        <p>© 2023 Fancy Artsy. All rights reserved.</p>
      </footer>
    </div>
  );
  } 
export default AboutUs;  