let initstate = {
    mediatype:null,
    data:[],
    no_of_pages : null,
    total_results : null,
    loading:true
 }
 export const exploremedia = (state=initstate,{type,payload}) => {
 const {data,total_results,no_of_pages,loading,mediatype} = state
     switch (type) {
        case "EXPLORE_RESULT" :{
            return {
                data:payload.data,
                total_results:payload.total_results,
                no_of_pages:payload.no_of_pages,
                loading:false,
                mediatype:payload.mediatype
            }
        }
        case "EXPLORE_RESULT_PENDING" :{
            return {
                ...state,
                loading:true
            }
        }
         default:
             return state
     }
 }