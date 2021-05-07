import headerReducer from '../components/header/sotre';
import { combineReducers } from 'redux';
export default combineReducers({
    header: headerReducer
})
