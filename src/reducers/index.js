import { combineReducers } from "redux";
import user from './userReducer';
import count from './countReducer';

const rootReducer = combineReducers({
    user,
    count,
});

export default rootReducer;

/*
src/reducers/index.js -> root store
index 파일에 combineReducers로 reducer를 하나로 모아준다.
*/