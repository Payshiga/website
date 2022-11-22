import React from 'react'
import './Security.css'
import security from '../../AllComponent/Webconponents/Security.svg'
import currency from '../../AllComponent/Mobile component/Group1000003191.svg'

const Security = () => {
  return (
    <>
      <div className='security-content'>
        <div>
        <div className='security-content-text'>
          <h1>A Bank-grade security for all of your transactions.</h1>
          <p
            style={{
              fontSize: '1.01rem',
              color: 'white',
            }}>Our transactions are encrypted and protected with 256-bit AES
            bank-level encryption. This provides security between your devices and our servers, ensuring your personal
            and transaction details are always kept private</p>
          <img src={security} alt="" />
        </div>
            </div>
        <p className="ImportantText">
            Shiga by Payshiga is a financial platform, not a bank. Banking services
            provided on this platform as well as debit cards are issued by banking partners.
          </p>
      </div>
      <div className='security-content-mob'>
        <h1>A Bank-grade security for all of your transactions.</h1>
        <p> Our transactions are encrypted and protected with 256-bit AES
          bank-level encryption. This provides security between your devices and our servers, ensuring your personal
          and transaction details are always kept private</p>
        <img src={currency} alt="" />
        <p className='Important-mob-text'>Shiga by Payshiga is a financial platform, not a bank.Therefore,banking services provided on this platform, and debit cards, are issued by banking partners</p>
      </div>
    </>
  )
}

export default Security