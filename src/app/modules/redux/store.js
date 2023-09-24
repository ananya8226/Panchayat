import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage';
import logger, { createLogger } from "redux-logger";
import { reducers } from "./Reducers";
import { persistStore, persistReducer } from 'redux-persist';


const loggerMiddleware = createLogger();

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers) 

const store = createStore(
    persistedReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);

const persistor = persistStore(store);

export { store, persistor };