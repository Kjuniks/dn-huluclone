"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import requests from "./utils/requests";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  function fetchMovies(genre) {
    axios
      .get(
        `https://api.themoviedb.org/3${
          requests[genre]?.url || requests.fetchTrending.url
        }`
      )
      .then((response) => setMovies(response.data.results));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Header />
      <Nav fetchMovies={fetchMovies} />
      <Results movies={movies} />
    </div>
  );
}
