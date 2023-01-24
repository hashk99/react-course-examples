import { Link, useNavigate } from "react-router-dom"

  const Home = () => {
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('/products')
    }
    return <>
    <p>Home</p>
    <p>Go to <Link to="/products">Go to products</Link></p>
    <button onClick={navigateHandler}>navigate</button>
    </> 
}

export default Home