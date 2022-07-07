import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from './library/librarySlice'
import collectionReducer from './collection/collectionSlice'

const store = configureStore({
    reducer: {
        library: libraryReducer,
        collection: collectionReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch