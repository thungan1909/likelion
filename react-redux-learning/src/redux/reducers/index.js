import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
const rootReducer = combineReducers({
    // phải combine xong mới chạy được
        alert: alertReducer
});
export default rootReducer;