import { configureStore } from "@reduxjs/toolkit"
import TodoReducer from "./todoSlice"
import { combineReducers } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const reducers = combineReducers({
  todos: TodoReducer
})
const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer
})
export const persistor = persistStore(store)

export default store
