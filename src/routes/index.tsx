import { createBrowserRouter, Navigate } from "react-router-dom";
import Characters from "../pages/characters";

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/character" replace /> },
    {
      path: "/character",
      element: <Characters />,
    }
  ]);
  
  export default router;