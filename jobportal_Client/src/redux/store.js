import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import  {thunk}  from "redux-thunk";
import { jobPostReducer } from "./JobPost/jobPost.reducer";
import { authReducer } from "./Auth/auth.reducer";
import { indutryReducer } from "./Industry/industry.reducer";
import {forgotPasswordReducer} from "./ForgotPassword/forgotPassword.reducer"
const rootReducer = combineReducers({
    auth:authReducer,
    jobPost:jobPostReducer,
    industry:indutryReducer,
    forgotPassword: forgotPasswordReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))