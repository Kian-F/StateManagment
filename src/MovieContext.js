import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = () =>{
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

    );
}