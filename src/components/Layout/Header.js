import React from 'react';
import { Link } from 'gatsby';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Header.scss';

const Header = () => {
  const activeSection = useActiveSection(['home', 'case-study', 'projects', 'contacts']);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">🟢</span>
          <span className="header__logo-text">A.PM</span>
        </Link>

        <nav className="header__nav">
          <a
            href="#home"
            className={`header__nav-link ${activeSection === 'home' ? 'header__nav-link--active' : ''}`}
            onClick={(e) => scrollToSection(e, 'home')}
          >
            Home
          </a>
          <a
            href="#case-study"
            className={`header__nav-link ${activeSection === 'case-study' ? 'header__nav-link--active' : ''}`}
            onClick={(e) => scrollToSection(e, 'case-study')}
          >
            Case Study
          </a>
          <a
            href="#projects"
            className={`header__nav-link ${activeSection === 'projects' ? 'header__nav-link--active' : ''}`}
            onClick={(e) => scrollToSection(e, 'projects')}
          >
            Results
          </a>
          <a
            href="#contacts"
            className={`header__nav-link ${activeSection === 'contacts' ? 'header__nav-link--active' : ''}`}
            onClick={(e) => scrollToSection(e, 'contacts')}
          >
            Contacts
          </a>

          {/* Download CV как пункт меню */}
          <a
            href="/cv/Anna_Ihnatsiuk_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header__nav-link header__nav-link--download"
          >
            Download CV
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="header__external-icon">
              <path d="M12 4L4 12M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>

        <a
          href="#contacts"
          className="header__contact-btn"
          onClick={(e) => scrollToSection(e, 'contacts')}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Header;