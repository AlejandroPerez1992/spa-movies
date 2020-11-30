import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import ListadoPeliculas from "./components/ListadoPeliculas";
import './index.css';

function App() {

  const [ peliculas, guardarPeliculas ] = useState([])

  useEffect( () => {
      const consultarAPI = async() => {
        const url = `http://api.themoviedb.org/3/movie/popular?api_key=49772f8f87524b9e90b4e37032d5a6a9`

        const respuesta = await fetch(url);
        const peliculas = await respuesta.json();
        
        guardarPeliculas(peliculas.results);
      }
      consultarAPI();
  });


  return (
    <>
      
      <Header
        titulo = 'Spa-Movie'
        />
      <div className=" container white">
        <ListadoPeliculas
          peliculas = { peliculas }
          />
      </div>
    </>
  );
}

export default App;
