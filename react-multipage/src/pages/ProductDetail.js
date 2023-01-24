import {  useParams } from "react-router-dom"

  const ProductDetail = () => {
    const params = useParams()
    
    return <>
      <p>product details {params.productId}</p>  
    </>
}

export default ProductDetail