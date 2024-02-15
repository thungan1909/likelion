import { SUCCESS, ERROR } from "../constants";


const initState = {
    msg: "",
    status: false,
    isLoading: false
}
export default function alertReducer(state = initState, action)
{
    switch(action.type)
    {
        case SUCCESS:
           return {
                ...state,
                msg: action.payload,
                status: true,
                isLoading: false
           }
        case ERROR: 
           return {
                ...state,
                msg: action.payload,
                status: false,
                isLoading: false
           }
        default: 
           return state;
    }
}