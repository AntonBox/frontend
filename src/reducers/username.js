export default function sendUsername(state = [], action){
    switch(action.type){
        case "SEND_USERNAME_SUCCESS":
            return {...state, username: action.username}
        default:
            return state
    }
}