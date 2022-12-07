import React, { useState, useEffect, Fragment } from 'react'
import styles from './index.module.scss'

function index () {
  const [txt, setTxt] = useState('')

  function writeJs () {
    setTxt('<script>alert(1)</script>')
  }

  return (
    <div>
      <div>{txt}</div>
      <button onClick={writeJs}>写入</button>
    </div>
  )
}

export default index
