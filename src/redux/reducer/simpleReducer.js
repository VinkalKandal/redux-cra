export default (state = {}, action) => {
    switch (action.type) {
        case "SIMPLE_ACTION":
            return {
                result: action.paload
            }
        default:
            return state
    }
}