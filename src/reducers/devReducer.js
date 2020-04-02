const devState = {
    devKey: "c7d1f26ad9ba00ce89f3da58de41584a"
}


export default (state = devState, action) => {
    switch (action.type) {
        case "UPDATE_DEV_KEY":
            return {
                ...state, devKey: action.payload
            }
        default :
            return state
    }
}