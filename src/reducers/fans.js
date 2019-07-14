export default function fetchFans(state = {fans: []}, action){
    switch(action.type){
        case "FETCH_FANS_SUCCESS":
            return {...state, fans: action.fans}
        default:
            return state
    }
}