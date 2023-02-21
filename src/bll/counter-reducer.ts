const initialState = {
    value: 0
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: allCounterACType): InitialStateType => {
    switch (action.type) {
        case "SET-COUNTER": {
            return {...state, value: state.value + 1}
        }
        case "SET-VALUE-LOCAL": {
            return {...state, value: action.value}
        }
        default:
            return state
    }
}

export const counterAC = () => {
    return {
        type: 'SET-COUNTER',
    } as const
}

export const setValueFromLocalStorageAc = (value: number) => {
    return {
        type: 'SET-VALUE-LOCAL',
        value
    } as const
}

type allCounterACType = counterACType | setValueFromLCType


type counterACType = ReturnType<typeof counterAC>

type setValueFromLCType = ReturnType<typeof setValueFromLocalStorageAc>