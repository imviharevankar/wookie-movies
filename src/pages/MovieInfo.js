import React from "react";
import { useLocation } from "react-router-dom";
import "./MovieInfo.css";

const MovieInfo = () => {
  const location = useLocation();
  const movieData = location?.state;

  return (
    <div className="movieinfo">
      <div className="movieinfo__bg">
        <img className="bg" src={movieData?.backdrop} />
      </div>
      <div className="movieinfo__body">
        <div className="movieinfo__poster">
          <img className="poster" src={movieData?.poster} alt="poster" />
        </div>
        <div className="movieinfo__content">
          <p className="movieinfo__title">{movieData?.title}</p>
          <div className="movieinfo__cast">
            <p className="movieinfo__type">Cast</p>

            {movieData?.cast?.map((item) => {
              return (
                <p key={item} className="movieinfo__pill">
                  {item}
                </p>
              );
            })}
          </div>
          <div className="movieinfo__cast">
            <p className="movieinfo__type">Director</p>
            {Array.isArray(movieData?.director) ? (
              movieData?.director?.map((item) => {
                return (
                  <p key={item} className="movieinfo__pill">
                    {item}
                  </p>
                );
              })
            ) : (
              <p className="movieinfo__pill">{movieData?.director}</p>
            )}
          </div>

          <div className="movieinfo__cast">
            <p className="movieinfo__type">Genres</p>

            {movieData?.genres?.map((item) => {
              return (
                <p key={item} className="movieinfo__pill">
                  {item}
                </p>
              );
            })}
          </div>

          <div className="movieinfo__cast">
            <p className="movieinfo__type">Runtime</p>
            <p className="movieinfo__p">{movieData?.length}</p>
          </div>
          <div className="movieinfo__cast">
            <p className="movieinfo__type">Release Date</p>
            <p className="movieinfo__p">
              {new Date(movieData?.released_on).toLocaleDateString("en-US", {
                dateStyle: "medium",
              })}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="movieinfo__overview">{movieData?.overview}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
