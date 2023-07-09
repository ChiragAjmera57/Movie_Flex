import { combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import { searchresult } from "./Reducers/searchresult";
import { exploremedia } from "./Reducers/explorereducer";
import { popularhomereducer, trendhomereducer, upcominghomereducer } from "./Reducers/homereducer";

const reducedReducer = combineReducers(
    {
        trendhome:trendhomereducer,
        pophome:popularhomereducer,
        uphome:upcominghomereducer,
       
        searchresult:searchresult,
        exploremedia:exploremedia
        
    }
)

export const store = legacy_createStore(reducedReducer)