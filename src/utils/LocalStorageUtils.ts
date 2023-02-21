import {AppStateType} from "../bll/store";

export const loadState = () => {
    try {
        const persistedToString = localStorage.getItem('app-state')
        if (persistedToString === null) {
            return undefined
        }
        return  JSON.parse(persistedToString)
    }catch (e){
        return undefined
    }
}


export const saveState = (state:AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('app-state',serializedState)
    }catch (e){

    }
}