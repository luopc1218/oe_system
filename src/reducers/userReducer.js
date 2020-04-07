const userState = {
    userId: "",
    userName: "",
    userType: 0
}
export default (state = userState, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return action.payload
        default :
            return state
    }
}