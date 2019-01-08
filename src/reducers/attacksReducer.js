export default (state = {loading: false, patterns: []}, action) => {

    switch (action.type) {
        case "LOADING_ATTACK_PATTERNS":
        debugger
		console.log('LOADING_ATTACK_PATTERNS')
            return { ...state, loading: true }

        case "FETCH_ATTACK_PATTERNS":
        debugger
        console.log('FETCHING_ATTACK_PATTERNS')
        console.log(action)
            return { ...state, patterns: action.attackPatterns }

        case "FETCH_ERROR_GENERATED":
        console.log('FETCH_ERROR_GENERATED')
        console.log(action)
            return { ...state, loading: action } 

        default:
            return state
    }

}