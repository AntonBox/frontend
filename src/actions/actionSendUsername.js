export default function sendUsernameAction(username){
    return{
        type: "SEND_USERNAME_SUCCESS",
        username: username
    }
}