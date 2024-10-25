import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { jobPostReducer } from "./JobPost/jobPost.reducer";

const rootReducer = combineReducers({
    jobPost:jobPostReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))