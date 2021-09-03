import * as server from "./types";
import axios from "axios";

const getResponse = (url, obj) => {
    const _result = 
    axios.post(url, obj)
        .then(response => {
            return response.data;
        })
        .catch(e => {
            console.error(e);
            return "err";
        })
    return _result;
}

export const sendObjToServer = (url, obj) => {
    getResponse(url, obj).then(result => {obj.result = result});

    return {
        type: server.SEND_OBJ_TO_SERVER,
        payload: obj,
    };
}