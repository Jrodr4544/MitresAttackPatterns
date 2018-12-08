export default (state = [], action) => {
    let idx;
    switch (action.type) {
        case "FETCH_ATTACK_PATTERNS":
        debugger
            return action.attackPatterns

        default:
            return state
    }
}