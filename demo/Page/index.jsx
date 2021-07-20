import React, { useState } from 'react'
import './index.scss'

function Com () {
  // const [count, setCount] = useState(0)

  return (
    <div className="">
      {list.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
  )
}

export default Com
