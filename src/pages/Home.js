import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import "./Home.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [drama, setDrama] = useState([]);
  const [thriller, setThriller] = useState([]);
  const [action, setAction] = useState([]);
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState("");
  const [res, setRes] = useState([]);

  const url = "https://wookie.codesubmit.io/movies";

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer Wookie2019",
    },
  };

  const fetchMovies = () => {
    setLoader(true);
    axios
      .get(url, config)
      .then((res) => {
        setLoader(false);
        setMovies(res?.data?.movies);
        let movies = res?.data?.movies;
        setDrama(
          movies?.filter((item) => {
            return item?.genres.find((item) => item === "Drama") === "Drama";
          })
        );
        setThriller(
          movies?.filter((item) => {
            return (
              item?.genres?.find((item) => item === "Thriller") === "Thriller"
            );
          })
        );

        setAction(
          movies?.filter((item) => {
            return item?.genres?.find((item) => item === "Action") === "Action";
          })
        );
      })

      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  const iterateArray = () => {
    setRes(
      movies?.filter((item) => {
        return item?.title.toLowerCase().includes(query);
      })
    );
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    iterateArray();
  }, [query]);

  return (
    <div>
      {loader ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : null}

      <div>
        <input
          placeholder="Search Movies..."
          onChange={(e) => setQuery(e?.target?.value)}
          className="home__input"
        />
      </div>

      {res?.length !== 0 && query !== "" ? (
        <MovieList
          data={res}
          title={`Found ${res?.length} results for ${query}`}
        />
      ) : (
        <>
          {res?.length === 0 && query !== "" ? (
            <p className="movielist__title">No results found for {query}</p>
          ) : null}

          <MovieList data={drama} title="Genre Drama" />
          <MovieList data={thriller} title="Genre Thriller" />
          <MovieList data={action} title="Genre Action" />
        </>
      )}
    </div>
  );
};

export default Home;
