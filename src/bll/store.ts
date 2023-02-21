import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/LocalStorageUtils";


const rootReducer = combineReducers({
    counter: counterReducer
})


export type AppStateType = ReturnType<typeof rootReducer>


export const store = legacy_createStore(rootReducer,loadState(),applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter:store.getState().counter
    })
})