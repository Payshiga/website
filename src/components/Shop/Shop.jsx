import React from 'react'
import './Shop.css'
import shop from '../../AllComponent/Webconponents/Shopeasy.svg'
import currency from '../../AllComponent/Mobile component/Group1000003171.svg'
const Shop = () => {
  return (
    <>
      <div className="shop-content">
        <div>
        <div className='shop-content-text'>
          <h1>Shop easily in 10m stores & merchant sites worldwide.</h1>
          <p>Spend with our virtual cards and pay for subscriptions online.
            you can also spend in-store by adding your card to timesaving
            payment integration like Apple pay and Google pay. Receive instant
            notifications when you finish.
          </p>
        </div>
          <img src={shop} alt="" />
        <p className="ImportantText">
            Shiga by Payshiga is a financial platform, not a bank. Banking services
            provided on this platform as well as debit cards are issued by banking partners.
          </p>
      </div>
      </div>
      <div className='shop-content-mob'>
        <h1>Shop easily in 10m stores & merchant sites worldwide.</h1>
        <p>Spend with our virtual cards and pay for subscriptions online.
          you can also spend in-store by adding your card to timesaving
          payment integration like Apple pay and Google pay. Receive instant
          notifications when you finish.</p>
        <img src={currency} alt="" />
        <p className='Important-mob-text'>Shiga by Payshiga is a financial platform, not a bank.Therefore,banking services provided on this platform, and debit cards, are issued by banking partners</p>
      </div>
    </>
  )
}

export default Shop