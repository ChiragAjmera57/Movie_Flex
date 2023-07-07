import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../../utils/app'
import useFetch from '../../components/hooks/usefetch'
import Img from '../../components/lazyimg/Img'
import Wrapper from '../../components/wraper/Wrapper'
import './herobanner.scss'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Herobanner() {
    const [upcomingdata,setdata] = useState(null)
    const [bannerurl,seturl] = useState(null)
    const {data,loading} = useFetch("movie/upcoming")
    const[query,setquery] = useState("")
    const navigate = useNavigate();
   
    useEffect(()=>{
        const random = Math.floor(Math.random() * 20)
        data?seturl(`https://image.tmdb.org/t/p/original/${data.results[random].backdrop_path}`):seturl(null)
        
    },[data])
    const handleenter = (e) => {
        <Navigate to={`/search/${query}`}></Navigate>

        if(e.key=='Enter'&&query.length>0){
            navigate(`/search/${query}`);
        }
    }
  return (
    <>
    <div className='heroBanner'>
        {!loading&&(
                <div className="backdrop-img">
                    <Img src={bannerurl} />
                    
                </div>
            )}

            <div className="opacity-layer"></div>
            <Wrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setquery(e.target.value)}
                            onKeyUp={handleenter}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </Wrapper>
            
            </div>
           
            </>
  )
}
