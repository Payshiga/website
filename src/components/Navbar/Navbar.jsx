import React from 'react'
import './Navbar.css'
import Shiga from '../../AllComponent/Webconponents/Icons/ShigaiconSVGtext.svg'
import { FiUser } from 'react-icons/fi'
import { FaArrowDown } from 'react-icons/fa'
import { GoThreeBars } from 'react-icons/go'
import { ImCross } from 'react-icons/im'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [Icon, setIcon] = useState(GoThreeBars)
  const [isSideOpen, setSideOpen] = useState(false);
  const ToggleSidebar = () => {
    isSideOpen === true ? setSideOpen(false) : setSideOpen(true);
  }
  var logo;
  if (isSideOpen) {
    logo = <ImCross onClick={ToggleSidebar} />;
  }
  else {
    logo = <GoThreeBars onClick={ToggleSidebar} />;
  }
  return (
    <>
      <nav className='Navbar'>
        <div className='nav-left'>
          <img
            src={Shiga}
            alt="Shiga"
          />
        </div>
        <div className='hiddiv'>
          {logo}
        </div>
        <div className='nav-middle'>
          <a href="#"><p>Career</p></a>
          <a href="#"><p>Blog</p></a>
          <a href="#"><p>FAQ's</p></a>
        </div>
        <div className='nav-right'>
          <div className='nav-btn'>
            <FiUser style={{ marginRight: '0.4rem' }} />
            <button><p>Login</p></button>
          </div>
          <Link className='Link's to='download' smooth={true}>
            <div>
              <FaArrowDown style={{ backgroundColor: 'white', color: 'black', cursor:'pointer'}} />
              <button><h7>Download App</h7></button>
            </div>
          </Link>
        </div>
      </nav>
      <div className={`sidebar ${isSideOpen == true ? 'active' : ''}`}>
        <a href="">Career</a>
        <a href="">Blog</a>
        <a href="">FAQ's</a>
      </div>
      <div className={`sidebar-overlay ${isSideOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
    </>
  )
}

export default Navbar