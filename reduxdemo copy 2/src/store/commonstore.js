import {createStore,combineReducers, applyMiddleware} from 'redux';
import {reducer} from '../reducers/crud';
import {secondReducer} from '../reducers/second';
import {LoggerMiddleWare} from '../middlewares/logging';
//export const store = createStore(reducer);
const combine = combineReducers({reducer,secondReducer});
export const store = createStore(combine,applyMiddleware(LoggerMiddleWare));
store.subscribe(()=>{
    console.log('Store is Subscribe ',store.getState());
});
