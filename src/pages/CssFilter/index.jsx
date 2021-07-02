import React, { useState } from 'react'
import './index.scss'

function Com () {
  // const [count, setCount] = useState(0)

  return (
    <div className="css-filter">
      <div className="box">filter</div>
      <div className="box blur">filter blur</div>
      <div className="box backdrop-filter">backdrop-filter blur</div>
      <div className="box brightness">filter brightness亮度</div>
      <div className="box contrast">filter 对比</div>
      <div className="box drop-shadow">filter drop-shadow</div>
      <div className="box grayscale">filter grayscale灰度</div>
      <div className="box hue-rotate">filter hue-rotate色相旋转</div>
      <div className="box invert">filter invert反转</div>
      <div className="box opacity">filter opacity</div>
      <div className="box saturate">filter saturate饱和</div>
      <div className="box sepia">filter sepia深褐色</div>
      <div className="box url">filter url</div>
    </div>
  )
}

export default Com
