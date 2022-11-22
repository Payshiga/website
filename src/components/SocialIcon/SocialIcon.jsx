import React from 'react'
import { useState } from 'react'

const SocialIcon = ({ normalState,hoverState,link }) => {
    const [src,setsrc] = useState(normalState);
  return (
    <>
    <a href={link} target="_blank"><img src={src} alt="" onMouseOver={() => {setsrc(hoverState)}} onMouseOut={() => {setsrc(normalState)}}/></a>
    </>
  )
}

export default SocialIcon