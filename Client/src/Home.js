import { React,useState,useEffect }from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Ho from './Home.module.css';
import { Link, Element, animateScroll as scroll, scroller } from 'react-scroll';
import Logo from './Images/jass media.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Paper1 from './Images/ilovepdf_pages-to-jpg/karaikudi news 04-March-2024_page-0001.jpg'
import Paper2 from './Images/ilovepdf_pages-to-jpg/karaikudi news 04-March-2024_page-0002.jpg'
import Paper3 from './Images/ilovepdf_pages-to-jpg/karaikudi news 04-March-2024_page-0003.jpg'
import Paper4 from './Images/ilovepdf_pages-to-jpg/karaikudi news 04-March-2024_page-0004.jpg'
import Paper5 from './Images/ilovepdf_pages-to-jpg/karaikudi news 04-March-2024_page-0005.jpg'
import I1 from './Images/clint logo/i1.png';
import I2 from './Images/clint logo/i2.png';
import I3 from './Images/clint logo/i3.png';
import I4 from './Images/clint logo/i4.png';
import I5 from './Images/clint logo/i5.png';
import I6 from './Images/clint logo/i6.png';
import I7 from './Images/clint logo/i7.png';
import I8 from './Images/clint logo/i8.png';
import I9 from './Images/clint logo/i9.png';
import I10 from './Images/clint logo/i10.png';
import I11 from './Images/clint logo/i11.png';
import I12 from './Images/clint logo/i12.png';
import I13 from './Images/clint logo/i13.png';
import I14 from './Images/clint logo/i14.png';
import I15 from './Images/clint logo/i15.png';
import I16 from './Images/clint logo/i16.png';
import I17 from './Images/clint logo/i17.png';
import I18 from './Images/clint logo/i18.png';
import I19 from './Images/clint logo/i19.png';
import I20 from './Images/clint logo/i20.png';
import I21 from './Images/clint logo/i21.png';
import I22 from './Images/clint logo/i22.png';
import I23 from './Images/clint logo/i23.png';
import I24 from './Images/clint logo/i24.png';
import I25 from './Images/clint logo/i25.png';
import I26 from './Images/clint logo/i26.png';
import I27 from './Images/clint logo/i27.png';
import I28 from './Images/clint logo/i28.png';
import I29 from './Images/clint logo/i29.png';
import I30 from './Images/clint logo/i30.png';
import I31 from './Images/clint logo/i31.png';
import I32 from './Images/clint logo/i32.png';
import I33 from './Images/clint logo/i33.png';
import I34 from './Images/clint logo/i34.png';
import I35 from './Images/clint logo/i35.png';
import I36 from './Images/clint logo/i36.png';
import I37 from './Images/clint logo/i37.png';
import I38 from './Images/clint logo/i38.png';
import I39 from './Images/clint logo/i39.png';
import I40 from './Images/clint logo/i40.png';
import I41 from './Images/clint logo/i41.png';
import I42 from './Images/clint logo/i42.png';
import I43 from './Images/clint logo/i43.png';
import I44 from './Images/clint logo/i44.png';
import I45 from './Images/clint logo/i45.png';
import I46 from './Images/clint logo/i46.png';
import I47 from './Images/clint logo/i47.png';
import I48 from './Images/clint logo/i48.png';
import I49 from './Images/clint logo/i49.png';
import I50 from './Images/clint logo/i50.png';
import Contactus from './components/Contactus';
import Swiper from './components/Swiper';
import Services from './components/Services';
import Copyright from './components/Copyright';
import Channels from './components/Channels';
import Client from './Images/IMG-20240307-WA0099.jpg';

const Home = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [mobileView, setMobileView] = useState(false);
 
  const handleToggleNav = () => {
    if (mobileView) {
      setShowNavLinks(!showNavLinks);
    }
  };

  const checkScreenSize = () => {
    setMobileView(window.innerWidth <= 750);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div className={Ho.navbar} data-aos="fade-right" data-aos-delay="500">
         <div className={Ho.header}>
             <img src={Logo} alt='Logo' className={Ho.logo}/>
             <h1>JASS  <span1>MEDIA</span1></h1>
             <button className={Ho.navicon} onClick={handleToggleNav}>
               <FontAwesomeIcon icon={faBars} />
             </button>
         </div><br/>
         <div   className={`${Ho.navlinks} ${mobileView ? 'flex-column' : 'none'}`}smooth={true} duration={800}  style={{ display: showNavLinks || !mobileView ? 'flex' : 'none' }} >
             <Link to='#' smooth={true} duration={800} className={Ho.nav}>Home</Link>
             <Link to='channel' smooth={true} duration={800} className={Ho.nav}>Our Channel</Link>
             <Link to='services' smooth={true} duration={1000} className={Ho.nav}>Services</Link>
             <Link to='contact' smooth={true} duration={1200} className={Ho.nav}>Contact Us</Link>
         </div>
      </div>
      <hr className={Ho.hr1}/>
      <div className={Ho.epaper} data-aos="fade-right" data-aos-delay="500">
           <div className={Ho.epaper1}>
             <h1>JASS <span1>MEDIA</span1></h1>
             <h2>E-PAPER </h2>
             <p>Jass media is one the popular digital marketing agency in South Tamilnadu located in Karaikudi. It runs latest <span2>Karaikudi</span2> news, latest <span2>Thirupathur</span2> news and latest <span2>Sivagangai</span2> news.</p>
           </div>
           <div className={Ho.papercut}>
              <img className={Ho.paper1} src={Paper1} alt='Paper 1'/>
              <img className={Ho.paper1} src={Paper2} alt='Paper 2'/>
              <img className={Ho.paper1} src={Paper3} alt='Paper 3'/>
              <img className={Ho.paper1} src={Paper4} alt='Paper 4'/>
              <img className={Ho.paper1} src={Paper5} alt='Paper 5'/>
           </div>
      </div>
      <div className={Ho.slider} data-aos="fade-right" data-aos-delay="500">
        <Swiper/>
      </div>
      <div id='channel' className={Ho.chan} data-aos="fade-right" data-aos-delay="500">
        <Channels />
      </div>
      <div className={Ho.services} id='services' data-aos="fade-right" data-aos-delay="500">
          <Services />
        </div>
        <div className={Ho.clnimg}>
           <img src={Client} alt='Image' className={Ho.cln}/>
        </div>
      <div className={Ho.clients} data-aos="fade-right" data-aos-delay="500">
        <div className={Ho.clientheader}>
          <h1>Our Clients</h1>
          <p>At the heart of our success lies a collaborative journey with our valued clients. We partner with forward-thinking companies, crafting tailored media and advertising solutions that resonate with their vision. Together, we achieve milestones, tell compelling stories, and redefine success in the ever-evolving world of media.</p>
        </div>
        
        <div className={Ho.clientlogo} >
        {/* data-aos="fade-right" data-aos-delay="500" */}
          <div className={Ho.top25}>
             <img src={I8} alt='Logo' className={Ho.logo8}/>
             <img src={I9} alt='Logo' className={Ho.logo9}/>
             <img src={I10} alt='Logo' className={Ho.logo10}/>
             <img src={I11} alt='Logo' className={Ho.logo11}/>
             <img src={I12} alt='Logo' className={Ho.logo12}/>
             <img src={I13} alt='Logo' className={Ho.logo13}/>
             <img src={I14} alt='Logo' className={Ho.logo14}/>
             <img src={I15} alt='Logo' className={Ho.logo15}/>
             <img src={I16} alt='Logo' className={Ho.logo16}/>
             <img src={I17} alt='Logo' className={Ho.logo17}/>
             <img src={I18} alt='Logo' className={Ho.logo18}/>
             <img src={I19} alt='Logo' className={Ho.logo19}/>
             <img src={I20} alt='Logo' className={Ho.logo20}/>
             <img src={I21} alt='Logo' className={Ho.logo21}/>
             <img src={I22} alt='Logo' className={Ho.logo22}/>
             <img src={I23} alt='Logo' className={Ho.logo23}/>
             <img src={I24} alt='Logo' className={Ho.logo24}/>
             <img src={I25} alt='Logo' className={Ho.logo25}/>
             <img src={I1} alt='Logo' className={Ho.logo1}/>
             <img src={I2} alt='Logo' className={Ho.logo2}/>
             <img src={I3} alt='Logo' className={Ho.logo3}/>
             <img src={I4} alt='Logo' className={Ho.logo4}/>
             <img src={I5} alt='Logo' className={Ho.logo5}/>
             <img src={I6} alt='Logo' className={Ho.logo6}/>
             <img src={I7} alt='Logo' className={Ho.logo7}/>
          </div>
          <div className={Ho.bottom25}>
             <img src={I50} alt='Logo' className={Ho.logo26}/>
             <img src={I26} alt='Logo' className={Ho.logo27}/>
             <img src={I27} alt='Logo' className={Ho.logo28}/>
             <img src={I28} alt='Logo' className={Ho.logo29}/>
             <img src={I29} alt='Logo' className={Ho.logo30}/>
             <img src={I30} alt='Logo' className={Ho.logo31}/>
             <img src={I31} alt='Logo' className={Ho.logo32}/>
             <img src={I32} alt='Logo' className={Ho.logo33}/>
             <img src={I33} alt='Logo' className={Ho.logo34}/>
             <img src={I34} alt='Logo' className={Ho.logo35}/>
             <img src={I35} alt='Logo' className={Ho.logo36}/>
             <img src={I36} alt='Logo' className={Ho.logo37}/>
             <img src={I37} alt='Logo' className={Ho.logo38}/>
             <img src={I38} alt='Logo' className={Ho.logo39}/>
             <img src={I39} alt='Logo' className={Ho.logo40}/>
             <img src={I40} alt='Logo' className={Ho.logo41}/>
             <img src={I41} alt='Logo' className={Ho.logo42}/>
             <img src={I42} alt='Logo' className={Ho.logo43}/>
             <img src={I43} alt='Logo' className={Ho.logo44}/>
             <img src={I44} alt='Logo' className={Ho.logo45}/>
             <img src={I45} alt='Logo' className={Ho.logo46}/>
             <img src={I46} alt='Logo' className={Ho.logo47}/>
             <img src={I47} alt='Logo' className={Ho.logo48}/>
             <img src={I48} alt='Logo' className={Ho.logo49}/>
             <img src={I49} alt='Logo' className={Ho.logo50}/>
          </div>
        </div>
      </div>
      <div className={Ho.contactus1} id='contact' data-aos="fade-right" data-aos-delay="500">
        <Contactus />
        <Copyright/>
      </div>
    </div>
  )
}

export default Home;