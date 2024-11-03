import { combineReducers } from "redux";
import repositoryReducer from "./repositoriesReducer";


const reducer=combineReducers({
    repositories:repositoryReducer
})


export default reducer;


export type RootState =ReturnType<typeof reducer>;