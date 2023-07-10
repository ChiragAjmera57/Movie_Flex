import React from "react";
import "./card.scss";
import Img from "../lazyimg/Img";
import ContentWrapper from "../wraper/Wrapper";
import Genre from "../genre/Genre";
import pimage from "../../assets/no-poster.png";
import { useNavigate } from "react-router-dom";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
export default function Card2({ genre, name, rating, link, firstdate,id }) {
  const navigate = useNavigate();
  const genre_value = {
    10759: "Action & Adventure",
16: "Animation",
35: "Comedy",
80: "Crime",
99: "Documentary",
18: "Drama",
10751: "Family",
10762: "Kids",
9648: "Mystery",
10763: "News",
10764: "Reality",
10765: "Sci-Fi & Fantasy",
10766: "Soap",
10767: "Talk",
10768: "War & Politics",
37: "Western",
  };

  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };
  let genre_length = genre.length;
  const g1 = genre_value[genre[0]];
  const g2 = genre_value[genre[1]];
  const todetailpage = (id) =>{
 
    navigate(`/details/${`tv`}/${id}`)
   
   }

  return (

      <div className="card">
        <div className="imagebox" onClick={()=>{todetailpage(id)}}>
          {link ? (
            <Img
              src={`https://image.tmdb.org/t/p/original/${link}`}
              className="posterimg"
            />
          ) : (
            <Img src={pimage} className="posterimg" />
          )}
        </div>
        <div className="onbox">
          <div className="rating">
          <CircularProgress value={rating*10} color={rating>5.5?"green":"orange"}>
  <CircularProgressLabel color="white">{rating}</CircularProgressLabel>
</CircularProgress>
          </div>
          {genre_length > 1 ? (
            <>
              <div id="genre1">
                <Genre g1={g1} />
              </div>
              <Genre g1={g2} />
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="titlebox">
          <div className="title">
            <p>{name}</p>
          </div>
          <div className="releasedata">
            {firstdate ? <p>{firstdate}</p> : <></>}
          </div>
        </div>
      </div>

  );
}
