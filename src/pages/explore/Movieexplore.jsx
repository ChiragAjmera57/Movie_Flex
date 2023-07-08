import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { exploredispatchdone, exploredispatchpending } from '../../Redux/actiontype';
import { fetchDataFromApi } from '../../utils/app';
import ContentWrapper from '../../components/wraper/Wrapper';
import Sket from '../../components/skeleton/Sket';
import noresults from "../../assets/no-results.png"
import Drop from '../../components/dropdown/Dropdown';
import Card from '../../components/carddesign/Card';
import Card2 from '../../components/carddesign/Card2';
import Select from 'react-select';
import './movieeexplore.scss'

export default function Movieexplore() {
  const location = useLocation();
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);
      const mediatype = useParams().mediatype
      const [pageno , setpage] = useState(1)
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.exploremedia)
  
const getdata = () => {
  dispatch(exploredispatchpending())
  fetchDataFromApi(`discover/${mediatype}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pageno}`).then((res)=>{
    const data = res.results
    const no_of_pages = res.total_pages
    const total_results = res.total_results
    dispatch(exploredispatchdone({data,no_of_pages,total_results,mediatype}))
    
  })
  
}
useEffect(()=>{
  getdata()
},[pageno,mediatype])
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
       ):( <>
       <div className="filterbox">
        <div className="multibox">
        <Select
        
      isMulti
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        className="react-select-container genresDD"
       classNamePrefix="react-select"
        options={options}
      />
        </div>
        <div className="singlebox">
        <Select
      className="react-select-container genresDD"
      classNamePrefix="react-select"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
        </div>
       </div>
       
       
       
       
       
     
       <div id='searchbox'>

      
         
         
<div className='cssGrid' >
        {
           state.data?.map((ele)=>{

            let rating = ele.vote_average?.toFixed(1);
            return(
             
              
                  <div key={ele.id} className='griditem'  >
                   {state.mediatype=="movie"?(
                     <Card key={ele.id} genre={ele.genre_ids} title={ele.title} rating={rating} link={ele.poster_path} date={ele.release_date}/>
                   ):(
                     <Card2 key={ele.id} genre={ele.genre_ids} name={ele.name} rating={rating} link={ele.poster_path} firstdate={ele.first_air_date
                     }/>
                   )}
                    
                
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
</div>
      </>)
    
    )}
  



</ContentWrapper>
    )
}
