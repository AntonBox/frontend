export function usersFetchDataSuccess(data){
    return{
        type: "FETCH_FANS_SUCCESS",
        payload: data
    }
}

export function sendUsernameAction(username) {
    return (dispatch) => {
        fetch(`/likes/get_likes/?username=${username}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => dispatch(usersFetchDataSuccess(data)))
            .catch(()=>{});
    }
}