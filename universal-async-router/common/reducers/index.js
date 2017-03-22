/**
 * Created by Nealyang on 17/3/22.
 */
import {combineReducers} from 'redux'
import { reducerCreator } from 'redux-amrc'
import counter from './counter'

const rootReducer = combineReducers({
    async: reducerCreator({ counter })
});

export default rootReducer;

