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