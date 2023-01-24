import { useRouteError } from "react-router-dom"
import PageContent from "../components/PageContent"

const Errorpage = () => {
    const error = useRouteError()
    let title = "An error occurred!"
    let message = 'Something went wrong!'
    if(error.status === 500){
        title = 'Not found!'
        message = error.data.message
    }

return <PageContent title={title}>
    <p>{message}</p>
</PageContent>
}

export default Errorpage