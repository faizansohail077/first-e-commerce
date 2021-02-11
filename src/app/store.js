import { combineReducers, createStore } from 'redux'
import ProductReducer from '../store/reducer/ProductReducer'
import CartReducer from '../store/reducer/cartReducer'
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blackList:['CartReducer','ProductReducer']
}

const rootReducer = combineReducers({
    ProductReducer,
    
    CartReducer,
})
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// export let store = createStore(persistedReducer, devToolsEnhancer())
export let store = createStore(rootReducer, devToolsEnhancer())
store.subscribe(()=>{
    console.log('===========================',store.getState())
})
// export let persistor = persistStore(store)
