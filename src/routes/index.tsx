import { createBrowserRouter, Navigate } from "react-router-dom";
import CharacterContainer from "../pages/charactersContainer";

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/" replace /> },
    {
      path: "/character",
      element: <CharacterContainer />,
    }
  ]);
  
  export default router;