import { Link } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

  const Error = () => {
    return <>
    <MainNavigation/>
    <main>
    <p>Error</p>
    <p>Go to <Link to="/">Go to Home</Link></p>
    </main>
    </> 
}

export default Error