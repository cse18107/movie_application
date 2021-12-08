import React, { useState, useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  const [data, setData] = useState([]);
  const movieText = "iron man";
  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const response = await fetch(
        `https://omdbapi.com/?s=${movieText}&page=1&apikey=65b31166`
      );

      const res = await response.json();

      console.log("The response from api: " + res.Search.length);
      setData(res.Search);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="banner-img"></div>
      <ul>
        <li style={{ "text-decoration": "none", "list-style": "none", }}>
          {data.map((ele)=>{
            return <div className="card" style={{ "width": "18rem","margin":"20px" }}>
            <img src={ele.Poster} className="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{ele.Title}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="btn" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          })}
        </li>
      </ul>
      {/* <MovieListing /> */}
    </div>
  );
};

export default Home;

//https://www.omdbapi.com/?s=thor&page=1&apikey=65b31166
