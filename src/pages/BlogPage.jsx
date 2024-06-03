import React, { useState, useEffect, useCallback } from 'react';
import './HomePage.css';
import {FaArrowUp, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import CommonFeature from '../components/CommonFeature';
const BlogPage = () => {


  const features = [
    {
      titleKey: 'HomePageTitle',
      descriptionKey: 'HomePageDescription',
      buttonText: 'HomePageButtonText',
      buttonText2: 'HomePageButtonText2',
      buttonIcon: <FaArrowRight />,
      buttonIcon2: <MdContactMail />,
      newAddition: 'NewAddition',
      newAdditionP: 'NewAdditionP',
      sectionMomenth2:'SectionMomenth2',
      sectionMomenth3:'SectionMomenth3',
      sectionMomentP:'SectionMomentP',
      ourTechnologiesh1:'OurTechnologiesh1',
      ourTechnologiesh3:'OurTechnologiesh3',
      ourTechnologiesliP:'OurTechnologiesliP',
      ourTechnologiesliP2:'OurTechnologiesliP2',
      ourTechnologiesliP3:'OurTechnologiesliP3',
      ourTechnologiesliP4:'OurTechnologiesliP4',
      ourTechnologiesliP5:'OurTechnologiesliP5',
      ourTechnologiesliP6:'OurTechnologiesliP6',
      ourTechnologiesliP7:'OurTechnologiesliP7',
      ourTechnologiesliP8:'OurTechnologiesliP8',
      experienceh1:'Experienceh1',
      experienceh2:'Experienceh2',
      experienceP1:'ExperienceP1',
      experienceP2:'ExperienceP2',
      experienceP3:'ExperienceP3',
      customerh2:"Customerh2",
      customerh3:"Customerh3",
      customerP:"CustomerP",
      productsh2:"Productsh2",
      productsh1:"Productsh1",
      productsP:"ProductsP",
      newsh1:"Newsh1",
      newsh2:"Newsh2",
      newsP:"NewsP",
      content1:"Content1",
      content1P:"Content1P",
      content2:"Content2",
      content2P:"Content2P",
      content3:"Content3",
      content3P:"Content3P",
      content4:"Content4",
      content4P:"Content4P",


    }
  ];
 
  
  


  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (window.pageYOffset > 400 && !showScroll) {
      setShowScroll(true);
    } else if (window.pageYOffset <= 400 && showScroll) {
      setShowScroll(false);
    }
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  return (
    <div>
      <div>
        {features.map((feature, index) => (
          <CommonFeature key={index} {...feature} />
        ))}
      </div>
     
      <button className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
        <FaArrowUp />
      </button>
      <a
        href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=Merhaba, destek almak istiyorum."
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default BlogPage;
