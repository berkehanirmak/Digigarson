// pages/ProductsPage.jsx
import React from 'react';
import { useState, useEffect } from 'react';

import img1 from '../components/images/p1.png';
import img2 from '../components/images/p2.png';
import img3 from '../components/images/p3.png';
import img4 from '../components/images/p4.png';
import img5 from '../components/images/p5.png';
import Header from '../components/header/Header'
const ProductsPage = () => {
  const [metrics, setMetrics] = useState({
    satisfaction: 0,
    orders: 0,
    businesses: 0,
    countries: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prevMetrics => ({
        satisfaction: Math.min(prevMetrics.satisfaction + 1, 99),
        orders: Math.min(prevMetrics.orders + 1000000, 15000000),
        businesses: Math.min(prevMetrics.businesses + 10, 5000),
        countries: Math.min(prevMetrics.countries + 1, 4)
      }));
    }, 10);

    return () => clearInterval(interval);
  }, []);
  
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
      <div className="our-products container">
        <div className="our-products">
          <h2>Ürünlerimiz</h2>
          <h1>Digigarson'la İşlerinizde Keyif Ve Kolaylık Bir Arada!</h1>
          <p>Restoran ve kafe işletmecileri için tasarlanmış olan Digigarson, işletme süreçlerinizi sadeleştiriyor ve verimliliğinizi artırıyor. Siparişten yönetim panele, muhasebeden mobil uygulamalara kadar her ihtiyacınızı tek bir platformda buluşturarak işlerinizi kolaylaştırıyoruz. Müşteri memnuniyetini en üst düzeye çıkarırken, işletme sahiplerinin yaşayacağı rahatlığı ve kolaylığı ilk sıraya koyduk. Digigarson ile işletmenizin her köşesinde, hem sizin hem de müşterilerinizin yanındayız. Şimdi siz de bu keyifli ve kolay deneyimi yaşayın!</p>
        </div>
        <div className="product-images">
          <div className="img-container">
            <img src={img1} alt="Product 1" />
          </div>
          <div className="img-container">
            <img src={img2} alt="Product 2" />
          </div>
          <div className="img-container">
            <img src={img3} alt="Product 3" />
          </div>
          <div className="img-container">
            <img src={img4} alt="Product 4" />
          </div>
          <div className="img-container">
            <img src={img5} alt="Product 5" />
          </div>
        </div>
      </div>
      <div className="experience">
        <h1>Tecrübelerimiz</h1>
        <div className="metrics-container">
          <div className="metric">
            <p>{metrics.satisfaction + "+"}</p>
            <h2>Memnuniyet</h2>
          </div>
          <div className="metric">
            <p>{metrics.orders.toLocaleString() + "+"}</p>
            <h2>Sipariş</h2>
          </div>
          <div className="metric">
            <p>{metrics.businesses + "+"}</p>
            <h2>İşletme</h2>
          </div>
          <div className="metric">
            <p>{metrics.countries + "+"}</p>
            <h2>Ülke</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
