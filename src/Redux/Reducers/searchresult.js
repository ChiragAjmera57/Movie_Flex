let initstate = {
   query:"",
   data:[]
}
export const searchresult = (state=initstate,{type,payload}) => {
const {data} = state
    switch (type) {
        case "SEARCH_RESULT":{
            return {
                query:payload.query,
                data:payload.data
            }
        }
        default:
            return state
    }
}