import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTranslation } from "react-i18next";

const Header = ({pages1,pages2,pages3,pages4,pages5}) => {

  const [scrollPos, setScrollPos] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let headerClasses = 'header';
  if (scrollPos < -10) {
    headerClasses += ' scroll-up';
  } else {
    headerClasses += ' scroll-down';
  }
  return (
    <header className={headerClasses}>
      <div className="logo">
        <h1>Digigarson.com</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">{t(pages1)}<span></span></Link></li>
          <li><Link to="/urunlerimiz">{t(pages2)}<span></span></Link></li>
          <li><Link to="/blog">{t(pages3)}<span></span></Link></li>
          <li><Link to="/iletisim">{t(pages4)}<span></span></Link></li>
          <li><Link to="/hakkimizda">{t(pages5)}<span></span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
