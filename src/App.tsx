import { RouterProvider } from "react-router-dom"
import { CharactersProvider } from "./context/characters/context"
import { CharacterDetailsProvider } from "./context/character-details/context"
import router from "./routes";
function App() {

  return (
      
      
      <CharactersProvider>
        <CharacterDetailsProvider>
      <RouterProvider router={router} />
      </CharacterDetailsProvider>
    </CharactersProvider>
      
  )
}

export default App
