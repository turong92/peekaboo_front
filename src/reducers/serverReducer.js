import { SEND_OBJ_TO_SERVER } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case SEND_OBJ_TO_SERVER:
            return {
                ...state,
                result: action.payload,
            };
        default:
            return state;
    }
}