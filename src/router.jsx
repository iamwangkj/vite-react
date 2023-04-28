import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import App from './App'
import Hook from './components/Hook/Index1'
import Css from './components/Css'
import Flex1 from './components/Flex1'
import XSS from './components/XSS'
import Worker from './components/Worker'
import Adjust from './components/Adjust'
import Threesixty from './page/Threesixty'
import Menu from './page/Menu'
import Test from './page/Test'
import Css_perspective from './page/Css-perspective'

export const routers = [
  {
    path: '/',
    element: (<App />)
  },
  {
    path: 'threesixty',
    element: (<Threesixty />)
  },
  {
    path: 'menu',
    element: (<Menu />)
  },
  {
    path: 'test',
    element: (<Test />)
  },
  {
    path: 'css_perspective',
    element: (<Css_perspective />)
  }
]

export function routerProvider () {
  const browserRouter = createBrowserRouter(routers)
  return <ParallaxProvider>
    <RouterProvider router={browserRouter} />
    </ParallaxProvider>
}
