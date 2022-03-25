import { combineReducers } from "redux";
import todoReducer from "./todo";


const rootReducer = combineReducers({
    todo: todoReducer
    // For now this object is empty since we did not create any reducers yet
    // We will create one that will handle todo list state after
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;