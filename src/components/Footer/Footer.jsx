import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import qrcode from '../../AllComponent/Webconponents/Icons/frame.png'
import arrow from '../../AllComponent/Webconponents/Yellowarrow.svg'
import Shiga from '../../AllComponent/Webconponents/Icons/ShigaiconSVGtext.svg'
import fbnormal from '../../AllComponent/Webconponents/Icons/FacebookHovernormal.svg';
import fbhover from '../../AllComponent/Webconponents/Icons/FacebookHoveryellow.svg';
import instanormal from '../../AllComponent/Webconponents/Icons/InstagramHovernormal.svg';
import instahover from '../../AllComponent/Webconponents/Icons/InstagramHoveryellow.svg';
import linkdnormal from '../../AllComponent/Webconponents/Icons/LinkedinHovernormal.svg';
import linkdhover from '../../AllComponent/Webconponents/Icons/LinkedinHoveryellow.svg';
import tiktoknormal from '../../AllComponent/Webconponents/Icons/TikTokHovernormal.svg';
import tiktokhover from '../../AllComponent/Webconponents/Icons/TikTokHoveryellow.svg';
import twitternormal from '../../AllComponent/Webconponents/Icons/TwitterHovernormal.svg';
import twitterhover from '../../AllComponent/Webconponents/Icons/TwitterHoveryellow.svg';
import america from '../../AllComponent/Mobile component/UnitedStatesofAmerica(US).svg';
import ios from '../../AllComponent/Mobile component/IOSStore45px.svg'
import play from '../../AllComponent/Mobile component/PlayStore45px.svg'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import SocialIcon from '../SocialIcon/SocialIcon'

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <div className='footer-content-left'>
          <h1>ONE WALLET GLOBAL PAYMENT</h1>
          <div className='footer-content-img'>
            <img style={{ borderRadius: '0.6rem' }} src={qrcode} width="110rem" height="110rem" alt="" />
            <div>
              <p>Scan QR code to download the Shiga app</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className='footer-content-left-bottom'>
            <img src={Shiga} alt="" />
            <p><AiOutlineCopyrightCircle/>2022 Payshiga Technologies. All rights reserved</p>
          </div>
        </div>
        <div className='footer-content-mid'>
          <div>
            <h7>Company</h7>
            <a href="">About us</a>
            <a href="">Careers</a>
          </div>
          <div>
            <h7>Learn</h7>
            <a href="">FAQs</a>
            <a href="">Blog</a>
          </div>
          <div>
            <h7>Legal</h7>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <a href="">Terms of Use</a>
            <a href="">AML Policy</a>
          </div>
        </div>
        <div className='footer-content-right'>
          <div className='footer-content-right-top'>
            <p>Follow us on</p>
            <div className='footer-content-right-top-image-1'>
              <SocialIcon normalState={fbnormal} hoverState={fbhover} link={"https://www.facebook.com/payshiga/"} />
              <SocialIcon normalState={instanormal} hoverState={instahover} link={"https://www.instagram.com/p/CiPdVrRskZN/?igshid=YmMyMTA2M2Y%3D"} />
              <SocialIcon normalState={twitternormal} hoverState={twitterhover} link={"https://twitter.com/PayShiga?t=QViHkBiGQcL0Nc1WjFI8ow&s=09"} />
            </div>
            <div className='footer-content-right-top-image-2'>
              <SocialIcon normalState={tiktoknormal} hoverState={tiktokhover} link={"https://www.tiktok.com/@payshiga?is_from_webapp=1&sender_device=pc"} />
              <SocialIcon normalState={linkdnormal} hoverState={linkdhover} />
            </div>
            <p>Contact us</p>
            <div className='footer-content-right-mail'>
            <h3>support@payshiga.com</h3>
            </div>
          </div>
          <div className='footer-content-right-bottom'>
            <div>
              <img src={america} alt="" />
              <p>United States of America</p>
            </div>
            <p>8th The Green,Ste A.Kent,DE 19901</p>
          </div>
        </div>
      </div>
      <div className='footer-content-mob'>
        <h1>ONE WALLET GLOBAL PAYMENT</h1>
        <div className='footer-content-mob-stores'>
          <img src={ios} alt="" />
          <img src={play} alt="" />
        </div>
        <div className='footer-content-mob-menu'>
          <div>
            <p>Company</p>
            <a href="">About us</a>
            <a href="">Careers</a>
          </div>
          <div>
            <p>Learn</p>
            <a href="">FAQ's</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div>
          <p>Legal</p>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <a href="">Terms of Use</a>
          <a href="">AML Policy</a>
        </div>
        <div className='footer-content-mob-links'>
          <p>Follow us on</p>
          <div className='footer-content-mob-links-img1'>
            <SocialIcon normalState={fbnormal} hoverState={fbhover} link={"https://www.facebook.com/payshiga/"} />
            <SocialIcon normalState={instanormal} hoverState={instahover} link={"https://www.instagram.com/p/CiPdVrRskZN/?igshid=YmMyMTA2M2Y%3D"} />
            <SocialIcon normalState={twitternormal} hoverState={twitterhover} link={"https://twitter.com/PayShiga?t=QViHkBiGQcL0Nc1WjFI8ow&s=09"} />
          </div>
          <div className='footer-content-mob-links-img2'>
            <SocialIcon normalState={tiktoknormal} hoverState={tiktokhover} />
            <SocialIcon normalState={linkdnormal} hoverState={linkdhover} />
          </div>
        </div>
        <div className='footer-content-mob-contact'>
          <p>Contact us</p>
          <p style={{ color: 'white', paddingBottom: '5rem', fontSize: '1rem' }}>support@payshiga.com</p>
        </div>
        <div className="footer-content-mob-country">
          <div>
            <img src={america} alt="" />
            <p>United States of America</p>
          </div>
          <p>8th The Green,Ste A.Kent,DE 19901</p>
        </div>
        <div className='footer-content-shigalogo'>
          <img src={Shiga} alt="" />
          <p><AiOutlineCopyrightCircle /> 2022 Payshiga Technologies. All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer