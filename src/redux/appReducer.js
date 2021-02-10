import { HIDE_LOADER, SHOW_LOADER } from "./types"

const initialState = {
    loading: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
            break;
        case HIDE_LOADER:
            return {...state, loading: false}
            break;
        default: return state
    }
}