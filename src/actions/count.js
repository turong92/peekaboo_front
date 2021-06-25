import { SET_COUNT, INCREASE_COUNT, DECREASE_COUNT } from "./types";

export const increaseCount = () => {
    return {
        type: INCREASE_COUNT,
    }
};

export const decreaseCount = () => {
    return {
        type: DECREASE_COUNT,
    }
};

export const setCount = () => {
    return {
        type: SET_COUNT,
    }
};