import React, { useState, useEffect, Fragment } from 'react'
import './index.scss'

function index () {
  // const [count, setCount] = useState(0)

  function handleClick (e) {
    console.log('e===', e)
    const dom = e.target
    if (!dom.isClick) {
      console.log('dom===', dom.offsetLeft)
      dom.parentNode.querySelector('.box-child-wrapper').style.left = `-${dom.offsetLeft}px`
      const childList = dom.parentNode.querySelectorAll('.box-in')
      childList.forEach(element => {
        element.style.height = '25px'
      })
      dom.isClick = true
    } else {
      const childList = dom.parentNode.querySelectorAll('.box-in')
      childList.forEach(element => {
        element.style.height = '0px'
      })
      dom.isClick = false
    }

    // dom.parentNode.querySelectorAll('.box-in').style.height = '25px'
  }

  return (
    <div className='page-menu'>
      {menuList.map(item => {
        return (
          <div key={item} className="box" onClick={handleClick}>
            <div className="box-menu">{item.name}</div>
            <div className='box-child-wrapper'>
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
  }, {
    name: '1-3'
  }, {
    name: '1-4'
  }]
}, {
  name: '2',
  children: [{
    name: '2-1'
  }, {
    name: '2-2'
  }]
}, {
  name: '3',
  children: [{
    name: '3-1'
  }, {
    name: '3-2'
  }, {
    name: '3-3'
  }]
}, {
  name: '4',
  children: [{
    name: '4-1'
  }, {
    name: '4-2'
  }, {
    name: '4-3'
  }, {
    name: '4-4'
  }]
}]

export default index
