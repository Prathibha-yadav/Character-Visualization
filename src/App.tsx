import { RouterProvider } from "react-router-dom"
import { CharactersProvider } from "./context/characters/context"
import router from "./routes";
function App() {

  return (
      
      
      <CharactersProvider>
 
      <RouterProvider router={router} />
  
</CharactersProvider>
      
  )
}

export default App
