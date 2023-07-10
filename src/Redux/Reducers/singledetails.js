let initstate = {
title : null, 
status : null, 
vote_average : null, 
release_date : null, 
overview : null, 
imdb_id : null,  
genres : [], 
poster_path : null,  
loading:true,
runtime:null,
backdrop_path:null,
number_of_episodes:null,
name:null

}
export const singledetails = (state=initstate,{type,payload}) => {
const {title,status,vote_average,release_date,overview,imdb_id ,genres ,poster_path ,loading,runtime,backdrop_path,number_of_episodes,name} = state
    switch (type) {
        case "Single_RESULT":{
            return{
                title : payload.title, 
                status : payload.status, 
                vote_average : payload.vote_average, 
                release_date : payload.release_date, 
                overview : payload.overview, 
                imdb_id : payload.imdb_id,  
                genres : payload.genres, 
                poster_path : payload.poster_path,  
                loading:false,
                runtime:payload.runtime,
                backdrop_path:payload.backdrop_path,
                number_of_episodes:payload.number_of_episodes,
                name:payload.name
            }
        }
        case "Single_RESULT_PENDING":{
            return{
                loading : true
            }
        }
       
        
        default:
            return state
    }
}