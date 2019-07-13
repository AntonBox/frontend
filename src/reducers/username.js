export default function sendUsername(action, state = []){
    switch(action.type){
        case "SEND_USERNAME_SUCCESS":
            return {username: action.username}
        default:
            return state
    }
}