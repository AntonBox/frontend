import { combineReducers } from "redux";
import fetchFans from './fans';
import sendUsername from './username';

const rootReducer = combineReducers({sendUsername, fetchFans});

export default rootReducer;