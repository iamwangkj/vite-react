import React, { useState } from 'react'
import CssFilter from './pages/CssFilter/index'
import Overflow from './pages/Overflow/index'
import Video from './pages/Video/index'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* <button onClick={() => setCount(count => count + 1)}>count is: {count}</button> */}
      {/* <CssFilter /> */}
      {/* <Overflow /> */}
      <Video />
    </div>
  )
}

export default App
