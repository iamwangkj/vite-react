import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routers } from './router'

function App () {
  return (
    <div>
      <h1>I am App</h1>
      {/* {routers.map((item) => <Link >)} */}
      {
        routers.map((item) => {
          // <Link ></Link>
          return (
            <div key={item} style={{ margin: '1rem 0' }}>
              <Link to={item.path}>{item.path}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
