import {SUCCESS, ERROR} from '../constants/index'
//payload: là message nhận vào
export const alertSuccess = (payload) => {
    return {
        type: SUCCESS,
        payload
        // payload: payload
    }
}
export const alertError = (payload) => {
    return {
        type: ERROR,
        payload
    }
}