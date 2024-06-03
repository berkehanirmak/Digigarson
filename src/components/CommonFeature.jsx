import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { FaCheckCircle, FaPlus, FaMinus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import Footer from './footer/Footer';
import Header from './header/Header';

const CommonFeature = (props) => {
  const { t, i18n } = useTranslation();
  const container2Ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [metrics, setMetrics] = useState({
    satisfaction: 0,
    orders: 0,
    businesses: 0,
    countries: 0
  });
  const features = [
    {
      contact: "Contact",
      adress: "Adress",
      email: "Email",
      phone: "Phone",
      links: "Links",
      link1: "Links1",
      link2: "Links2",
      link3: "Links3",
      link4: "Links4",
      important: "Important",
      important1: "Important1",
      important2: "Important2",
      important3: "Important3",
      important4: "Important4",
      newsFooter: "NewsFooter",
      news1: "News1"
    }
  ];
  const features2 = [
    {
      pages1:"Pages1",
      pages2:"Pages2",
      pages3:"Pages3",
      pages4:"Pages4",
      pages5:"Pages5",
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prevMetrics => ({
        ...prevMetrics,
        satisfaction: Math.min(prevMetrics.satisfaction + 1, 99),
        orders: Math.min(prevMetrics.orders + 1000000, 15000000),
        businesses: Math.min(prevMetrics.businesses + 10, 5000),
        countries: Math.min(prevMetrics.countries + 1, 4)
      }));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const getImage = (baseName) => {
    const lang = i18n.language;
    try {
      return require(`./images/${baseName}-${lang}.png`);
    } catch (error) {
      return require(`./images/${baseName}.png`);
    }
  };

  const handleToggle = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const scrollToContainer2 = () => {
    container2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {features2.map((feature, index) => (
        <Header key={index} {...feature} />
      ))}
      <div className="container">
        <div className="content">
          <h1>{t(props.titleKey)}</h1>
          <p>{t(props.descriptionKey)}</p>
          <button type="submit" className="btn" onClick={scrollToContainer2}>
            {t(props.buttonText)} <span className="icon">{props.buttonIcon}</span>
          </button>
          <button type="submit" className="btn" onClick={scrollToContainer2}>
            {t(props.buttonText2)} <span className="icon">{props.buttonIcon2}</span>
          </button>
        </div>
        <div className="image">
          <img src={getImage('4')} alt="Resim" />
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={getImage('4')} alt="Resim" />
        </div>
        <div className="content">
          <h1>{t(props.newAddition)}</h1>
          <p>{t(props.newAdditionP)}</p>
        </div>
      </div>
      <div className="box">
        <h2>{t(props.sectionMomenth2)}</h2>
        <h3>{t(props.sectionMomenth3)}</h3>
        <p>{t(props.sectionMomentP)}</p>
      </div>
      <div className="container">
        <div className="image">
          <img src={getImage('4')} alt="Resim" />
        </div>
        <div className="content">
          <h1>{t(props.ourTechnologiesh1)}</h1>
          <div className="technologies">
            <h3>{t(props.ourTechnologiesh3)}</h3>
            <ul>
              {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
                <li key={num}>
                  <p><FaCheckCircle /> {t(props[`ourTechnologiesliP${num}`])}</p>
                  <p>{t(props[`ourTechnologiesliP${num * 2}`])}.</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="experience">
        <h1>{t(props.experienceh1)}</h1>
        <div className="metrics-container">
          <div className="metric">
            <p>{metrics.satisfaction + "+"}</p>
            <h2>{t(props.experienceh2)}</h2>
          </div>
          <div className="metric">
            <p>{metrics.orders.toLocaleString() + "+"}</p>
            <h2>{t(props.experienceP1)}</h2>
          </div>
          <div className="metric">
            <p>{metrics.businesses + "+"}</p>
            <h2>{t(props.experienceP2)}</h2>
          </div>
          <div className="metric">
            <p>{metrics.countries + "+"}</p>
            <h2>{t(props.experienceP3)}</h2>
          </div>
        </div>
      </div>
      <div className="box">
        <h2>{t(props.customerh2)}</h2>
        <h3>{t(props.customerh3)}</h3>
        <p>{t(props.customerP)}</p>
      </div>
      <div className="our-products container">
        <div className="our-products">
          <h2>{t(props.productsh2)}</h2>
          <h1>{t(props.productsh1)}</h1>
          <p>{t(props.productsP)}</p>
        </div>
        <div className="product-images">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
            <div key={num} className="img-container">
              <img src={getImage(`p${num}`)} alt={`Product ${num}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="container2" ref={container2Ref}>
        <div className="content2">
          <h1>{t(props.newsh1)}</h1>
          <h2>{t(props.newsh2)}</h2>
          <p>{t(props.newsP)}</p>
          <div className="sendMail">
            <input type="text" placeholder='enter your Mail' />
            <button><IoMdSend /></button>
          </div>
        </div>
        <div className="image2">
          <img src={getImage('p6')} alt="Resim" />
        </div>
      </div>

      <div className="container3">
        <div className="content3">
          <ul>
            {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
              <li key={num} onClick={() => handleToggle(num - 1)} className={activeIndex === num - 1 ? 'active' : ''}>
                <span className="title">{t(props[`content${num}`])}{activeIndex === num - 1 ? <FaMinus /> : <FaPlus />}</span>
                {activeIndex === num - 1 && <p>{t(props[`content${num}P`])}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div className="image3">
          <img src={getImage('p7')} alt="Resim" />
        </div>
      </div>
      <div>
        {features.map((feature, index)=> (
          <Footer key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default CommonFeature;