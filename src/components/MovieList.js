import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ data, title }) => {
  return (
    <div>
      <h1 className="movielist__title"> {title}</h1>
      <div className="movielist scrollbar-hidden">
        {data?.map((item) => (
          <MovieCard
            data={item}
            id={item?.id}
            key={item?.id}
            imgLink={item?.poster}
            title={item?.title}
            rating={item?.imdb_rating}
            releaseDate={item?.released_on}
            classification={item?.classification}
            runtime={item?.length}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
