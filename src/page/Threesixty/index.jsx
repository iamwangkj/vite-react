import React, { useState, useEffect, Fragment } from 'react'
import ThreeSixty from '../../lib/threesixty/threesixty.js'
import styles from './index.module.scss'
import img0 from './img/gem0.jpg'
import img1 from './img/gem1.jpg'
import img2 from './img/gem2.jpg'
import img3 from './img/gem3.jpg'
import img4 from './img/gem4.jpg'
import img5 from './img/gem5.jpg'
import img6 from './img/gem6.jpg'
import img7 from './img/gem7.jpg'
import img8 from './img/gem8.jpg'
import img9 from './img/gem9.jpg'

function index () {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    const threesixty = new ThreeSixty(document.getElementById('threesixty'), {
      image: [
        img0,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9
      ],
      count: 10,
      perRow: 1,
      prev: document.getElementById('prev'),
      next: document.getElementById('next')
    })

    // threesixty.play()
  })

  return (
    <div className={styles.threesixty} id='threesixty'>
      <div id="prev">prev</div>
      <div id="next">next</div>
    </div>
  )
}

export default index
