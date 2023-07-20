import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import Product from "./Pages/Product";
import RootLayouts from "./Pages/Root";
import Error from "./Pages/Error";
import ProductDetails from "./ProductDetails";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    errorElement: <Error />,
    children: [
      { index: true, path: "", element: <HomePage /> },
      { path: "products", element: <Product /> },
      { path: "products/:id", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
