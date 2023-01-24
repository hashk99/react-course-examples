import { Children } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";


// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home/>} />
//     <Route path="/products" element={<Products/>} />
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/products', element: <Products/>},
      {path: '/products/:productId', element: <ProductDetail/>},
    ]
  },

])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
