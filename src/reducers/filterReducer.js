export default (state = [], action) => {
    let idx;
    switch (action.type) {
        case "FETCH_FILTERS":
        debugger
            //return state.concat(action.filters)
            return action.filters
        
//        case "FILTER_ATTACK_PATTERNS":
//        debugger
//       console.log(action)
//            return [ ...state, action.attackPatterns ]

        default:
            return state
    }
}
