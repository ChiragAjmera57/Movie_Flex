let initstate = {
    
    
        data:[],
    no_of_pages : null,
    total_results : null,
    loading:true

   
}
let initstate2 = {
    
    
    data:[],
no_of_pages : null,
total_results : null,
loading:true


}
let initstate3 = {
    
    
    data:[],
no_of_pages : null,
total_results : null,
loading:true


}
export const trendhomereducer = (state=initstate,{type,payload}) => {
const {data,no_of_pages,total_results,loading} = state
    switch (type) {
        case "TrendHome_RESULT":{
            console.log(data);
            return{
               ...state,
                loading:false,
                data:payload.data,
                no_of_pages:payload.no_of_pages,
                total_results:payload.total_results

            }
        }
        case "TrendHome_RESULT_PENDING":{
            return{
                loading : true
            }
        }
       
        
        default:
            return state
    }
}

export const popularhomereducer = (state=initstate2,{type,payload}) => {
const {data,no_of_pages,total_results,loading} = state
    switch (type) {
        case "PopularHome_RESULT":{
            console.log(data);
            return{
               ...state,
                loading:false,
                data:payload.data,
                no_of_pages:payload.no_of_pages,
                total_results:payload.total_results

            }
        }
        case "PopularHome_RESULT_PENDING":{
            return{
                loading : true
            }
        }
       
        
        default:
            return state
    }
}
export const upcominghomereducer = (state=initstate3,{type,payload}) => {
const {data,no_of_pages,total_results,loading} = state
    switch (type) {
        case "UpcomingHome_RESULT":{
            console.log(data);
            return{
               ...state,
                loading:false,
                data:payload.data,
                no_of_pages:payload.no_of_pages,
                total_results:payload.total_results

            }
        }
        case "UpcomingHome_RESULT_PENDING":{
            return{
                loading : true
            }
        }
       
        
        default:
            return state
    }
}