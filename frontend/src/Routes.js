import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Events, {loader as eventsLoader} from "./pages/Events"
import EventDetails from "./pages/EventDetails"
import NewEvents from "./pages/NewEvents"
import EditEvent from "./pages/EditEvent"
import RootLayout from "./layouts/RootLayout"
import EventsRoot from "./layouts/EventsRoot"

const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { 
          path: 'events', 
          element: <EventsRoot />, 
          children:[
            { index: true, 
              element: <Events />,
              loader: eventsLoader,
            },
            { path: ':eventId', element: <EventDetails /> },
            { path: 'new', element: <NewEvents /> },
            { path: ':eventId/edit', element: <EditEvent /> },
        ]},
      ],
    },
  ])
  
  function Routes() {
    return <RouterProvider router={router} />
  }
  
  export default Routes