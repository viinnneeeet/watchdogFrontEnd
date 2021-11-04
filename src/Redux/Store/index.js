import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { rootReducer } from '../Reducers'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import { logger } from 'redux-logger'

//store
const persistConfig = {
    key: 'root',
    storage,
    stateReconsiler: autoMergeLevel2,
}
const initialState = {}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk, logger)
)

export const persistor = persistStore(store)
