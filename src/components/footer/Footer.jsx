import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Footer =({contact,adress,email,phone,links,link1,link2,link3,link4,important,important1,important2,important3,important4,newsFooter,news1}) => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>{t(contact)}</h3>
          <p>{t(adress)}</p>
          <p>{t(email)}</p>
          <p>{t(phone)}</p>
        </div>

        <div className="footer-column">
          <h3>{t(links)}</h3>
          <ul>
            <li><a href="#home">{t(link1)}</a></li>
            <li><a href="#about">{t(link2)}</a></li>
            <li><a href="#services">{t(link3)}</a></li>
            <li><a href="#contact">{t(link4)}</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>{t(important)}</h3>
          <ul>
            <li><a href="#privacy">{t(important1)}</a></li>
            <li><a href="#terms">{t(important2)}</a></li>
            <li><a href="#faq">{t(important3)}</a></li>
            <li><a href="#support">{t(important4)}</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>{t(newsFooter)}</h3>
          <p>{t(news1)}</p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
