import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store.js';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import App from './App.jsx';
import { FilteredProducts, Login, Main, SingleProduct } from './Components/index.js';

// Wrapper component to handle routing logic
// eslint-disable-next-line react-refresh/only-export-components
const RouterWrapper = () => {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user || {};

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/fliteredproducts/:type",
          element: authUser ? <FilteredProducts /> : <Navigate to="/login" />,
        },
        {
          path: "/fliteredproducts/:type/:id",
          element: authUser ? <SingleProduct /> : <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterWrapper />
    </Provider>
  </StrictMode>,
);