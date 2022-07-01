
import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import './App.css'
import Home from './components/home/Home';
import ProtectedRoutes from "./components/home/ProtectedRoutes";
import Pokedex from "./components/pokedex/Pokedex";
import PokedexInfoId from "./components/pokedex/PokedexInfoId";

function App() {
  const [validName, setValidName] = useState(false)

  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home setValidName={setValidName}/>} />
        
        <Route element={<ProtectedRoutes validName={validName}/>}>
          <Route path='/pokedex' element={<Pokedex/>} />
          <Route path='/pokedex/:id' element={<PokedexInfoId/>} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
