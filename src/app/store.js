import { combineReducers, createStore} from 'redux'
import ProductReducer from '../store/reducer/ProductReducer'
const root = combineReducers({
    ProductReducer
})
const store = createStore(root)

export default store