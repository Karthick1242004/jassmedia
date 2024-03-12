import React from 'react'
import './Services.css'
import plant1 from "../Images/Slider/slider1.jpg";
import Adv from '../Images/adv.jpg';
import Pro from '../Images/pro.jpg';
import Dig from '../Images/digm.jpg';

const Services = () => {
  return (
    <>
   <div className='service-up-hr'>
    </div>
      <div className="service-header">
      <div className="service">
        <h1>Services</h1>
      </div>
      </div>
      <div className="service-outer">
        < div className="service-content1">
          <div className="service-content">
            <h1>Advertisement</h1>
            <p>Step into the realm of impactful advertising with our dedicated services. We craft compelling narratives, design visually stunning campaigns, and deploy strategic solutions that resonate. Elevate your brand with our expertise, where every ad tells a story of success.</p>
          </div>
            <img className='plant1' src={Adv} alt="plant1"/> 
        </div>
        <div className="service-content2">
        <div className="service-content">
            <h1>Promotions</h1>
            <p>Experience the power of promotions like never before. Our team specializes in creating dynamic promotional campaigns that captivate audiences and drive engagement. From exclusive deals to exciting events, we turn promotions into unforgettable experiences that leave a lasting impression on your audience.</p>
          </div>
            <img className='plant1' src={Pro} alt="plant1"/>
        </div>
        <div className="service-content3">
        <div className="service-content">
            <h1>Digital Marketing</h1>
            <p>Unlock the full potential of your brand in the digital landscape. Our comprehensive digital marketing services redefine online success. From strategic SEO and targeted social media campaigns to immersive content creation, we propel your brand to new heights in the ever-evolving digital sphere.</p>
          </div>
            <img className='plant1' src={Dig} alt="plant1"/>
        </div>
      </div>
      <div className='service-dn-hr'>
    <hr></hr>
    </div>
    </>
  )
}

export default Services
