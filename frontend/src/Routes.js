import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Events"
import EventDetails from "./pages/EventDetails"
import NewEvents from "./pages/NewEvents"
import EditEvent from "./pages/EditEvent"
import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        { path: '', element: <Home /> },
        { path: 'events', element: <Events /> },
        { path: 'events/:eventId', element: <EventDetails /> },
        { path: 'events/new', element: <NewEvents /> },
        { path: 'events/:eventId/edit', element: <EditEvent /> },
      ]
    },
  ])
  
  function Routes() {
    return <RouterProvider router={router} />
  }
  
  export default Routes