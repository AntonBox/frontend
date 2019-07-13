export default function fetchFans(action, state = []){
    switch(action.type){
        case "FETCH_FANS_SUCCESS":
            return {fans: action.fans}
        default:
            return state
    }
}