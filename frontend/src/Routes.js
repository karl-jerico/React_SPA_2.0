import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetails, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetails";
import NewEvents, { action as newEventAction } from "./pages/NewEvents";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./layouts/RootLayout";
import EventsRoot from "./layouts/EventsRoot";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <Events />, loader: eventsLoader },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetails />,
                action: deleteEventAction
              },
              { path: "edit", element: <EditEvent /> },
            ],
          },
          { path: "new", element: <NewEvents />, action: newEventAction },
        ],
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
