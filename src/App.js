import './App.css';
import './css/modulo4.css';
import './css/modulo6.css';
import './css/modulo5.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modulo4 from './page/modulo4.js';
import Modulo5 from './page/modulo5.js';
import Modulo6 from './page/modulo6.js';
import Modulo7 from './page/modulo7.js';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Modulo4/>
    },
    // {
    //   path: "/cartas",
    //   element: <Modulo5/>
    // },
    {
      path: "/presidente",
      element: <Modulo6/>
    },
    {
      path: "/proyectos",
      element: <Modulo7/>
    }
    
  ]);

  return (
    <RouterProvider router={router} />
  );
}


export default App;
