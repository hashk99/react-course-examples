import { Link, NavLink } from "react-router-dom"

  const Products = () => {
    return <>
    
      <p>product Detail</p>
      <ul>
        <Link to="/products/1">Product 1 </Link>
        <li>Product 2 </li>
        <li>Product 3 </li>
      </ul>
    </>
}

export default Products