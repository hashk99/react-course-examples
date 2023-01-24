import NewMeetupForm from '../../components/meetups/NewMeetupForm'


const NewmeetupPage = () => {

    const addMeetupHandler  = (formData) => { console.log(formData)}

    return <>
       <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
}

export default NewmeetupPage