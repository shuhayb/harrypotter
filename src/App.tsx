import "./App.css"
import { Character } from "./services/types.generated.ts"
import { useCharactersQuery } from "./services/hooks.generated.ts"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"

function App() {
  return (
      <BrowserRouter >
        <Routes>
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
