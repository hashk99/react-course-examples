import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import EditEventpage from './pages/EditEventpage';
import EventDetailspage from './pages/EventDetailspage';
import Eventspage from './pages/Eventspage';
import Homepage from './pages/Homepage';
import NewEventpage from './pages/NewEventpage';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRootpage'
import Events , {loader as eventsLoader} from './pages/Events';
import Errorpage from './pages/Errorpage';
const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout/>,
    errorElement: <Errorpage/>,
  children: [
    {index : true, element: <Homepage/>},

    {
      path: 'events', 
      element: <EventsRootLayout/>, children:[
      {index:true, element: <Events/>, loader:  eventsLoader},
      {path : "new", element: <NewEventpage/>},
      {path : ":eventId", element: <EventDetailspage/>},//order doesn't matter with :eventId
      {path : ":eventId/edit", element: <EditEventpage/>},

    ]}
  ]

}
])

function App() {
  return <RouterProvider router={router}><div>App</div></RouterProvider>;
}

export default App;
