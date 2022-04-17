import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
import { FaImdb } from "react-icons/fa";

const MovieCard = ({
  data,
  id,
  imgLink,
  runtime,
  releaseDate,
  rating,
  classification,
  title,
}) => {
  const navigate = useNavigate();
  const date = new Date(releaseDate).toLocaleDateString("en-US", {
    dateStyle: "medium",
  });

  const navigateToMovie = () => {
    navigate(`/movie/${id}`, {
      state: data,
    });
  };
  return (
    <div onClick={navigateToMovie} className="moviecard">
      <div className="moviecard__poster">
        <img className="poster__img" src={imgLink} alt="poster" />
      </div>
      <p className="moviecard__title">{title}</p>
      <p className="moviecard__content">{date}</p>
      <p className="moviecard__content">{runtime}</p>
      <div className="moviecard__footer">
        <div className="moviecard__rating">
          <FaImdb color="#F3CE13" size={"1.25rem"} />
          <p style={{ marginLeft: "2px" }} className="moviecard__content">
            {rating}
          </p>
        </div>
        <p className="moviecard__content moviecard__block">{classification}</p>
      </div>
    </div>
  );
};

export default MovieCard;
