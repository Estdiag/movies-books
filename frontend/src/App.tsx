import { BrowserRouter } from "react-router";
import { MoviesList } from "./components/MoviesList"

function App() { 
  return (
    <BrowserRouter>
    <div className="p-10">
      <MoviesList/>
    </div>
    </BrowserRouter>
    
  )
}

export default App
