import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./carousel.scss";
import ContentWrapper from "../wraper/Wrapper";
import Card from "../carddesign/Card";
import Sket from "../skeleton/Sket";

const Carousel = ({ data, loading, title }) => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />

        <div className="carouselItems" ref={carouselContainer}>
      {loading?(<>
      
        <Sket />
        <Sket />
        <Sket />
        <Sket />
        <Sket />
        <Sket />
        <Sket />
        <Sket /></>
      ):(
        data?.map((ele, i) => {
          let rating = ele.vote_average?.toFixed(1);

          return (
            <ContentWrapper key={i}>
              <Card
                id={ele.id}
                key={i}
                genre={ele.genre_ids}
                title={ele.title}
                rating={rating}
                link={ele.poster_path}
                date={ele.release_date}
              />
            </ContentWrapper>
          );
        })
      )}
              
              
          
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
