import { combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import { searchresult } from "./Reducers/searchresult";
import { exploremedia } from "./Reducers/explorereducer";
import { popularhomereducer, trendhomereducer, upcominghomereducer } from "./Reducers/homereducer";
import { singledetails } from "./Reducers/singledetails";

const reducedReducer = combineReducers(
    {
        trendhome:trendhomereducer,
        pophome:popularhomereducer,
        uphome:upcominghomereducer,
        singledata:singledetails,
       
        searchresult:searchresult,
        exploremedia:exploremedia
        
    }
)

export const store = legacy_createStore(reducedReducer)