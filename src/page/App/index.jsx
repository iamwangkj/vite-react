import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'

function App () {
  function checkWebGL2 () {
    const gl = document.createElement('canvas').getContext('webgl2')
    if (!gl) {
      if (typeof WebGL2RenderingContext !== 'undefined') {
        console.log('your browser appears to support WebGL2 but it might be disabled. Try updating your OS and/or video card drivers')
      } else {
        console.log('your browser has no WebGL2 support at all')
      }
    } else {
      console.log('webgl2 works!')
    }
  }

  // checkWebGL2()

  return (
    <div className={styles.app}>
      <h1>I am App</h1>
      {/* <InlineVideo
        src="https://jvod.300hu.com/vod/product/18d130b0-f101-44ae-9957-482270830a91/40b28dcdaa4e41b0b9b000b10a5ad351.mp4"
        autoPlay
        controls
        poster='https://m.360buyimg.com/mobile/jfs/t1/193771/11/12211/161448/60e6c120E3deb8373/02ba3b1364149d8a.jpg'
      ></InlineVideo> */}
      {/* <Hook></Hook> */}
      {/* <Css></Css> */}
      {/* <Flex1></Flex1> */}
      {/* <XSS /> */}
      {/* <Worker /> */}
      {/* <Adjust></Adjust> */}
      {/* <Threesixty></Threesixty> */}
    </div>
  )
}

export default App
