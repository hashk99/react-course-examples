import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'
import { useEffect, useState } from 'react'

const DUMMY_M = [
    {
        id: 'm1',
        title: 'm1 title',
        image: 'https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e',
        address: 'Some address',
        description: "This is a first meetup"
    },
    {
        id: 'm2',
        title: 'm2 title',
        image: 'https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e',
        address: 'Some another address',
        description: "This is the second meetup"
    }
    ]

const Homepage = (props) => {

    // const [first, setfirst] = useState([])
    // useEffect(() => {
    //     setfirst(DUMMY_M)
    // }, [])
    
    return <>
    <MeetupList meetups={props.meetups} />
    
    </>
}

export function getStaticProps   ()   {
return {
    props: {
        meetups: DUMMY_M
    }
}
}


export default Homepage