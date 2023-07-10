import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/app";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../components/wraper/Wrapper";
import nolog from '../../assets/avatar.png'
import dayjs from "dayjs";
import {
  singledatadispather,
  singledatapendingdispather,
} from "../../Redux/actiontype";
import "./details.scss";
import { CircularProgress, CircularProgressLabel, Image } from "@chakra-ui/react";
import Img from "../../components/lazyimg/Img";
import {BsCollectionPlay} from 'react-icons/bs'
import {MdOutlineCollections} from 'react-icons/md'
import Genre from "../../components/genre/Genre";

export default function Details() {
  const data = useParams();
  const dispatch = useDispatch();
  const [cast,setcast] = useState(null)
  const [key,setkey] = useState(null)
   const state = useSelector((state) => state.singledata);
  const getvideo =  () => {
    fetchDataFromApi(`movie/${data.id}/videos`).then((res) => {
      res.results.map((ele)=>{
        if(ele.name==="Official Trailer"&& ele.official){
          setkey(ele.key)
        } 
      })
    
    });
  };
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
};
  const getcast = () =>{
    fetchDataFromApi(`${data.mediatype}/${data.id}/credits`).then((res)=>{
     
      setcast(res.cast.slice(0,4))
      
    })
  }
  const getdata = () => {
    
    dispatch(singledatapendingdispather());
    fetchDataFromApi(`${data.mediatype}/${data.id}`).then((res) => {
      console.log(res);
      const name = res.name;
      const title = res.title;
      const status = res.status;
      const vote_average = res.vote_average;
      const release_date = res.release_date;
      const overview = res.overview;
      const imdb_id = res.imdb_id;
      const genres = res.genres;
      const poster_path = res.poster_path;
      const runtime = res.runtime;
      const backdrop_path = res.backdrop_path;
      const number_of_episodes = res.number_of_episodes

      dispatch(
        singledatadispather({
          name,
          title,
          status,
          vote_average,
          release_date,
          overview,
          imdb_id,
          genres,
          poster_path,
          runtime,
          backdrop_path,
          number_of_episodes
        })
      );
    });
  };
  useEffect(() => {
   
    getdata();
  if(data.mediatype=="movie"){
    getvideo();
  }
    getcast();

  }, [data]);
  const {
    title,
    status,
    vote_average,
    release_date,
    overview,
    imdb_id,
    genres,
    poster_path,
    runtime,
    backdrop_path,
    number_of_episodes,
    name
  } = state;

  let rating = vote_average?.toFixed(1);

  return (
    <Wrapper>
      {state.loading?(<></>):(
        <>
        <div className="maindetail" style={{backgroundImage:`url(${`https://image.tmdb.org/t/p/original/${poster_path}`})`}}>

        <div className="details" >
        <div className="topsection">
          <div className="left">
            <div className="names"><p>{title?title:name}</p></div>
            <div className="mediatype">
              <p>{data.mediatype == "movie" ? "Movie" : "Tv Show"}</p>
              
            </div>
            <div className="mediatype">
              <p>{data.mediatype == "movie" ? "Movie" : "Tv Show"}</p>
              
            </div>
            <div className="date">{dayjs(release_date).format("MMM D, YYYY")}</div>
            <div className="status">{status}</div>
          </div>
          <div className="right">
            <div className="rating">
            <p>IMDb RATING</p>
              <CircularProgress
              id="progress"
              
              mt={15}
                value={rating * 10}
                color={rating > 7 ? "green" : rating >= 4 ? "orange" : "red"}
              >
                <CircularProgressLabel color="white"  >
                  {rating}
                </CircularProgressLabel>
              </CircularProgress>
            </div>
            <div className="time">{runtime?toHoursAndMinutes(runtime):`Episodes:${number_of_episodes}`}</div>
          </div>
        </div>
        <div className="middlesection">
          <div className="left">
            <Img src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
          </div>
          <div className="middle">
            {data.mediatype == "movie" ? (
              <iframe src={`https://www.youtube.com/embed/${key}?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&  `} width="560" height="315" ></iframe>
            ) : (
               <div className="postimage" style={{width:"600px"}}>

                 <Img  src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
               </div>
            )}
          </div>
          <div className="end">
            <a  target="_blank" href={`https://www.imdb.com/title/${imdb_id}/videogallery/`}>
            <div className="videolink" >
              <BsCollectionPlay className="videocollection" color="white" />
              
              <p>Videos</p>
            </div>
            </a>
            <a target="_blank" href={`https://www.imdb.com/title/${imdb_id}/mediaindex`}>
            <div className="photolink">
              <MdOutlineCollections className="photocollection"  color="white" />
              
              <p>Photos</p>
            </div>
            </a>
            
          </div>
        </div>
        <div className="bottomsection">
          <div className="genres">
                {genres.map((ele,i)=>{
                  return (<p key={i}>{ele.name}</p>)
                })}
          </div>
          <div className="overview">
            <p>Overview</p>
            <p>{overview}</p>
          </div>
          <div className="break"></div>
          <p className="topcast">Top Cast</p>
          <div className="cast">
            {cast?.map((ele,i)=>{
              return (
                <div key={i} className="castbox">
                  {ele.profile_path?( <Image
  borderRadius='full'
  boxSize='160px'
  src={`https://image.tmdb.org/t/p/original/${ele.profile_path}`}
  alt={ele.name}
/>):(<Image
  borderRadius='full'
  boxSize='160px'
  src={nolog}
  alt={ele.name}
/>)}
                 
              
              <p>{ele.name}</p>
            </div>
              )
              
            })}
                    
          </div>
        </div>
      </div>
        </div>
      
      </>)}
    </Wrapper>
  );
}
