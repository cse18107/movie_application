import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movie/:imdbID" element={<MovieDetail />} />

          <Route path="/" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
