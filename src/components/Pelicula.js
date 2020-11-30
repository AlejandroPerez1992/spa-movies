import React from 'react';
import Popup from "reactjs-popup";

const Pelicula = ({ pelicula }) => {

    const {  title, poster_path, original_title, overview, backdrop_path, vote_average } = pelicula;

    return ( 
        <div className ="col s15 m6 l3">
            <div className="card">
                <div className="card-image">
                    <form class="card-item img-2">
                        <img src= { "//image.tmdb.org/t/p/w300_and_h450_bestv2" + poster_path } alt="Imagen No Disponible"></img>
                        <h5>Titulo: { title  }</h5>
                    </form>                
                </div>
                <Popup trigger={<button> Detalles</button>} position="center">
                <div>
                    <div>
                        <form>
                            <h5>Titulo original: { original_title  }</h5>
                            <h5>Puntuacion: { vote_average  }★</h5>
                            <img src= { "//image.tmdb.org/t/p/w300_and_h450_bestv2" + backdrop_path } alt="Imagen No Disponible"></img>
                            <h8>{ overview  }</h8>
                        </form>
                    </div>
                </div>
                </Popup>
            </div>
        </div>
     );
};


export default Pelicula;
