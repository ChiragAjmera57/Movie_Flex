import { combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import { homereducer } from "./Reducers/homereducer";
import { searchresult } from "./Reducers/searchresult";

const reducedReducer = combineReducers(
    {
        home:homereducer,
        searchresult:searchresult
        
    }
)

export const store = legacy_createStore(reducedReducer)