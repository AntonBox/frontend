import { history } from '../index';

export function sendUsernameSuccess(username){
    return{
        type: "SEND_USERNAME_SUCCESS",
        username
    };
}

export default function sendUsernameAction(username){
    return (dispatch) => {
        dispatch(sendUsernameSuccess(username));
        history.push('/fans');
    }
}