import { combineReducers } from 'redux'
import Reducers from './Reducer'

const allReducers = combineReducers({
    mas: Reducers
})
export default allReducers