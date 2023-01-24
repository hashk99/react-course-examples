import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function Events() {
  const data = useLoaderData()

  return (
    <>
       <EventsList events={data.events} /> 
    </>
  );
}

export default Events;


export async function  loader() {
  const response = await fetch('http://localhost:8080/xevents');

  if (!response.ok) {
    // ..
    throw new Response(JSON.stringify({message:" COuld not fetch events", status: 500}))

  } else {
    // const resData = await response.json();
    // return resData.events
    // const res = new Response('any data', {status: 201})
    return response

  }
}