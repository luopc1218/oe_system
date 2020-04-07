export const updateUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_USER",
            payload: user
        })
    }
}