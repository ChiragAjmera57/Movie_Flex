import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/app";
import { useDispatch, useSelector } from "react-redux";
import {
    pophomedispatchdone,
    pophomedispatchpending,
  
  
} from "../../Redux/actiontype";
import Carousel from "../../components/carousel/Carouel";
import ContentWrapper from "../../components/wraper/Wrapper";

export default function Popular() {
  const dispatch = useDispatch();
  const [page,setpage] = useState(1)
  const state = useSelector((state) => state.pophome);



  const getdata = () => {
    dispatch(pophomedispatchpending());
    fetchDataFromApi(`movie/popular`).then((res) => {
      const data = res.results;
      const no_of_pages = res.total_pages;
      const total_results = res.total_results;
      dispatch(pophomedispatchdone({ data, no_of_pages, total_results }));
      window.scrollTo(0, 0);
    });
  };
  const arr = state.data;
  console.log(arr);

  useEffect(() => {
    getdata();
  }, [page]);
 
  return (
    <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle"></span>
       
    </ContentWrapper>
    <Carousel data={arr} loading={state.loading} title={"Popular"} />
</div>
  );
}
