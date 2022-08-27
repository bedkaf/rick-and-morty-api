import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import GetCharacter from "./components/GetCharacter";
import Navigation from "./components/Navigation";


function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setfInfo] = useState({});
  const urlBase = "https://rickandmortyapi.com/api/character";

  function GetData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setfInfo(data.info)
       })
      .catch(error => console.log(`prodijo un error al mometno d extraer los datos: ${error}`))
  }

  const onPrevius =()=>{
    GetData(info.prev)
  }
  const onNext =()=>{
    GetData(info.next)
  }

  useEffect(() => {
    GetData(urlBase);
  }, [])

  return ( 
    <>
      <Navbar titulo = {'rick and morty api'} />

      <div className="container mt-5">
        <Navigation 
          page={info.pages}
          next={info.next} 
          prev={info.prev}
          onNext={onNext} 
          onPrevius={onPrevius} />
        <GetCharacter character={characters}/>
        <Navigation 
          page={info.pages}
          next={info.next} 
          prev={info.prev}
          onNext={onNext} 
          onPrevius={onPrevius} />
      </div>

    </>
  );
}

export default App;
