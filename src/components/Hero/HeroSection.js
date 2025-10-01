import React from 'react';
import { heroData } from '../../data/hero';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__container">

        {/* Left Content */}
        <div className="hero__content">
          {/* Tags */}
          <div className="hero__tags">
            {heroData.tags.map((tag, index) => (
              <React.Fragment key={index}>
                <span className="hero__tag">{tag}</span>
                {index < heroData.tags.length - 1 && <span className="hero__separator">|</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Name & Title */}
          <h1 className="hero__name">{heroData.name}</h1>
          <h2 className="hero__title">{heroData.title}</h2>

          {/* Description */}
          <p className="hero__description">{heroData.description}</p>

          {/* Contact Info */}
          <div className="hero__contacts">
            {heroData.contacts.map((contact, index) => (
              <div key={index} className="hero__contact">
                <div className={`hero__contact-icon hero__contact-icon--${contact.icon}`}>
                  {contact.icon === 'location' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2"/>
                      <path d="M12 22C12 22 20 16 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16 12 22 12 22Z" stroke="white" strokeWidth="2"/>
                    </svg>
                  )}
                  {contact.icon === 'linkedin' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {contact.icon === 'email' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2"/>
                      <path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="2"/>
                    </svg>
                  )}
                </div>
                {contact.link ? (
                  <a href={contact.link} className="hero__contact-text" target="_blank" rel="noopener noreferrer">
                    {contact.text}
                  </a>
                ) : (
                  <span className="hero__contact-text">{contact.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="hero__visual">
          <img src="/home_img.svg" alt="Project Management Infographic" className="hero__image" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;