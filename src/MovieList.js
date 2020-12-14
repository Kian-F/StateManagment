import React,{useState} from 'react';


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
            <ul>
                <li>{movie.name}</li>
            </ul>
        ))}
         </div>
    );
   
}

export default MovieList