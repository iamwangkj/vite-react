import React, { useState, useEffect, Fragment } from 'react'

function index () {
  const [count, setCount] = useState(0)

  function handleClickAsync () {
    setTimeout(function () {
      // console.log('延时count', count)
      setCount(count + 1) // 问题所在：此时的 count 为之前的count！！！改用函数入参count可以拿到最新的count
    }, 3000)
  }

  function handleClickSync () {
    console.log('同步count', count)
    setCount(count + 1)
  }

  return (
    <div>
      {count}
      <button onClick={handleClickAsync}>异步加1</button>
      <button onClick={handleClickSync}>同步加1</button>
    </div>
  )
}

export default index
