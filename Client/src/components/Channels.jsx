import React from 'react';
import './Channels.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faSquareInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons";
import Template from '../Images/post- karikudi teplet copy.jpg'

function Channels() {
  return (
    <div className='chane'>
        <div className='channelheader'>
            <h1>Our Channels  <FontAwesomeIcon icon={faComputer} className='icon121'/></h1>
        </div>
        <div className='channel'>
          <div className='img'>
          <img src={Template} alt='Template Image' className='templateimage'/>
          </div>
          <div className='channel1'>
            <div className='channel11'>
              <h1>Karaikudi News Channel</h1>
              <p>Dive into the soul of Karaikudi with our dedicated channel. We bring you the heartbeat of this vibrant village - from local happenings to cultural celebrations. Karaikudi Channel, where community stories come alive.</p>
              <div className='chicon'>
                 <a href='https://www.facebook.com/chennaijassmedia?mibextid=ZbWKwL'><FontAwesomeIcon icon={faFacebook} className='icon12'/></a>
                 <a href='https://www.instagram.com/karaikudinews?igsh=eHE3cHQ0dXoxcDNt'><FontAwesomeIcon icon={faSquareInstagram} className='icon12'/></a>
                 <a href='https://youtube.com/@karaikudinews61?si=LUp2cZ-SKB-owtIZ'><FontAwesomeIcon icon={faYoutube} className='icon12'/></a>
              </div>
              <h4>Live Channel</h4>
            </div>
            <div className='channel12'>
              <h1>Thirupattur News Channel</h1>
              <p>Experience the spirit of Tirupattur through our exclusive channel. Uncover the news that shapes this village, from grassroots initiatives to impactful events. Tirupattur Channel, your source for the pulse of the community.</p>
              <div className='chicon'>
              <a href='https://www.facebook.com/jassmediachennai?mibextid=ZbWKwL'><FontAwesomeIcon icon={faFacebook} className='icon12'/></a>
                 <a href='https://www.instagram.com/thiruppathurnews?igsh=MWd4Y2F0bHVteWZt'><FontAwesomeIcon icon={faSquareInstagram} className='icon12'/></a>
                 <a href='https://youtube.com/@thiruppathurnews1724?si=XHyTW5UveKivstUB'><FontAwesomeIcon icon={faYoutube} className='icon12'/></a>
              </div>
              <h4>Live Channel</h4>
            </div>
            <div className='channel13'>
              <h1>Sivagangai News Channel</h1>
              <p>Connect with the heartland of Sivakangai through our channel's lens. We telecast the essence of village life - from daily anecdotes to significant milestones. Sivakangai Channel, where every story is a celebration of community.</p>
              <div className='chicon'>
              <a href='https://www.facebook.com/profile.php?id=100063651747245&mibextid=ZbWKwL'><FontAwesomeIcon icon={faFacebook} className='icon12'/></a>
                 <a href='https://www.instagram.com/sivagangainews?igsh=Ynhna2pqMzBuanF4'><FontAwesomeIcon icon={faSquareInstagram} className='icon12'/></a>
                 <a href='https://youtube.com/@sivagangainews6997?si=_-2V0nTuaK50wN_7'><FontAwesomeIcon icon={faYoutube} className='icon12'/></a>
              </div>
              <h4>Live Channel</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Channels