import React from 'react'
import './CrossborderPayments.css'
import applestore from '../../AllComponent/Webconponents/IOSstorePlaypurplr.svg'
import playstore from '../../AllComponent/Webconponents/PlayStorePurple.svg'
import device from '../../AllComponent/Webconponents/2ndSlide.svg'
import currency from '../../AllComponent/Mobile component/Group1000003185.svg'

const CrossborderPayments = () => {
  return (
    <>
    <div id='download' className='cross-section'>
      <div>
        <div className='cross-section-text'>
          <h1>
            Make seamless cross-border payments
            to 190 countries on the go with zero fees.
          </h1>
          <p>Send money to anyone, anywhere, anytime, for zero fees. We offer
            the best FX rates with our lightning-speed transfers.
          </p>
        </div>
        <div className='cross-section-images'>
          <div className='cross-section-stores'>
            <a href=""><img src={applestore} alt="" /></a>
            <a href=""><img src={playstore} alt="" /></a>
          </div>
          <div className='cross-section-device'>
            <img src={device} alt="" />
          </div>
        </div>
      </div>
    </div>
      <div className='cross-content-mob'>
        <h1>Hold and manage multiple<br /> currencies in one wallet.</h1>
        <p>Recieve and hold multiple currencies accross the world. Our technology will enable you to
          convert and send in minutes. We offer a one-wallet solution that provides convenience of a modern-day migrant Neobank.</p>
        <img src={currency} alt="" />
        <p className='Important-mob-text'>Shiga by Payshiga is a financial platform, not a bank.Therefore,banking services provided on this platform, and debit cards, are issued by banking partners</p>
      </div>
    </>
  )
}

export default CrossborderPayments