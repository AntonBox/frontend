export function fansFetchDataSuccess(fans){
    return{
        type: "FETCH_FANS_SUCCESS",
        fans
    };
}

export default function fetchFansAction(username) {
    return (dispatch) => {
        fetch(`http://127.0.0.1:8000/likes/get_likes/?username=${username}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(fans => dispatch(fansFetchDataSuccess(fans)))
            .catch(()=>{});
    }
}