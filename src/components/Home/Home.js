import React, { useState, useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";


const Home = () => {
  //const [data, setData] = useState({});
  const movieText = "iron man";
  const dispatch = useDispatch()
  useEffect(() => {
    fetchMovies();
    
  }, []);

  

  async function fetchMovies() {
    try {
      const response = await fetch(
        `https://omdbapi.com/?s=${movieText}&page=1&apikey=65b31166`
      );

      const res = await response.json();

      console.log("The response from api: " + res.Search);
      //setData(res);
      dispatch(addMovies(res));
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div>
      <div className="banner-img"></div>
      
      <MovieListing />
    </div>
  );
};

export default Home;

