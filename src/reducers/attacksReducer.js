export default (state = [], action) => {
    let idx;
    switch (action.type) {
        case "FETCH_ATTACK_PATTERNS":

            return action.attackPatterns.objects

        default:
            return state
    }
}