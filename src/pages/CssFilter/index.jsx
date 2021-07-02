import React, { useState } from 'react'
import './index.scss'

function Com () {
  const [count, setCount] = useState(0)

  return (
    <div className="css-filter">
      <div className="box blur">我是css filter blur</div>
    </div>
  )
}

export default Com
