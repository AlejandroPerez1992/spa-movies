import React from 'react';
import Pelicula from './Pelicula';

const ListadoPeliculas = ( { peliculas } ) => (

    <div className="row">
        
        { peliculas.map(pelicula => (
            <Pelicula 
                key={ pelicula.id }
                pelicula={ pelicula }
            />
            
            
        ))}
        
    </div>

);
 
export default ListadoPeliculas;