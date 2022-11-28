import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Privacy from './components/Privacy/Privacy';


const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App />
      ),
    },
    {
      path: "privacy-policy",
      element: <Privacy />,
    },
  ]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));
// createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
//   );