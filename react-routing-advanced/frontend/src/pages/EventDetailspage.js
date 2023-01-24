import { useParams } from "react-router-dom"




const EventDetailspage = () => {

    const {eventId} = useParams()

    return <h1> EventDetailspage page ID : {eventId}</h1>
}
    
    export default EventDetailspage