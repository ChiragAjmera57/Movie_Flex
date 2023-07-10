export const searchdispatchdone = (payload) =>{
return {type:"SEARCH_RESULT",payload:payload}
}
export const searchdispatchpending = () =>{
return {type:"SEARCH_RESULT_PENDING"}
}
export const exploredispatchdone = (payload) =>{
return {type:"EXPLORE_RESULT",payload:payload}
}
export const exploredispatchpending = () =>{
return {type:"EXPLORE_RESULT_PENDING"}
}
export const trendhomedispatchdone = (payload) =>{
return {type:"TrendHome_RESULT",payload:payload}
}
export const trendhomedispatchpending = () =>{
return {type:"TrendHome_RESULT_PENDING"}
}
export const pophomedispatchdone = (payload) =>{
return {type:"PopularHome_RESULT",payload:payload}
}
export const pophomedispatchpending = () =>{
return {type:"PopularHome_RESULT_PENDING"}
}
export const uphomedispatchdone = (payload) =>{
return {type:"UpcomingHome_RESULT",payload:payload}
}
export const uphomedispatchpending = () =>{
return {type:"UpcomingHome_RESULT_PENDING"}
}
export const singledatadispather = (payload) =>{
return {type:"Single_RESULT",payload:payload}
}
export const singledatapendingdispather = () =>{
return {type:"Single_RESULT_PENDING"}
}