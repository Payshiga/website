import React from 'react'
import './Paymentandrelocation.css'
import relocation from '../../AllComponent/Webconponents/Relocation.svg'
import currency from '../../AllComponent/Mobile component/Group1000003173.svg'
const Paymentandrelocation = () => {
  return (
    <>
    <div className='payment-content'>
      <div>
        <div className='payment-content-text'>
        <h1>Make payment and other relocation cost hassle-free</h1>
        <p> We facilitate payments for tuition, accomodation, and other
            migration-related costs in over 5000 Universities across over 
            100 countries worldwide. With our currencies calculator, you
            can convert rates as you go and pay your fees without breaking
            a sweat.
        </p>
        </div>
        <img src={relocation} alt="" />
        <p className="ImportantText">
            Shiga by Payshiga is a financial platform, not a bank. Banking services
            provided on this platform as well as debit cards are issued by banking partners.
          </p>
      </div>
    </div>
    <div className='payment-content-mob'>
      <h1>Make payment and other relocation cost hassle-free</h1>
      <p> We facilitate payments for tuition, accomodation, and other
            migration-related costs in over 5000 Universities across over 
            100 countries worldwide. With our currencies calculator, you
            can convert rates as you go and pay your fees without breaking
            a sweat.</p>
      <img src={currency} alt="" />
      <p className='Important-mob-text'>Shiga by Payshiga is a financial platform, not a bank.Therefore,banking services provided on this platform, and debit cards, are issued by banking partners</p>
    </div>
    </>
  )
}

export default Paymentandrelocation