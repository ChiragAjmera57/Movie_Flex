let initstate = {
   query:"",
   data:[],
   no_of_pages : null,
   total_results : null,
   loading:true
}
export const searchresult = (state=initstate,{type,payload}) => {
const {data,total_results,no_of_pages,loading} = state
    switch (type) {
        case "SEARCH_RESULT":{
            return {
                loading:false,
                query:payload.query,
                data:payload.data,
                no_of_pages:payload.no_of_pages,
                total_results:payload.total_results
                
            }
        }
        case "SEARCH_RESULT_PENDING":{
            return {
                loading:true
                
            }
        }
        default:
            return state
    }
}