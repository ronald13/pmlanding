import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import './Footer.scss';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contacts" className="footer">
      <div className="footer__container">

        {/* Animated Title */}
        <h2
          ref={titleRef}
          className={`footer__title ${isVisible ? 'footer__title--visible' : ''}`}
        >
          Let's connect
        </h2>

        {/* Bottom Content */}
        <div className="footer__bottom">
          {/* Left Section */}
          <div className="footer__left">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">🟢</span>
              <span className="footer__logo-text">A.PM</span>
            </Link>

            <div className="footer__pages">
              <h3 className="footer__pages-title">PAGES</h3>
              <nav className="footer__nav">
                <a
                  href="#home"
                  className="footer__link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
                <a
                  href="/cv/Anna_Ihnatsiuk_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link footer__link--download"
                >
                  Download CV
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="footer__external-icon">
                    <path d="M12 4L4 12M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </nav>
            </div>
          </div>

          {/* Center Section */}
          <div className="footer__center">
            <a href="mailto:annaprigon@gmail.com" className="footer__email">
              annaprigon@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/hannaiihnatsiuk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-icon"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Right Section */}
          <div className="footer__right">
            <p className="footer__note">
              NOTE! All project screenshots are for illustrative purposes only and do not represent actual company documentation.
            </p>

            <p className="footer__copyright">
              © Made by Anna I. All Rights reserved
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;