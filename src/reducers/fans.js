const initialState = {
    fans: ''
}

export default function fetchFans(state = initialState, action){
    switch(action.type){
        case "FETCH_FANS_SUCCESS":
            return {...state, fans: action.payload}
        default:
            return state
    }
}