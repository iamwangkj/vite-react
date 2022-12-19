import React, { useState, useEffect, Fragment } from 'react'
import styles from './index.module.scss'
// import serviceWorker from '../../../serviceWorker.js'
import { Asay } from './a'

function index () {
  // const [count, setCount] = useState(0)

  function checkWorker () {
    /* 判断当前浏览器是否支持serviceWorker */
    if ('serviceWorker' in navigator) {
      console.log('该浏览器支持serviceWorker')
      /* 当页面加载完成就创建一个serviceWorker */
      window.addEventListener('load', function () {
        /* 创建并指定对应的执行内容 */
        /* scope 参数是可选的，可以用来指定你想让 service worker 控制的内容的子目录。 在这个例子里，我们指定了 '/'，表示 根网域下的所有内容。这也是默认值。 */
        navigator.serviceWorker.register('/serviceWorker.js', { scope: './' })
          .then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope)
          })
          .catch(function (err) {
            console.log('ServiceWorker registration failed 注册失败: ', err)
          })
      })
    }
  }

  checkWorker()

  return (
    <div className='worker'>
    </div>
  )
}

export default index
