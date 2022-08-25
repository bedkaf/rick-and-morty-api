import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import GetCharacter from "./components/GetCharacter";


function App() {
  const [characters, setCharacters] = useState([]);

  const urlBase = "https://rickandmortyapi.com/api/character"

  function GetData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(`prodijo un error al mometno d extraer los datos: ${error}`))

  }
  useEffect(() => {
    GetData(urlBase);
  }, [])

  return ( 
    <>
      <Navbar titulo = {'rick and morty api'} />

      <div className="container">
      <GetCharacter character={characters}/>
      </div>

    </>
  );
}

export default App;
