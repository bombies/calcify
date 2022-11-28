import {combineReducers, configureStore} from "@reduxjs/toolkit";
// @ts-ignore
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import storage from "./NoopStorage";
import darkModeSlice from "./DarkModeSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    darkMode: darkModeSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);