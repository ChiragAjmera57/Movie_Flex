import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/hooks/usefetch';
import { fetchDataFromApi } from '../../utils/app';
import { useDispatch, useSelector } from 'react-redux';
import { searchdispatcherv } from '../../Redux/actiontype';
import Card from '../../components/carddesign/Card';
import ContentWrapper from '../../components/wraper/Wrapper';

export default function Searchresult() {
  const query = useParams().query
  const [data,setdata] = useState(null)
  const [pageno , setpage] = useState(1)
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.searchresult.data)
  
const getdata = () => {
  
  fetchDataFromApi(`search/multi?query=${query}&include_adult=false&language=en-US&page=${pageno}&sort_by=popularity.desc`).then((res)=>{

    const data = res.results
    dispatch(searchdispatcherv({data,query}))
    
  })
  
}
useEffect(()=>{
  getdata()
},[pageno])

  return (
      <ContentWrapper >
         <div id='searchcontainer'>
    <h1>showing results for {query}</h1>
      {
        state?.map((ele,i)=>{
          console.log(ele);
          let rating = ele.vote_average?.toFixed(1);
          return <Card genre={ele.genre_ids} title={ele.title} rating={rating} link={ele.poster_path}/>
        })
      }
      <button onClick={()=>setpage((prev)=>prev-1)}>prev</button>
      <p>{pageno}</p>
      <button onClick={()=>setpage((prev)=>prev+1)}>next</button>
   </div>
      </ContentWrapper>
   
  )
}
