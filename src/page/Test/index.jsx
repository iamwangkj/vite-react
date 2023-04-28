import { Parallax } from 'react-scroll-parallax'
import './index.scss'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollTrigger from "gsap/ScrollTrigger"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap'
import ScrollMagic from 'scrollmagic'

export default function Component() {

  return (
    <div className='page-test'>
      <div className="box"></div>
      <Tween from={{ y: 100 }} to={{ y: 0, rotation: 360 }} duration={1} >
        <p >At its core, cooking is the science of managing a set of delicate reactions</p>
      </Tween>
      <Controller >
        <Scene indicators>
          <Tween from={{ y: 100 }} to={{ y: 0, rotation: 180 }} duration={1} >
            <p>At its core, cooking is the science of managing a set of delicate reactions</p>
          </Tween>
        </Scene>
      </Controller>

      <div className="box"></div>
    </div>
  );
}