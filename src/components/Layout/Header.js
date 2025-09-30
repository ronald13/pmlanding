import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">🟢</span>
          <span className="header__logo-text">A.PM</span>
        </Link>

        <nav className="header__nav">
          <Link to="/" className="header__nav-link" activeClassName="header__nav-link--active">
            Home
          </Link>
          <Link to="/case-study" className="header__nav-link" activeClassName="header__nav-link--active">
            Case Study
          </Link>
          <Link to="/results" className="header__nav-link" activeClassName="header__nav-link--active">
            Results
          </Link>
          <Link to="/contacts" className="header__nav-link" activeClassName="header__nav-link--active">
            Contacts
          </Link>
        </nav>

        <Link to="/contacts" className="header__contact-btn">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;