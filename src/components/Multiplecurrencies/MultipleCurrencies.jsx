import React from 'react'
import './MultipleCurrencies.css'
import Holdandmanage from '../../AllComponent/Webconponents/Holdandmanage.svg'
import currency from '../../AllComponent/Mobile component/Group1000003173.svg'

const MultipleCurrencies = () => {
  return (
    <>
      <div className='currency-content'>
        <div>
        <div className='currency-content-text'>
          <h1>
            Hold and manage multiple currencies in one wallet.
          </h1>
          <p>
            Recieve and hold multiple currencies across the world. Our unique technology
            wiil enable you to convert and send in minutes. We offer a one-wallet solution that provides
            the conveniece of a modern-day migrant Neobank.
          </p>
        </div>
          <img className='holdimage' src={Holdandmanage} alt="" />
        </div>
          <p className="ImportantText">
            Shiga by Payshiga is a financial platform, not a bank. Banking services
            provided on this platform as well as debit cards are issued by banking partners.
          </p>
      </div>
    </>
  )
}

export default MultipleCurrencies