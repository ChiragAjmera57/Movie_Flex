import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/hooks/usefetch';
import { fetchDataFromApi } from '../../utils/app';
import { useDispatch, useSelector } from 'react-redux';
import { searchdispatchdone, searchdispatchpending } from '../../Redux/actiontype';
import Card from '../../components/carddesign/Card';
import ContentWrapper from '../../components/wraper/Wrapper';
import noresults from "../../assets/no-results.png"
import { Grid, GridItem } from '@chakra-ui/react'
import "./searchresult.scss"
import { useLocation } from 'react-router-dom';
import Sket from '../../components/skeleton/Sket';
import Drop from '../../components/dropdown/Dropdown';

export default function Searchresult() {
  const query = useParams().query
  const [pageno , setpage] = useState(1)
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.searchresult)
  
const getdata = () => {
  dispatch(searchdispatchpending())
  fetchDataFromApi(`search/movie?query=${query}&include_adult=false&language=en-US&page=${pageno}&sort_by=popularity.desc`).then((res)=>{
    const data = res.results
    const no_of_pages = res.total_pages
    const total_results = res.total_results
    dispatch(searchdispatchdone({data,query,no_of_pages,total_results}))
    
  })
  
}
useEffect(()=>{
  getdata()
},[pageno,query])
console.log(state.loading);
  return (
      
        <ContentWrapper  >
           {state.loading?(
             <div className="sketbox">
             <div className="searchbox">
              <div className="cssGrid" >
               
                <Sket  />
                <Sket  />
                <Sket  />
                <Sket  />
                <Sket  />
                <Sket  />
                <Sket  />
                <Sket  />
                <Sket  />
                </div>
              </div>
             </div>
           ):(
            
              state.total_results==0?(
                <div className="noresults">
                  <img src={noresults} className='noresultsimg' />
                  <p id='ptag'>Sorry! No results found :( </p>
                  <p id='pline'>We are sorry what you were looking for. Please try another way </p>
                </div>
              ):( <div className='searchbox'>

              <h1  >showing results for " {query} " ({state.total_results})</h1>
                
                 
                  <div className='cssGrid' >
                          {
                             state.data?.map((ele)=>{
          
                              let rating = ele.vote_average?.toFixed(1);
                              return(
                               
                                
                                    <div key={ele.id} className='griditem'  >
                                      
                                  <Card key={ele.id} genre={ele.genre_ids} title={ele.title} rating={rating} link={ele.poster_path} date={ele.release_date}/>
                                  </div>
                              )
                              
                            })
                          }
                  
                  </div>
                 
                
                <div id="bottombtn">
                <button disabled={pageno<=1} className={pageno<=1?"disableclass":"b"} onClick={()=>setpage((prev)=>prev-1)}>Previous</button>
                <button>{pageno}</button>
                <button disabled={pageno>=state.no_of_pages} className={pageno>=state.no_of_pages?"disableclass":"b"} onClick={()=>setpage((prev)=>prev+1)}>Next</button>
                </div>
             </div>)
           
           )}
         
       
       
     
      </ContentWrapper>
   
   
  )
}
