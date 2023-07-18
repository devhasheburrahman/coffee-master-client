import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './assets/Componant/updateCoffee.jsx';
import AddCoffee from './assets/Componant/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path: "addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee />,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
