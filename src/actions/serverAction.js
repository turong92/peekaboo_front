import * as server from "./types";
import axios from "axios";

export const sendObjToServer = (url, obj) => {
    const _result =
    axios.post(url, obj)
    .then(response => {
        return response.data;
    })
    .catch(e => {
        console.error(e);
        return "err";
    });

    return {
        type: server.SEND_OBJ_TO_SERVER,
        payload: "test",
    };
}