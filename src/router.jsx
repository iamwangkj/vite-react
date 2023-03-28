import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './page/App'
import Hook from './components/Hook/Index1'
import Css from './components/Css'
import Flex1 from './components/Flex1'
import XSS from './components/XSS'
import Worker from './components/Worker'
import Adjust from './components/Adjust'
import Threesixty from './page/Threesixty'
import Menu from './page/Menu'

const browserRouter = createBrowserRouter([
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
  }
])

export default <RouterProvider router={browserRouter} />
