import React from 'react'
import './App.css'
import CrossborderPayments from './components/CrossborderPayments/CrossborderPayments'
import Footer from './components/Footer/Footer'
import MultipleCurrencies from './components/Multiplecurrencies/MultipleCurrencies'
import Navbar from './components/Navbar/Navbar'
import OneWallet from './components/OneWallet/OneWallet'
import Paymentandrelocation from './components/Paymentandrelocation/Paymentandrelocation'
import Security from './components/Security/Security'
import Shop from './components/Shop/Shop'
import Start from './components/Start/Start'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <OneWallet/>
    <CrossborderPayments/>
    <MultipleCurrencies/>
    <Paymentandrelocation/>
    <Shop/>
    <Security/> 
    <Start/>
    <Footer/>
    </>
  )
}

export default Layout