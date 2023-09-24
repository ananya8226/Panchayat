import {combineReducers} from "redux";
import { blockFilterReducer } from "./blockFilterReducer";
import {mapDataReducer} from './mapDataReducer';
import { loginDataReducer } from "./loginDataReducer";
import { accountDataReducer } from "./accountDataReducer";

export const reducers = combineReducers({
  
    blockFilterReducer: blockFilterReducer,
    mapDataReducer: mapDataReducer,
    loginDataReducer: loginDataReducer,
    accountDataReducer: accountDataReducer,
});