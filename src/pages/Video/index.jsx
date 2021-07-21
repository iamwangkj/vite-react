import React, { useState } from 'react'
import './index.scss'

function Com () {
  // const [count, setCount] = useState(0)

  return (
    <div className="video-box">
      <video
        src="https://jvod.300hu.com/vod/product/18d130b0-f101-44ae-9957-482270830a91/40b28dcdaa4e41b0b9b000b10a5ad351.mp4"
        autoPlay
        controls
        poster='https://m.360buyimg.com/mobile/jfs/t1/193771/11/12211/161448/60e6c120E3deb8373/02ba3b1364149d8a.jpg'
      ></video>
    </div>
  )
}

export default Com
