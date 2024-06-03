// pages/ContactPage.jsx
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import CommonFeature from '../components/CommonFeature';
import Header from '../components/header/Header'

const ContactPage = () => {

  const features = [
    {
      titleKey: 'ContactPageTitle',
      descriptionKey: 'ContactPageDescription',
      buttonText: 'ContactPageButtonText',
      buttonText2: 'ContactPageButtonText2',
      buttonIcon: <FaArrowRight />,
      buttonIcon2: <MdContactMail />,
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
  return (
    <div>
      <div>
        {features2.map((feature, index) => (
          <Header key={index} {...feature} />
        ))}
      </div>
      {features.map((feature, index) => (
        <CommonFeature key={index} {...feature} />
      ))}
    </div>
  );
};

export default ContactPage;
