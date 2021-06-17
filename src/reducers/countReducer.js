import * as countActions from "../actions/types";

const initialState = {
    count: 0,
}

const reducers = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case countActions.INCREASE_COUNT:
            return { ...state, count: state.count+1 }
        case countActions.DECREASE_COUNT:
            return { ...state, count: state.count-1 }
        default:
            return state;
    }
}

export default reducers;