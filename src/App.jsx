import React, { useState, useEffect } from 'react'
import './App.scss'
import Hook from './components/Hook/Index1'
import Css from './components/Css'
import Flex1 from './components/Flex1'
import XSS from './components/XSS'

function App () {
  return (
    <div className="App">
      {/* <InlineVideo
        src="https://jvod.300hu.com/vod/product/18d130b0-f101-44ae-9957-482270830a91/40b28dcdaa4e41b0b9b000b10a5ad351.mp4"
        autoPlay
        controls
        poster='https://m.360buyimg.com/mobile/jfs/t1/193771/11/12211/161448/60e6c120E3deb8373/02ba3b1364149d8a.jpg'
      ></InlineVideo> */}
      {/* <Hook></Hook> */}
      {/* <Css></Css> */}
      {/* <Flex1></Flex1> */}
      <XSS />
    </div>
  )
}

export default App
