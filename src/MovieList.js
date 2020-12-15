import React,{useState} from 'react';
import Movie from './Movie'


const MovieList =  () =>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 2133
        },
        {
            name: 'Game Of Thrones',
            price: '$10',
            id: 21383
        },
        {
            name: 'Inception',
            price: '$10',
            id: 213873
        }

    ]);

    return(
        <div>
        {movies.map(movie =>(
           <Movie name={movie.name} price={movie.price}/>
        ))}
         </div>
    );
   
}

export default MovieList