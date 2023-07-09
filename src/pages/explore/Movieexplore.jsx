import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  exploredispatchdone,
  exploredispatchpending,
} from "../../Redux/actiontype";
import { fetchDataFromApi } from "../../utils/app";
import ContentWrapper from "../../components/wraper/Wrapper";
import Sket from "../../components/skeleton/Sket";
import noresults from "../../assets/no-results.png";
import Card from "../../components/carddesign/Card";
import Card2 from "../../components/carddesign/Card2";
import Select from "react-select";
import "./movieeexplore.scss";
import { Progress } from "@chakra-ui/react";

export default function Movieexplore() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const options2 = [
    { value: 28, label: "Action",},
    { value: 12, label: "Adventure",},
    { value: 16, label: "Animation",},
    { value: 35, label: "Comedy",},
    { value: 80, label: "Crime",},
    { value: 99, label: "Documentary",},
    { value: 18, label: "Drama",},
    { value: 10751, label: "Family",},
    { value: 14, label: "Fantasy",},
    { value: 36, label: "History",},
    { value: 27, label: "Horror",},
    { value: 10402, label: "Music",},
    { value: 9648, label: "Mystery",},
    { value: 10749, label: "Romance",},
    { value: 878, label: "Science Fiction",},
    { value: 10770, label: "TV Movie",},
    { value: 53, label: "Thriller",},
    { value: 10752, label: "War",},
    { value: 37, label: "Western",},
  ];
  const options = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "revenue.asc", label: "Revenue Ascending" },
    { value: "revenue.desc", label: "Revenue Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "primary_release_date.asc", label: "Release Date ↑" },
    { value: "primary_release_date.desc", label: "Release Date ↓" },
  ];
  const [genre, setgenre] = useState("");
  const [sortby, setsortby] = useState(options[0]);
  var genrevalues = ""
  
  for(let i = 0;i<genre.length;i++){
    genrevalues += genre[i].value +","
  }


  const mediatype = useParams().mediatype;
  const [pageno, setpage] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.exploremedia);

  const getdata = () => {
    dispatch(exploredispatchpending());
    fetchDataFromApi(
      `discover/${mediatype}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pageno}&sort_by=${sortby.value}&with_genres=${genrevalues}`
      
    ).then((res) => {
      const data = res.results;
      const no_of_pages = res.total_pages;
      const total_results = res.total_results;
      dispatch(
        exploredispatchdone({ data, no_of_pages, total_results, mediatype })
      );
      window.scrollTo(0, 0);
    });
  };
  useEffect(() => {
    getdata();
  }, [pageno, mediatype,sortby,genrevalues]);
  return (
    <ContentWrapper>
      {state.loading ? (
        <div className="sketbox">
          <div className="searchbox">
            <div className="cssGrid">
              <Sket />
              <Sket />
              <Sket />
              <Sket />
              <Sket />
              <Sket />
              <Sket />
              <Sket />
              <Sket />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="filterbox">
            <div className="multibox">
              <Select
              isSearchable={false}
                isMulti
                defaultValue={genre}
                onChange={setgenre}
                className="react-select-container genresDD"
                classNamePrefix="react-select"
                placeholder="Select Genre"
                options={options2}
              />
            </div>
            <div className="singlebox">
              <Select
               isSearchable={false}
                defaultValue={options[0]}
                className="react-select-container genresDD"
                classNamePrefix="react-select"
                onChange={setsortby}
                options={options}
                
              />
            </div>
          </div>

          <div id="searchbox">
           {  state.total_results == 0 ? (
                <div className="noresults">
                  <img src={noresults} className="noresultsimg" />
                  <p id="ptag">Sorry! No results found :( </p>
                  <p id="pline">
                    We are sorry what you were looking for. Please try another way{" "}
                  </p>
                </div>
              ):(<>
              <div className="cssGrid">
              {state.data?.map((ele,i) => {
                let rating = ele.vote_average?.toFixed(1);
                return (
                  <div key={ele.id} className="griditem">
                    {state.mediatype == "movie" ? (
                      <Card
                        key={i}
                        genre={ele.genre_ids}
                        title={ele.title}
                        rating={rating}
                        link={ele.poster_path}
                        date={ele.release_date}
                        id={ele.id}
                      />
                    ) : (
                      <Card2
                        key={i  }
                        genre={ele.genre_ids}
                        name={ele.name}
                        rating={rating}
                        link={ele.poster_path}
                        firstdate={ele.first_air_date}
                        id={ele.id}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div id="bottombtn">
              <button
                disabled={pageno <= 1}
                className={pageno <= 1 ? "disableclass" : "b"}
                onClick={() => setpage((prev) => prev - 1)}
              >
                Previous
              </button>
              <button>{pageno}</button>
              <button
                disabled={pageno >= state.no_of_pages}
                className={pageno >= state.no_of_pages ? "disableclass" : "b"}
                onClick={() => setpage((prev) => prev + 1)}
              >
                Next
              </button>
            </div></>)
            }
            
          </div>
        </>
      )}
    </ContentWrapper>
  );
}
