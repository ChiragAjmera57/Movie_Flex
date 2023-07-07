import React from "react";
import "./card.scss";
import Img from "../lazyimg/Img";
import ContentWrapper from "../wraper/Wrapper";
import Genre from "../genre/Genre";
export default function Card({genre,title,rating,link}) {
  const genre_value = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
 };

const g1 = genre_value[genre[0]];
const g2 = genre_value[genre[1]];

  return (
    
    <ContentWrapper >
        <div className="card">
        <div className="imagebox">
          <Img
            src={`https://image.tmdb.org/t/p/original/${link}`}
            className="posterimg"
          />
        </div>
        <div className="onbox">
          <div className="rating">{rating}</div>
          <div id="genre1">
          <Genre g1={g1} />

          </div>
          <Genre g1={g2}/>
        </div>
      

      <div className="titlebox">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="releasedata">
          <p>Mar 14,1972</p>
        </div>
      </div>
      </div>
    </ContentWrapper>

      
  );
}
