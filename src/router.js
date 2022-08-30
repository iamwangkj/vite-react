
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/courses',
        element: <Courses />,
        children: [
          { index: true, element: <CoursesIndex /> },
          { path: '/courses/:id', element: <Course /> }
        ]
      },
      { path: '*', element: <NoMatch /> }
    ]
  }
]

export default routes
