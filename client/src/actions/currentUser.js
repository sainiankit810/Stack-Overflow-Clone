export const setCurrentUser = (data) => {
    return{
        type: 'FETCH_CURRRENT_USER',
        payload: data
    }
}