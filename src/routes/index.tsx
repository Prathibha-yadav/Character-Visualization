import { createBrowserRouter } from "react-router-dom";
import Characters from "../pages/characters";
import CharacterDetails from "../pages/character-details"; 
import Notfound from "../pages/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Characters/>,
  },
  {
    path: "/character",
    element: <Characters/>,
  },
  {
    path: "/character/:id", 
    element: <CharacterDetails />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default router;
