import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import Events, { loader as eventLoader } from './Pages/Events';
import EventDetail, { loader as eventDetailLoader, action as deleteEvent } from './Pages/EventDetail';
import NewEvent from './Pages/NewEvent';
import EditEvent from './Pages/EditEvent';
import RootLayouts from './Pages/Root';
import EventsRootsLayout from './components/EventsRoot';
import ErrorPage from './Pages/Error';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './Pages/Newsletter';

const route = createBrowserRouter([
  {
    path: '/', element: <RootLayouts />, errorElement: <ErrorPage />, children: [
      { index: true, element: <Home /> },
      {
        path: 'events', element: <EventsRootsLayout />, children: [
          { index: true, element: <Events />, loader: eventLoader },
          {
            path: ':id', id: 'event-detail', loader: eventDetailLoader, children: [
              { index: true, element: <EventDetail />, action: deleteEvent },
              { path: 'edit', element: <EditEvent />, action: manipulateEventAction },
            ]
          },
          { path: 'new', element: <NewEvent />, action: manipulateEventAction },
        ]
      },
      { path: 'newsletter', element: <NewsletterPage />, action: newsletterAction },
    ]
  },
])

function App() {
  return <RouterProvider router={route} />;
}

export default App;
