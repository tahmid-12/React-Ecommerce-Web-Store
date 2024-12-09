import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import { FilteredProducts, Main, SingleProduct } from './Components/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/fliteredproducts/:type",
        element: <FilteredProducts />
      },
      {
        path: "/fliteredproducts/:type/:id",
        element: <SingleProduct />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
