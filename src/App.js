import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modulo4 from './page/modulo4';
import Modulo5 from './page/modulo5';
import Modulo6 from './page/modulo6';
import Modulo7 from './page/modulo7';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Modulo4/>
    },
    {
      path: "/cartas",
      element: <Modulo5/>
    },
    {
      path: "/dashboard",
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
