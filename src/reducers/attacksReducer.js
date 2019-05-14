export default (state = {loading: false, patterns: []}, action) => {

    switch (action.type) {
        case "LOADING_ATTACK_PATTERNS":
        debugger
		console.log('LOADING_ATTACK_PATTERNS')
            return { ...state, loading: true }

        case 'POST_ATTACK_PATTERN_COMMENT':
        debugger
        console.log('POSTING_ATTACK_PATTERN_COMMENT')

            const updatedPatterns = state.patterns.map( pattern => {
                if (pattern.id === action.updatedAttackPattern.id) {
                    return action.updatedAttackPattern 
                };
                    return pattern;
            })

        console.log('UPDATED_AFTER_POSTED_COMMENT')

            return {...state, patterns: updatedPatterns }

        case "FETCH_ATTACK_PATTERNS":
        debugger
        console.log('FETCHING_ATTACK_PATTERNS')
        console.log(action)
            return { ...state, patterns: action.attackPatterns }

        case "FETCH_ERROR_GENERATED":
        debugger
        console.log('FETCH_ERROR_GENERATED')
        console.log(action)
            return { ...state, loading: action } 
    
        case "POST_ERROR_GENERATED":
        console.log('POST_ERROR_GENERATED')
            return { ...state, action }
        
        default:
            return state
    }

}