import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import  {thunk}  from "redux-thunk";
import { jobPostReducer } from "./JobPost/jobPost.reducer";
import { authReducer } from "./Auth/auth.reducer";
const rootReducer = combineReducers({
    auth:authReducer,
    jobPost:jobPostReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))