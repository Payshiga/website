import React, { useRef } from 'react'
import './OneWallet.css'
import qrcode from '../../AllComponent/Webconponents/Icons/frame.png'
import arrow from '../../AllComponent/Webconponents/Yellowarrow.svg'
import Forbes from '../../AllComponent/Webconponents/Trusted by/Forbes_logo1.svg'
import Guardian from '../../AllComponent/Webconponents/Trusted by/Guardian_logo1.svg'
import Crunch from '../../AllComponent/Webconponents/Trusted by/Techcrunch.svg'
import Tech from '../../AllComponent/Webconponents/Trusted by/Techpoint.svg'
import Phone from '../../AllComponent/Webconponents/HeroPhone.png'
import ios from '../../AllComponent/Mobile component/IOSstore50px.svg'
import android from '../../AllComponent/Mobile component/Playstore50px.svg'

const OneWallet = () => {
    const companies = [Tech,Guardian,Crunch,Forbes];
  return (
    <>
    <div className='section'>
        <div className="content">
            <div className="content-left">
                <h1>
                    ONE WALLET GLOBAL PAYMENT
                </h1>
                <p>Shiga by payshiga is the easiest way to make hassle-free cross-border payments on the go.</p>
                <div className='qr_code-sec'>
                    <img src={qrcode} alt="" />
                    <div className='qr-code-sec-text'>
                        <p>Scan QR code to download the Shiga app</p>
                        <img src={arrow} alt="" />
                    </div>
                </div>
                <div className='trusted_by'>
                    <p>Trusted by the fast-growing companies as seen on:</p>
                    {companies.map((company) => {
                        return (
                            <>
                            <img className='trusted_by-img' src={company} alt={company} />
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="content-right">
                <img src={Phone} alt="" />
            </div>
        </div>
        <div className='wallet-content-mob'>
            <div className='wallet-content-mob-text'>
                <h1>ONE WALLET GLOBAL PAYMENT</h1>
                <p>Shiga by payshiga is the easiest way to make hassle-free cross-border payments on the go.
                Send money to anyone, anywhere, anytime, for zero fees.
                </p>
            </div>
            <div className='wallet-content-mob-stores'>
                <img src={ios} alt="" />
                <img src={android} alt="" />
            </div>
            <div className='wallet-content-mob-company'>
                <p>Trusted by fast-growing companies as seen on:</p>
            </div>
            <div className='wallet-content-mob-company-logo'>
                <img src={Tech} alt="" />
                <img src={Guardian} alt="" />
                <img src={Crunch} alt="" />
                <img src={Forbes} alt="" />
            </div>
        </div>
    </div>
    </> 
  )
}

export default OneWallet