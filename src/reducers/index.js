import { combineReducers } from "redux";
import user from './user';

const rootReducer = combineReducers({
    user,
});

export default rootReducer;

/*
src/reducers/index.js -> root store
index 파일에 combineReducers로 reducer를 하나로 모아준다.
*/