import { combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import { homereducer } from "./Reducers/homereducer";
import { searchresult } from "./Reducers/searchresult";
import { exploremedia } from "./Reducers/explorereducer";

const reducedReducer = combineReducers(
    {
        home:homereducer,
        searchresult:searchresult,
        exploremedia:exploremedia
        
    }
)

export const store = legacy_createStore(reducedReducer)