import { Navigate, createBrowserRouter } from "react-router-dom";
import Characters from "../pages/characters";
import CharacterDetails from "../pages/character-details"; 

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/character" replace /> },
  {
    path: "/character",
    element: <Characters/>,
  },
  {
    path: "/character/:id", 
    element: <CharacterDetails />,
  },
]);

export default router;
