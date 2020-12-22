import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const getName = (e) => {
    const name = e.target.value;
    console.log(name);
    setName(name);
  };

  const getPrice = (e) => {
    setPrice(e.target.value);
  };

  const submitMovie = (e) => {
    e.preventDefault();
    setMovies(prevMovies =>[...prevMovies,{name:name, price:price}])
  };

  return (
    <form onSubmit={submitMovie}>
      <label>Movie's Name</label>
      <input onChange={getName} type="text" name="name" value={name} />
      <label>Price</label>
      <input onChange={getPrice} type="text" name="price" value={price} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMovie;
