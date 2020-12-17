import React, {useState, createContext} from 'react';
import Movie from './Movie';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
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
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}