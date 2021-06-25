/*
createStore에 루트 리듀서를 전달한다.
applyMiddleware에 미들웨어 형태의 리덕스 개발 도구를 추가한다.
redux-logger로 store의 변화 값을 확인할 수 있다.
*/

import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import reducers from '../reducers';

export default createStore(reducers, applyMiddleware(logger));