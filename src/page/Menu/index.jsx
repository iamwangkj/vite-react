import React, { useState, useEffect, Fragment } from 'react'
import './index.scss'

function index () {
  // const [count, setCount] = useState(0)

  return (
    <div className='page-menu'>
      {menuList.map(item => {
        return (
          <div key={item} className="box">
            <div className="box-menu">{item.name}</div>
            <div>
            {
              item.children.map((dom) => {
                return <div className="box-in" key={dom}>{dom.name}</div>
              })
            }
            </div>
          </div>
        )
      })}
    </div>
  )
}

const menuList = [{
  name: '1',
  children: [{
    name: '1-1'
  }, {
    name: '1-2'
  }]
}, {
  name: '2',
  children: [{
    name: '1-1'
  }, {
    name: '1-2'
  }]
}, {
  name: '3',
  children: [{
    name: '1-1'
  }, {
    name: '1-2'
  }]
}, {
  name: '4',
  children: [{
    name: '1-1'
  }, {
    name: '1-2'
  }]
}]

export default index
