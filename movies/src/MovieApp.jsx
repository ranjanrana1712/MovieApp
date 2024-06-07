
import React, { useState, useEffect } from "react";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); //once  the data is received from the api then we display data till then we just display the loader

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        const data = await response.json();
        setMovies(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("error fetching  movies", error);
        setLoading(false);
      }
     
    };
fetchMovies();
  }, []);
  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <>
      <h1>Movie App</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.rating}</h2>
            <p>{movie.movie}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieApp;


