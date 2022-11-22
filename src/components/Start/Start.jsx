import React from 'react'
import './Start.css'
import start from '../../AllComponent/Webconponents/Getstarted.svg'
import currency from '../../AllComponent/Mobile component/Group1000003190.svg'

const Start = () => {
  return (
    <>
    <div className="start-content">
        <div className="start-child-content">
            <div className='start-child-content-text'>
            <h1>Get started with Shiga, It's <span style={{ color:'#3f4ad6'}}>FREE!</span></h1>
            <p>Creating an account with payshiga to plug into the easy way of making cross-border transactions on the go.</p>
            <input type="email" placeholder='Enter email address'/>
            <button>Get Started</button>
            </div>
            <div className="child-right">   
            <img src={start} alt="" />
            </div>
        </div>
    </div>
    <div className="start-content-mob">
            <h1>Get started with Shiga, It's <span style={{ color:'#3f4ad6'}}>FREE!</span></h1>
            <p>Creating an account with payshiga to plug into the easy way of making cross-border transactions on the go.</p>
            <input type="email" placeholder='Enter email address'
            />
            <button>Get Started</button>
            <img src={currency} alt="" />
    </div>
    </>
  )
}

export default Start