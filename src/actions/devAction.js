export const updateDevKey = (newKey) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_DEV_KEY",
            payload: newKey
        })
    }
}